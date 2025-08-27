'use client'

import type { ComponentProps, ReactNode } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { buttonVariants } from './variants'
import { ButtonLoadingSpinner } from './loading-spinner'

/**
 * Buttonコンポーネントのプロパティ型定義
 */
export type ButtonProps = Omit<ComponentProps<'button'>, 'className'> &
  VariantProps<typeof buttonVariants> & {
    icon?: ReactNode
    iconRight?: ReactNode
    loading?: boolean
  }

export function Button({
  variant,
  size,
  icon,
  iconRight,
  loading,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={buttonVariants({ variant, size })}
      disabled={disabled || loading}
    >
      {loading && <ButtonLoadingSpinner />}
      {!loading && icon}
      {children}
      {!loading && iconRight}
    </button>
  )
}
