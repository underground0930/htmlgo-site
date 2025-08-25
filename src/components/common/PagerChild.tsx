import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
  page: number
  loopIndex?: number
  children: React.ReactNode
}

export const PagerChild: React.FC<Props> = ({ page, loopIndex, children }) => {
  const linkClass = twMerge(
    'w-7 h-7 block bg-main text-white leading-7 text-sm',
    loopIndex !== undefined &&
      loopIndex + 1 === page &&
      'bg-[#ddd] text-[#222] font-bold',
  )
  const setLink = (index: number) => (index === 1 ? `/articles/` : `/articles/page/${index}/`)

  return (
    <li className='mx-1.5 inline-block h-5 w-5'>
      <Link
        className={linkClass}
        href={setLink(loopIndex !== undefined ? loopIndex + 1 : page)}
      >
        {children}
      </Link>
    </li>
  )
}
