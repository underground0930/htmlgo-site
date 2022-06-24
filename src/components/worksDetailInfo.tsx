import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

const className = {
  li: `mb-15px last-of-type:mb-0px`,
  dl: `block border-1 border-[#e5e5e5]`,
  dt: `w-auto font-bold md:text-16px p-10px bg-[#e5e5e5]`,
  dd: `p-20px flex-1 md:text-16px break-words`,
}

const WorksDetailInfoChild: React.FC<Props> = ({ title, children }) => {
  return (
    <li className={className.li}>
      <dl className={className.dl}>
        <dt className={className.dt}>{title}</dt>
        <dd className={className.dd}>{children}</dd>
      </dl>
    </li>
  )
}

export default WorksDetailInfoChild
