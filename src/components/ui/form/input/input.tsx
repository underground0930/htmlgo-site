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

import { type ComponentPropsWithRef } from 'react'
import { type FieldValues, type UseFormRegister, type Path } from 'react-hook-form'
import { tv, type VariantProps } from 'tailwind-variants'

// スタイル定義
const inputVariants = tv({
  base: 'border-border block h-[42px] w-full rounded-[4px] border px-2 text-[16px]',
  variants: {
    error: {
      true: 'border-2 border-error outline-error',
    },
    disabled: {
      true: 'bg-disabled-bg text-disabled-font',
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
type Props = Omit<ComponentPropsWithRef<'input'>, 'type'> & {
  type?: InputType
  testId?: string
} & CommonVariantProps

export const Input = ({
  error,
  disabled = false,
  type = 'text',
  background,
  testId,
  name,
  id,
  ...props
}: Props) => {
  const className = inputVariants({ error: !!error, disabled, background })
  return (
    <input
      {...props}
      name={name}
      id={`htmlFor-${id ?? name}`}
      data-testid={testId}
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

export const InputWithRHF = <T extends FieldValues>({
  name,
  register,
  ...props
}: InputWithRHFProps<T>) => {
  return <Input {...props} {...register(name)} />
}

// 型推論を活用したヘルパー関数
export const createTypedInput = <T extends FieldValues>() => {
  return function TypedInput(props: InputWithRHFProps<T>) {
    return <InputWithRHF<T> {...props} />
  }
}
