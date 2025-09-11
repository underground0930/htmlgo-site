/**
 * 汎用Inputコンポーネント
 *
 * text, password, emailの3つのinput typeに対応し、
 * React Hook Formとの統合も型安全に実装しています。
 */

/**
 * 参考
 * https://zenn.dev/yuitosato/articles/292f13816993ef
 * https://hireroo.io/journal/tech/react-hook-form-within-mono-repo
 */

'use client'

import { type ComponentProps } from 'react'
import { type FieldValues, type UseFormRegister, type Path } from 'react-hook-form'
import { tv, type VariantProps } from 'tailwind-variants'

// スタイル定義
const inputVariants = tv({
  base: 'border-border block h-[42px] w-full rounded-[4px] border px-2 text-[14px] outline-[#EAC7C8] focus:bg-[#FBF6F5]',
  variants: {
    error: {
      true: 'border-2 border-[#DA3333] bg-[#FFEFE9] outline-[#DA3333] focus:bg-[#FFEFE9]',
    },
    disabled: {
      true: 'bg-[#F8F8F8] text-[#A8A8A8]',
    },
    background: {
      white: 'bg-white',
      gray: 'bg-form',
    },
  },
  defaultVariants: {
    background: 'white',
  },
})

type CommonVariantProps = VariantProps<typeof inputVariants>

// サポートするinput typeの定義
type InputType = 'text' | 'password' | 'email'

// 基本的なInputProps（React 19対応 - refを含む）
type Props = Omit<ComponentProps<'input'>, 'type'> & {
  type?: InputType
  dataTestId?: string
} & CommonVariantProps

export function Input({
  error,
  disabled = false,
  type = 'text',
  background,
  dataTestId,
  ...props
}: Props) {
  const className = inputVariants({ error: !!error, disabled, background })
  return (
    <input
      {...props}
      data-testid={dataTestId}
      type={type}
      disabled={disabled}
      className={className}
    />
  )
}

// React Hook Form統合用の型定義（React 19対応）
type InputWithRHFProps<T extends FieldValues> = {
  name: Path<T>
  register: UseFormRegister<T>
} & Omit<Props, 'name' | 'onChange' | 'onBlur' | 'ref'>

export function InputWithRHF<T extends FieldValues>({
  name,
  register,
  ...props
}: InputWithRHFProps<T>) {
  return <Input {...props} {...register(name)} />
}
