'use client'

import React from 'react'

type Props = React.ComponentPropsWithoutRef<'span'> & {
  text: string
}

export const CategoryIcon: React.FC<Props> = ({ text }) => {
  return (
    <span className=':not(:last-of-type) rounded-1 mt-1 mr-1 inline-block bg-black px-1.5 py-0.5 text-xs text-white'>
      {text}
    </span>
  )
}
