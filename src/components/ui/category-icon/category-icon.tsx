'use client'

import React from 'react'

type Props = React.ComponentPropsWithoutRef<'span'> & {
  text: string
}

export const CategoryIcon = ({ text, ...props }: Props) => {
  return (
    <span
      {...props}
      className=':not(:last-of-type) mt-1 mr-1 inline-block rounded-sm bg-black px-1.5 py-0.5 text-xs text-white'
    >
      {text}
    </span>
  )
}
