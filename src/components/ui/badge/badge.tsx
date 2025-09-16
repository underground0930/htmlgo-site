'use client'

import React from 'react'

type Props = Omit<React.ComponentPropsWithoutRef<'span'>, 'className'> & {
  text: string
}

export const Badge = ({ text, ...props }: Props) => {
  return (
    <span
      {...props}
      className=':not(:last-of-type) mt-1 mr-1 inline-block rounded-sm bg-black px-1.5 py-0.5 text-xs text-white'
    >
      {text}
    </span>
  )
}
