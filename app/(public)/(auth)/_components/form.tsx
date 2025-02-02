'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/input-password'
import { authClient } from '@/lib/auth-client'

import { cn } from '@/lib/utils/cn'

import { useRouter } from 'next/navigation'
import { type ComponentProps, useTransition } from 'react'
import { toast } from 'sonner'
import { type SignInInput, signInSchema } from '../_schemas/sign-in.schemas'

export function SignInForm({ className }: ComponentProps<'form'>) {
  const [isPending, startTransition] = useTransition()

  const router = useRouter()

  const form = useForm({
    schema: signInSchema,
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = (values: SignInInput) => {
    startTransition(async () => {
      await authClient.signIn.email(
        {
          email: values.username,
          password: values.password,
        },
        {
          onSuccess: () => {
            router.push('/dashboard')
          },
          onError: (ctx) => {
            console.error(ctx.error.message)
            toast.error(ctx.error.message)
          },
        },
      )
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('w-full space-y-4', className)}
      >
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Username <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    autoComplete="username webauthn"
                    inputMode="email"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Password <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    autoComplete="current-password webauthn"
                    inputMode="text"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          isPending={isPending}
          disabled={isPending}
          className="w-full"
          type="submit"
          variant="default"
          aria-label="Login or Confirmation Button"
        >
          Sign In
        </Button>
      </form>
    </Form>
  )
}
