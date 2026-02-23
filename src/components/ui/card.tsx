import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const cardVariants = cva(
  'bg-card text-card-foreground flex flex-col rounded-xl shadow-sm',
  {
    variants: {
      variant: {
        default: 'gap-6 border py-6',
        elevated:
          'border-0 shadow-md hover:shadow-lg transition-shadow duration-300 dark:shadow-blue-900/20 dark:hover:shadow-blue-900/40 py-0 gap-0',
        gradient:
          'border-0 shadow-lg dark:shadow-blue-900/30 mt-2 bg-gradient-to-br from-white to-blue-50/30 dark:from-slate-900 dark:to-blue-950/30 py-0',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const cardHeaderVariants = cva(
  '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
  {
    variants: {
      variant: {
        default: '',
        primary:
          'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg py-4',
        secondary:
          'flex flex-col bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800/50 dark:to-blue-900/30 rounded-t-lg py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const cardTitleVariants = cva('leading-none font-semibold', {
  variants: {
    variant: {
      default: '',
      primary: 'text-white text-xl font-bold',
      secondary:
        'flex items-center gap-3 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const cardDescriptionVariants = cva('text-muted-foreground text-sm', {
  variants: {
    variant: {
      default: '',
      primary: 'text-blue-100',
      secondary: 'text-gray-600 dark:text-gray-400 mt-1',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const cardContentVariants = cva('px-6', {
  variants: {
    variant: {
      default: '',
      primary: 'pt-6',
      secondary: 'bg-white/50 dark:bg-slate-900/50 rounded-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface CardProps
  extends React.ComponentProps<'div'>, VariantProps<typeof cardVariants> {}

export interface CardHeaderProps
  extends
    React.ComponentProps<'div'>,
    VariantProps<typeof cardHeaderVariants> {}

export interface CardTitleProps
  extends React.ComponentProps<'div'>, VariantProps<typeof cardTitleVariants> {}

export interface CardDescriptionProps
  extends
    React.ComponentProps<'div'>,
    VariantProps<typeof cardDescriptionVariants> {}

export interface CardContentProps
  extends
    React.ComponentProps<'div'>,
    VariantProps<typeof cardContentVariants> {}

function Card({ className, variant, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, variant, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(cardHeaderVariants({ variant }), className)}
      {...props}
    />
  )
}

function CardTitle({ className, variant, ...props }: CardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={cn(cardTitleVariants({ variant }), className)}
      {...props}
    />
  )
}

function CardDescription({
  className,
  variant,
  ...props
}: CardDescriptionProps) {
  return (
    <div
      data-slot="card-description"
      className={cn(cardDescriptionVariants({ variant }), className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, variant, ...props }: CardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={cn(cardContentVariants({ variant }), className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardDescriptionVariants,
  cardContentVariants,
}
