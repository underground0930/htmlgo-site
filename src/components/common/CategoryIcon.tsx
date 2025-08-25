'use client'

import React from 'react'

type Props = {
  text: string
}

export const CategoryIcon: React.FC<Props> = ({ text }) => {
  return (
    <span className=':not(:last-of-type) mr-1 mt-1 inline-block rounded-1 bg-black px-1.5 py-0.5 text-xs text-white'>
      {text}
    </span>
  )
}
