import Link from 'next/link'
import { type ComponentPropsWithoutRef } from 'react'
import { tv } from 'tailwind-variants'

type Props = ComponentPropsWithoutRef<'li'> & {
  page: number
  basePath: string
  isActive?: boolean
  queryParams?: string
}

const pagerChildVariants = tv({
  base: 'flex h-7 w-7 items-center justify-center rounded-full bg-main text-sm text-white hover:bg-[#ddd] hover:text-[#222]',
  variants: {
    isActive: {
      true: 'bg-[#ddd] text-[#222] font-bold',
    },
  },
})

export const PagerChild = ({
  page,
  basePath,
  isActive,
  queryParams,
  children,
  ...props
}: Props) => {
  const className = pagerChildVariants({ isActive })

  // クエリパラメータをURLSearchParamsに変換
  const createUrl = () => {
    const baseUrl = page === 1 ? basePath : `${basePath}/page/${page}`

    if (queryParams) {
      return baseUrl + queryParams
    }
    return baseUrl
  }

  return (
    <li {...props}>
      <Link className={className} href={createUrl()}>
        {children}
      </Link>
    </li>
  )
}
