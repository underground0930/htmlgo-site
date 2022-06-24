import React from 'react'

type Props = {
  text: string
}

const CategoryIcon: React.FC<Props> = ({ text }) => {
  return (
    <span className="inline-block bg-[#000] rounded-[3px] text-btnIcon text-10px mt-4px px-6px py-3px :not(:last-of-type) mr-5px">
      {text}
    </span>
  )
}

export default CategoryIcon
