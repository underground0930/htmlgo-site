/**
 * フォーム用ErrorTextコンポーネント
 *
 * バリデーションエラーメッセージを統一されたスタイルで表示するコンポーネントです。
 * エラーがない場合は何も表示されません。
 */

import { type ComponentPropsWithRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

// スタイル定義
const errorTextVariants = tv({
  base: 'pt-1 text-sm font-bold text-error',
  variants: {
    size: {
      sm: 'text-xs',
      base: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'base',
  },
})

type CommonVariantProps = VariantProps<typeof errorTextVariants>

type Props = ComponentPropsWithRef<'div'> & {
  /** エラーメッセージ（空の場合は何も表示されない） */
  error?: string
  /** テスト用のdata-testid */
  dataTestId?: string
} & CommonVariantProps

export function ErrorText({ error, size, dataTestId, className, ...props }: Props) {
  // エラーがない場合は何も表示しない
  if (!error) return null

  const errorClassName = errorTextVariants({ size })

  return (
    <div
      {...props}
      data-testid={dataTestId}
      className={className ? `${errorClassName} ${className}` : errorClassName}
    >
      {error}
    </div>
  )
}
