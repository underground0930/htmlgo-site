'use client'

import { ImageWrapper } from './ImageWrapper'

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
      <footer className='bg-main p-20px text-footerText'>
        <dl className='mb-20px text-center text-14px'>
          <dt className='mb-15px'>This website powered by</dt>
          <dd>
            <ul className='flex items-center justify-center'>
              {links.map((v) => {
                return (
                  <li className='mx-7px' key={v.key}>
                    <a
                      className='flex w-[30px] items-center justify-center [&>svg]:h-auto [&>svg]:w-full'
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
        <small className='text-10 block text-center'>
          Copyright © 2025 htmlgo.site All rights reserved.
        </small>
      </footer>
    </>
  )
}
