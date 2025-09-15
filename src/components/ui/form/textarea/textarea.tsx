import { type ComponentPropsWithRef } from 'react'
import { type FieldValues, type UseFormRegister, type Path } from 'react-hook-form'
import { tv, type VariantProps } from 'tailwind-variants'

const textareaVariants = tv({
  base: 'border-border block w-full resize-none rounded-sm border p-2 text-base',
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

type CommonVariantProps = VariantProps<typeof textareaVariants>

type Props = ComponentPropsWithRef<'textarea'> & {
  error?: boolean
  testId?: string
} & CommonVariantProps

export const Textarea = ({
  error,
  disabled = false,
  background,
  testId,
  name,
  id,
  ...props
}: Props) => {
  const className = textareaVariants({ error: !!error, disabled, background })
  return (
    <textarea
      {...props}
      name={name}
      id={`htmlFor-${id ?? name}`}
      data-testid={testId}
      className={className}
    />
  )
}

// React Hook Form統合用の型定義（React 19対応）
type InputWithRHFProps<T extends FieldValues> = {
  name: Path<T>
  register: UseFormRegister<T>
} & Omit<Props, 'name' | 'onChange' | 'onBlur' | 'ref'>

export const TextareaWithRHF = <T extends FieldValues>({
  name,
  register,
  ...props
}: InputWithRHFProps<T>) => {
  return <Textarea {...props} {...register(name)} />
}
