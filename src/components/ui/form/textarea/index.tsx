import { type ComponentProps } from 'react'
import { type FieldValues, type UseFormRegister, type Path } from 'react-hook-form'
import { tv, type VariantProps } from 'tailwind-variants'

const textareaVariants = tv({
  base: 'border-border block w-full resize-none rounded-[4px] border p-2 text-base outline-[#EAC7C8] focus:bg-[#FBF6F5]',
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

type CommonVariantProps = VariantProps<typeof textareaVariants>

type Props = ComponentProps<'textarea'> & {
  error?: string
  dataTestId?: string
} & CommonVariantProps

export const Textarea = ({ error, disabled = false, background, dataTestId, ...props }: Props) => {
  const className = textareaVariants({ error: !!error, disabled, background })

  return <textarea {...props} data-testid={dataTestId} className={className} />
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
  return <Textarea {...props} {...register(name)} />
}
