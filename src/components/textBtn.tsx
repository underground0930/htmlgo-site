'use client'

import Link from 'next/link'

type Props = {
  title: string
  link: string
  blank?: boolean
}
const className =
  'min-w-[120px] inline-block bg-btn text-btnIcon text-14px text-center text-decoration-none px-15px py-10px :visited:text-btnIcon'

const TextBtn = ({ title, link, blank = false }: Props) => {
  return (
    <>
      {blank && (
        <a className={className} href={link}>
          {title}
        </a>
      )}
      {!blank && (
        <Link href={link} className={className} prefetch={false}>
          {title}
        </Link>
      )}
    </>
  )
}

export default TextBtn
