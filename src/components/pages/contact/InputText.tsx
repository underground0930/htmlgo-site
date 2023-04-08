import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  name: string
  label: string
  textarea?: boolean
  row?: number
  getError: (key: string) => string | undefined
  register: UseFormRegister<FieldValues>
}

const existType = (type: string) =>
  ['text', 'email', 'textarea'].some((v) => v === type) ? type : 'text'

export const InputText: React.FC<Props> = ({
  name,
  label,
  textarea = false,
  row,
  getError,
  register,
}) => {
  const error = getError(name)
  return (
    <>
      <label
        className='mb-10px block border-l-5 pl-10px text-16px font-bold'
        htmlFor={name}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          className='block w-full resize-none border-1 border-border p-8px text-16px'
          id={name}
          rows={row ?? 10}
          {...register(name)}
        />
      ) : (
        <input
          type='text'
          className='block w-full border-1 border-border p-8px text-16px'
          id={name}
          {...register(name)}
        />
      )}

      {error && <div className='pt-5px text-14px font-bold text-[#f00]'>{error}</div>}
    </>
  )
}