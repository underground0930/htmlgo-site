'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

// libs
import { event } from 'libs/gtag'

type Props = {}

const className = {
  header: 'relative z-[1] mb-32px mx-20px border-b-1 border-border',
  inner: 'items-center justify-between max-w-[800px] mx-auto md:flex',
  h1: 'text-center leading-none font-bold text-25px pt-24px pb-16px md:text-left md:w-[210px] md:py-20px',
  nav: 'overflow-x-scroll md:overflow-x-auto scrolling-touch',
  ul: 'flex pb-10px md:pb-0px',
}

const linkStyle = ' hover:text-linkActive font-bold text-14px md:text-16px'

const clickHandler = (label: string, value: string) => {
  event({ action: 'click', category: `header`, label, value })
}

const Header = ({}: Props) => {
  const pathname = usePathname()

  return (
    <>
      <header className={className.header}>
        <div className={className.inner}>
          <h1 className={className.h1}>
            <Link href='/' className='no-underline'>
              HTMLGO
            </Link>
          </h1>
          <nav className={className.nav}>
            <ul className={className.ul}>
              <li>
                <Link href='/' className={(pathname === '/' ? 'text-linkActive' : '') + linkStyle}>
                  TOP
                </Link>
              </li>
              {['about', 'works', 'articles', 'contact'].map((v, index) => {
                return (
                  <li className='ml-20px' key={index}>
                    <Link
                      href={`/${v}/`}
                      className={
                        (pathname?.startsWith(`/${v}`) ? 'text-linkActive' : '') + linkStyle
                      }
                    >
                      {v.toLocaleUpperCase()}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
