'use client'

import { buttonVariants } from './variants'
import type { ButtonProps } from './types'
import { ButtonLoadingSpinner } from './loading-spinner'

/**
 * ボタンコンポーネント
 *
 * @description React 19対応版 - forwardRefを使用せずrefを直接受け取る
 * フォーム送信やクリックイベントで使用するボタンコンポーネント
 *
 * @param props ボタンのプロパティ
 * @returns JSX.Element
 */
export function Button({
  className,
  variant,
  size,
  rounded,
  icon,
  iconRight,
  loading,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, rounded, className })}
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
