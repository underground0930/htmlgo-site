import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = React.ComponentPropsWithoutRef<'li'> & {
  page: number
  basePath: string
  isActive?: boolean
}

export const PagerChild = ({ page, basePath, isActive, children, ...props }: Props) => {
  const linkClass = twMerge(
    'flex h-7 w-7 items-center justify-center rounded-full bg-main text-sm text-white hover:bg-[#ddd] hover:text-[#222]',
    isActive && 'bg-[#ddd] text-[#222] font-bold',
  )

  const generateLink = (pageNum: number): string => {
    if (pageNum === 1) {
      return basePath === '/articles' ? '/articles/' : basePath
    }
    return `${basePath}/page/${pageNum}/`
  }

  return (
    <li {...props}>
      <Link className={linkClass} href={generateLink(page)}>
        {children}
      </Link>
    </li>
  )
}
