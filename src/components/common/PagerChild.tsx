import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
  page: number
  loopIndex?: number
  children: React.ReactNode
}

export const PagerChild: React.FC<Props> = ({ page, loopIndex, children }) => {
  const linkClass = twMerge(
    'w-[30px] h-[30px] block bg-main text-[#fff] leading-[30px] text-15px',
    loopIndex !== undefined &&
      loopIndex + 1 === page &&
      'bg-[#ddd] text-[#222] font-bold',
  )
  const setLink = (index: number) => {
    if (index === 1) {
      return `/articles/`
    }
    return `/articles/page/${index}/`
  }
  return (
    <li className='mx-6px inline-block h-[20px] w-[20px]'>
      <Link
        className={linkClass}
        href={setLink(loopIndex !== undefined ? loopIndex + 1 : page)}
      >
        {children}
      </Link>
    </li>
  )
}
