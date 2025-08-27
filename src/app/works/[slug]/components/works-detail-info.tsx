import React from 'react'

type Props = React.ComponentPropsWithoutRef<'li'> & {
  title: string
  children: React.ReactNode
}

export const WorksDetailInfo: React.FC<Props> = ({ title, children }) => {
  return (
    <li className='mb-4 last-of-type:mb-0'>
      <dl className='block border border-[#e5e5e5]'>
        <dt className='w-auto bg-[#e5e5e5] p-2.5 font-bold md:text-base'>{title}</dt>
        <dd className='flex-1 p-5 break-words md:text-base'>{children}</dd>
      </dl>
    </li>
  )
}
