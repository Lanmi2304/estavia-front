import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils/cn";

const spinnerVariants = cva("relative block opacity-65", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-6",
      lg: "size-8",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
  loading?: boolean;
  asChild?: boolean;
  inverted?: boolean;
}

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  (
    {
      className,
      size,
      loading = true,
      inverted = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "span";

    if (!loading) return null;

    return (
      <Comp
        className={cn(spinnerVariants({ size, className }))}
        ref={ref}
        {...props}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={crypto.randomUUID()}
            className="absolute top-0 left-1/2 h-full w-[12.5%] animate-spinner-leaf-fade"
            style={{
              transform: `rotate(${i * 45}deg)`,
              animationDelay: `${-(7 - i) * 100}ms`,
            }}
          >
            <span
              className={cn(
                "block h-[30%] w-full rounded-full",
                inverted ? "bg-foreground" : "bg-white"
              )}
            />
          </span>
        ))}
      </Comp>
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
