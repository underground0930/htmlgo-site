import Link from 'next/link'

type Props = {
  page: number
  loopIndex?: number
  children: React.ReactNode
}
const className = {
  li: `
    w-[20px]
    h-[20px]
    inline-block
    mx-6px
    `,
  a: `
    w-[30px]
    h-[30px]
    block
  bg-main
  text-[#fff]
    leading-[30px]
    text-15px
  `,
  currentLink: `
    bg-[#ddd]
    text-[#222]
    font-bold
  `,
}

const PagenationChild = ({ page, loopIndex, children }: Props) => {
  const linkClass =
    loopIndex !== undefined
      ? `${className.a} ${loopIndex + 1 === page ? className.currentLink : ''}`
      : className.a
  const setLink = (index: number) => {
    if (index === 1) {
      return `/articles/`
    }
    return `/articles/page/${index}/`
  }
  return (
    <li className={className.li}>
      <Link
        className={linkClass}
        href={setLink(loopIndex !== undefined ? loopIndex + 1 : page)}
      >
        {children}
      </Link>
    </li>
  )
}

export default PagenationChild
