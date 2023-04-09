'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const className = {
  header: 'relative z-[1] mb-32px mx-20px border-b-1 border-border',
  inner: 'items-center justify-between max-w-[800px] mx-auto md:flex',
  title:
    'text-center leading-none font-bold text-25px pt-24px pb-16px md:text-left md:w-[210px] md:py-20px',
  nav: 'overflow-x-scroll md:overflow-x-auto scrolling-touch',
  ul: 'flex pb-10px md:pb-0px',
  linkStyle: ' hover:text-linkActive font-bold text-14px md:text-16px',
}

const navList = ['about', 'works', 'articles', 'contact']

const Header = () => {
  const pathname = usePathname()
  const { header, inner, title, nav, ul, linkStyle } = className
  return (
    <>
      <header className={header}>
        <div className={inner}>
          <h1 className={title}>
            <Link href='/' className='no-underline'>
              HTMLGO
            </Link>
          </h1>
          <nav className={nav}>
            <ul className={ul}>
              <li>
                <Link
                  href='/'
                  className={(pathname === '/' ? 'text-linkActive' : '') + linkStyle}
                >
                  TOP
                </Link>
              </li>
              {navList.map((nav, index) => {
                return (
                  <li className='ml-20px' key={nav + String(index)}>
                    <Link
                      prefetch={false}
                      href={`/${nav}`}
                      className={
                        (pathname?.startsWith(`/${nav}`) ? 'text-linkActive' : '') +
                        linkStyle
                      }
                    >
                      {nav.toLocaleUpperCase()}
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
