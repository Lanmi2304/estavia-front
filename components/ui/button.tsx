import { Slot, Slottable } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

import { Spinner } from '@/components/ui/spinner'
import { cn } from '@/lib/utils/cn'

const buttonVariants = cva(
  'relative inline-flex cursor-pointer items-center justify-center font-semibold leading-none ring-offset-background transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      size: {
        default: 'rounded-md px-4 py-3',
        xs: 'rounded-sm px-2 py-1 text-sm',
        sm: 'rounded-md px-3 py-2',
        lg: 'rounded-lg px-5 py-3.5',
        icon: 'size-10 rounded-md',
      },
      variant: {
        default:
          'border bg-primary text-primary-foreground shadow-actions-primary hover:bg-primary/80 hover:shadow-actions-primary-hover active:shadow-actions-primary-active',
        secondary:
          'transform border bg-secondary shadow-actions-secondary hover:bg-secondary/80 hover:shadow-actions-secondary-hover active:shadow-actions-secondary-active',
        destructive:
          'bg-destructive text-secondary shadow-actions-primary hover:bg-destructive/80 hover:shadow-actions-primary-hover active:shadow-actions-primary-active dark:text-foreground',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isPending?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isPending, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ size, variant }), className)}
        ref={ref}
        {...props}
      >
        {isPending ? (
          <>
            <Spinner
              loading
              size="sm"
              className="absolute inset-0 z-10 m-auto"
              aria-hidden="true"
            />
            <span className="opacity-0">
              <Slottable>{props.children}</Slottable>
            </span>
          </>
        ) : (
          <Slottable>{props.children}</Slottable>
        )}
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
