import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { FormBodyData } from '@/types'

type Props = {
  name: string
  label: string
  textarea?: boolean
  row?: number
  getError: (name: string) => string | undefined
  register: UseFormRegister<FormBodyData & FieldValues>
}

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
