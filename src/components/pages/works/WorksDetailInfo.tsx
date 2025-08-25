import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

export const WorksDetailInfo: React.FC<Props> = ({ title, children }) => {
  return (
    <li className='mb-15px last-of-type:mb-0px'>
      <dl className='block border border-[#e5e5e5]'>
        <dt className='w-auto bg-[#e5e5e5] p-10px font-bold md:text-16px'>{title}</dt>
        <dd className='flex-1 break-words p-20px md:text-16px'>{children}</dd>
      </dl>
    </li>
  )
}
