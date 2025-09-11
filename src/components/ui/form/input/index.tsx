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
  /** input要素のtype属性 */
  type?: InputType
  /** テスト用のdata-testid */
  dataTestId?: string
} & CommonVariantProps

/**
 * 汎用Inputコンポーネント（React 19対応）
 *
 * @param props - InputPropsに基づくプロパティ（refを含む）
 * @returns input要素
 */
export function Input({
  error,
  disabled = false,
  name,
  type = 'text',
  background,
  dataTestId,
  ref,
  ...props
}: Props) {
  const className = inputVariants({ error: !!error, disabled, background })
  return (
    <input
      {...props}
      ref={ref}
      name={name}
      data-testid={dataTestId}
      type={type}
      disabled={disabled}
      className={className}
    />
  )
}

// React Hook Form統合用の型定義（React 19対応）
type InputWithRHFProps<T extends FieldValues> = {
  /** フィールド名（フォームデータの型に基づく） */
  name: Path<T>
  /** React Hook Formのregister関数 */
  register: UseFormRegister<T>
} & Omit<Props, 'name' | 'onChange' | 'onBlur' | 'ref'>

/**
 * React Hook Form統合版Inputコンポーネント
 *
 * @template T - フォームデータの型（例: { username: string, email: string }）
 * @param props - InputWithRHFPropsに基づくプロパティ
 * @returns registerが適用されたInputコンポーネント
 *
 * @example
 * type FormData = { username: string, email: string }
 * <InputWithRHF<FormData> name="username" register={register} />
 */
export function InputWithRHF<T extends FieldValues>({
  name,
  register,
  ...props
}: InputWithRHFProps<T>) {
  return <Input {...props} {...register(name)} />
}
