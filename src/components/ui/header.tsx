'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

type Props = React.ComponentPropsWithoutRef<'header'>

const navList = [
  {
    label: 'Top',
    href: '/',
    active: (pathname: string): boolean => pathname === '/',
  },
  {
    label: 'About',
    href: '/about',
    active: (pathname: string): boolean => pathname.startsWith('/about'),
  },
  {
    label: 'Works',
    href: '/works',
    active: (pathname: string): boolean => pathname.startsWith('/works'),
  },
  {
    label: 'Articles',
    href: '/articles',
    active: (pathname: string): boolean => pathname.startsWith('/articles'),
  },
  {
    label: 'Contact',
    href: '/contact',
    active: (pathname: string): boolean => pathname.startsWith('/contact'),
  },
]

export const Header: React.FC<Props> = (props) => {
  const pathname = usePathname()
  return (
    <header {...props} className='border-border relative z-1 mx-5 mb-8 border-b'>
      <div className='mx-auto max-w-[800px] items-center justify-between md:flex'>
        <h1 className='pt-6 pb-4 text-center text-2xl leading-none font-bold md:w-[210px] md:py-5 md:text-left'>
          <Link href='/' className='no-underline'>
            HTMLGO
          </Link>
        </h1>
        <nav className='scrolling-touch overflow-x-scroll md:overflow-x-auto'>
          <ul className='flex pb-2.5 md:pb-0'>
            {navList.map((item, index) => {
              return (
                <li className='ml-5' key={item.href + String(index)}>
                  <Link
                    prefetch={false}
                    href={item.href}
                    className={twMerge(
                      'hover:text-link-active text-lg font-bold',
                      item.active(pathname) && 'text-link-active',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
