'use client'

import React from 'react'

type Props = {
  text: string
}

export const CategoryIcon: React.FC<Props> = ({ text }) => {
  return (
    <span className=':not(:last-of-type) mr-5px mt-4px inline-block rounded-[3px] bg-[#000] px-6px py-3px text-10px text-btnIcon'>
      {text}
    </span>
  )
}
