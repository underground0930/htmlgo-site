'use client'

import { ImageWrapper } from './image-wrapper'

const links = [
  {
    href: 'https://nextjs.org/',
    key: 'Nextjs',
    src: '/svgs/IconNextjs.svg',
  },
  {
    href: 'https://vercel.com/home',
    key: 'Vercel',
    src: '/svgs/IconVercel.svg',
  },
  {
    href: 'https://tailwindcss.com/',
    key: 'Tailwind CSS',
    src: '/svgs/IconTailwindcss.svg',
  },
  {
    href: 'https://github.com/underground0930/htmlgo-site',
    key: 'github',
    src: '/svgs/IconGithub.svg',
  },
  {
    href: 'https://microcms.io/',
    key: 'microcms',
    src: '/svgs/IconMicrocms.svg',
  },
  {
    href: 'https://www.google.com/recaptcha/about/',
    key: 'recaptcha',
    src: '/svgs/IconRecaptcha.svg',
  },
]

export const Footer: React.FC = () => {
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
                      className='flex w-7 items-center justify-center [&>svg]:h-auto [&>svg]:w-full'
                      href={v.href}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <ImageWrapper src={v.src} alt={v.key} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </dd>
        </dl>
        <small className='text-xs block text-center'>
          Copyright © 2025 htmlgo.site All rights reserved.
        </small>
      </footer>
    </>
  )
}
