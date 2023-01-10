'use client'

import React from 'react'

type Props = {
  text: string
}

const CategoryIcon: React.FC<Props> = ({ text }) => {
  return (
    <span className=':not(:last-of-type) mt-4px mr-5px inline-block rounded-[3px] bg-[#000] px-6px py-3px text-10px text-btnIcon'>
      {text}
    </span>
  )
}

export default CategoryIcon
