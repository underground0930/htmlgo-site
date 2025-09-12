/**
 * フォーム用Labelコンポーネント
 *
 * 統一されたスタイルとアクセシビリティを持つラベルコンポーネントです。
 * 必須項目の表示、カスタムスタイリングに対応しています。
 */

import { type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

// スタイル定義
const labelVariants = tv({
  base: 'mb-2.5 block border-l-5 pl-2.5 text-base font-bold',
  variants: {
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    },
    required: {
      true: "after:ml-1 after:text-[#DA3333] after:content-['*']",
    },
  },
  defaultVariants: {
    size: 'base',
  },
})

type CommonVariantProps = VariantProps<typeof labelVariants>

type Props = ComponentProps<'label'> & {
  /** ラベルテキスト */
  children: React.ReactNode
  /** 必須項目かどうか */
  required?: boolean
  /** テスト用のdata-testid */
  dataTestId?: string
} & CommonVariantProps

export function Label({ children, required, size, dataTestId, ...props }: Props) {
  const labelClassName = labelVariants({ size, required })

  return (
    <label {...props} data-testid={dataTestId} className={labelClassName}>
      {children}
    </label>
  )
}
