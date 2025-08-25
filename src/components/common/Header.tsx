'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

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

export const Header: React.FC = () => {
  const pathname = usePathname()
  return (
    <>
      <header className='relative z-1 mx-5 mb-8 border-b border-border'>
        <div className='mx-auto max-w-[800px] items-center justify-between md:flex'>
          <h1 className='pb-4 pt-6 text-center text-2xl font-bold leading-none md:w-[210px] md:py-5 md:text-left'>
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
                        'text-lg font-bold hover:text-link-active',
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
    </>
  )
}
