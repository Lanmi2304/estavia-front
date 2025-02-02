'use client'

import { forwardRef, useState } from 'react'

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils/cn'
import { PiEye02OffContrast } from './icons/pi-eye02-off-contrast'
import { PiEye02OnContrast } from './icons/pi-eye02-on-contrast'
import { Input, type InputProps } from './input'

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const disabled =
      props.value === '' || props.value === undefined || props.disabled

    return (
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn('hide-password-toggle pr-10', className)}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}
        >
          {showPassword && !disabled ? (
            <PiEye02OnContrast className="size-4" aria-hidden="true" />
          ) : (
            <PiEye02OffContrast className="size-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? 'Hide password' : 'Show password'}
          </span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
      </div>
    )
  },
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
