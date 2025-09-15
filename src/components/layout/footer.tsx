'use client'

import React from 'react'
import { Icon, type IconName } from '@/components/utils/icon'

type Props = Omit<React.ComponentPropsWithoutRef<'footer'>, 'className'>

const links: {
  href: string
  key: IconName
}[] = [
  {
    href: 'https://nextjs.org/',
    key: 'nextjs',
  },
  {
    href: 'https://vercel.com/home',
    key: 'vercel',
  },
  {
    href: 'https://tailwindcss.com/',
    key: 'tailwindcss',
  },
  {
    href: 'https://github.com/underground0930/htmlgo-site',
    key: 'github',
  },
  {
    href: 'https://microcms.io/',
    key: 'microcms',
  },
  {
    href: 'https://www.google.com/recaptcha/about/',
    key: 'recaptcha',
  },
]

export const Footer = (props: Props) => {
  return (
    <footer {...props} className='bg-main p-5 text-white'>
      <dl className='mb-5 text-center text-sm'>
        <dt className='mb-4'>This website powered by</dt>
        <dd>
          <ul className='flex items-center justify-center'>
            {links.map((link) => {
              const IconComponent = Icon[link.key]
              return (
                <li className='mx-2' key={link.key}>
                  <a
                    className='relative flex w-7 items-center justify-center [&>svg]:h-auto [&>svg]:w-full'
                    href={link.href}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <IconComponent size={28} alt={link.key} />
                  </a>
                </li>
              )
            })}
          </ul>
        </dd>
      </dl>
      <small className='block text-center text-xs'>
        Copyright © 2025 htmlgo.site All rights reserved.
      </small>
    </footer>
  )
}
