'use client'

import Link from 'next/link'

type Props = {
  title: string
  link: string
  blank?: boolean
}
const className =
  'min-w-[120px] inline-block bg-base text-white text-sm text-center text-decoration-none px-4 py-2.5 :visited:text-white'

export const TextBtn: React.FC<Props> = ({ title, link, blank = false }) => {
  return (
    <>
      {blank ? (
        <a className={className} href={link} target='_blank' rel='noreferrer'>
          {title}
        </a>
      ) : (
        <Link href={link} className={className} prefetch={false}>
          {title}
        </Link>
      )}
    </>
  )
}
