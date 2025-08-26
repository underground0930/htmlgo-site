import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { FormBodyData } from '../types/contact'

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
        className='mb-2.5 block border-l-5 pl-2.5 text-base font-bold'
        htmlFor={name}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          className='block w-full resize-none border border-border p-2 text-base'
          id={name}
          rows={row ?? 10}
          {...register(name)}
        />
      ) : (
        <input
          type='text'
          className='block w-full border border-border p-2 text-base'
          id={name}
          {...register(name)}
        />
      )}

      {error && <div className='pt-1 text-sm font-bold text-[#f00]'>{error}</div>}
    </>
  )
}
