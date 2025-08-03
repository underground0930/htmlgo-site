'use client'

import IconGithub from '@/svgs/IconGithub.svg'
import IconMicrocms from '@/svgs/IconMicrocms.svg'
import IconNextjs from '@/svgs/IconNextjs.svg'
import IconRecaptcha from '@/svgs/IconRecaptcha.svg'
import IconTailwindcss from '@/svgs/IconTailwindcss.svg'
import IconVercel from '@/svgs/IconVercel.svg'

const links = [
  {
    href: 'https://nextjs.org/',
    key: 'Nextjs',
    icon: <IconNextjs />,
  },
  {
    href: 'https://vercel.com/home',
    key: 'Vercel',
    icon: <IconVercel />,
  },
  {
    href: 'https://tailwindcss.com/',
    key: 'Tailwind CSS',
    icon: <IconTailwindcss />,
  },
  {
    href: 'https://github.com/underground0930/htmlgo-site',
    key: 'github',
    icon: <IconGithub />,
  },
  {
    href: 'https://microcms.io/',
    key: 'microcms',
    icon: <IconMicrocms />,
  },
  {
    href: 'https://www.google.com/recaptcha/about/',
    key: 'recaptcha',
    icon: <IconRecaptcha />,
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
                      {v.icon}
                    </a>
                  </li>
                )
              })}
            </ul>
          </dd>
        </dl>
        <small className='text-10 block text-center'>
          Copyright © 2016 htmlgo.site All rights reserved.
        </small>
      </footer>
    </>
  )
}
