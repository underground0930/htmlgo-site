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
    active: (pathname: string): boolean => pathname === '/about',
  },
  {
    label: 'Works',
    href: '/works',
    active: (pathname: string): boolean => pathname === '/works',
  },
  {
    label: 'Articles',
    href: '/articles',
    active: (pathname: string): boolean => pathname === '/articles',
  },
  {
    label: 'Contact',
    href: '/contact',
    active: (pathname: string): boolean => pathname === '/contact',
  },
]

export const Header: React.FC = () => {
  const pathname = usePathname()
  return (
    <>
      <header className='relative z-[1] mx-20px mb-32px border-b-1 border-border'>
        <div className='mx-auto max-w-[800px] items-center justify-between md:flex'>
          <h1 className='pb-16px pt-24px text-center text-25px font-bold leading-none md:w-[210px] md:py-20px md:text-left'>
            <Link href='/' className='no-underline'>
              HTMLGO
            </Link>
          </h1>
          <nav className='scrolling-touch overflow-x-scroll md:overflow-x-auto'>
            <ul className='flex pb-10px md:pb-0px'>
              {navList.map((item, index) => {
                return (
                  <li className='ml-20px' key={item.href + String(index)}>
                    <Link
                      prefetch={false}
                      href={item.href}
                      className={twMerge(
                        'text-14px font-bold hover:text-linkActive md:text-16px',
                        item.active(pathname) && 'text-linkActive',
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
