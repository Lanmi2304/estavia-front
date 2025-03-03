import type { ComponentPropsWithRef } from 'react'

import { cn } from '@/lib/utils/cn'

export type InputProps = ComponentPropsWithRef<'input'>

function Input({ className, ref, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'flex h-[2.625rem] w-full rounded-md border border-input bg-background px-3 py-2 shadow-actions-secondary ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}

Input.displayName = 'Input'

export { Input }
