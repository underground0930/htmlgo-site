'use client'

import { ComponentPropsWithoutRef } from 'react'

type Props = Omit<ComponentPropsWithoutRef<'h2'>, 'className'> & {
  title: string
  text?: string
}

export const Title = ({ title, text, ...props }: Props) => {
  return (
    <h2 {...props} className='mb-6 text-center leading-5 md:mb-10'>
      <span className='mb-1 block text-xl font-bold md:text-3xl'>{title}</span>
      {text && <span className='block text-xs'>{text}</span>}
    </h2>
  )
}
