'use client'

import React from 'react'
import { Image } from '@/components/utils/image'

const links = [
  {
    href: 'https://nextjs.org/',
    key: 'Nextjs',
    src: '/img/footer/icon-nextjs.svg',
  },
  {
    href: 'https://vercel.com/home',
    key: 'Vercel',
    src: '/img/footer/icon-vercel.svg',
  },
  {
    href: 'https://tailwindcss.com/',
    key: 'Tailwind CSS',
    src: '/img/footer/icon-tailwindcss.svg',
  },
  {
    href: 'https://github.com/underground0930/htmlgo-site',
    key: 'github',
    src: '/img/footer/icon-github.svg',
  },
  {
    href: 'https://microcms.io/',
    key: 'microcms',
    src: '/img/footer/icon-microcms.svg',
  },
  {
    href: 'https://www.google.com/recaptcha/about/',
    key: 'recaptcha',
    src: '/img/footer/icon-recaptcha.svg',
  },
]

type Props = React.HTMLAttributes<HTMLElement>

export const Footer: React.FC<Props> = () => {
  return (
    <>
      <footer className='bg-main p-5 text-white'>
        <dl className='mb-5 text-center text-sm'>
          <dt className='mb-4'>This website powered by</dt>
          <dd>
            <ul className='flex items-center justify-center'>
              {links.map((v) => {
                return (
                  <li className='mx-2' key={v.key}>
                    <a
                      className='relative flex w-7 items-center justify-center [&>svg]:h-auto [&>svg]:w-full'
                      href={v.href}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Image src={v.src} alt={v.key} />
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
    </>
  )
}
