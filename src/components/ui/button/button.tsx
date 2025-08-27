'use client'

import type { ComponentProps, ReactNode } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { buttonVariants } from './variants'
import { ButtonLoadingSpinner } from './loading-spinner'

/**
 * Buttonコンポーネントのプロパティ型定義
 */
export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    /** ボタン内に表示するアイコン（左側） */
    icon?: ReactNode
    /** ボタン内に表示するアイコン（右側） */
    iconRight?: ReactNode
    /** ローディング状態 */
    loading?: boolean
  }

export function Button({
  className,
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
      className={buttonVariants({ variant, size, className })}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <ButtonLoadingSpinner />}
      {!loading && icon}
      {children}
      {!loading && iconRight}
    </button>
  )
}
