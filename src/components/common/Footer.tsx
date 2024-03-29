'use client'

import IconGithub from '@/svgs/IconGithub.svg'
import IconMicrocms from '@/svgs/IconMicrocms.svg'
import IconNewt from '@/svgs/IconNewt.svg'
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
    href: 'https://www.newt.so/',
    key: 'newt',
    icon: <IconNewt />,
  },
  {
    href: 'https://www.google.com/recaptcha/about/',
    key: 'recaptcha',
    icon: <IconRecaptcha />,
  },
]

const className = {
  footer: `bg-main text-footerText p-20px`,
  dl: `text-center text-14px mb-20px`,
  dt: `mb-15px`,
  dd: ``,
  ul: `flex justify-center items-center`,
  li: `mx-7px`,
  a: `flex justify-center items-center w-[30px] [&>svg]:w-full [&>svg]:h-auto`,
  small: `block text-10 text-center`,
}

export const Footer: React.FC = () => {
  return (
    <>
      <footer className={className.footer}>
        <dl className={className.dl}>
          <dt className={className.dt}>This website powered by</dt>
          <dd>
            <ul className={className.ul}>
              {links.map((v) => {
                return (
                  <li className={className.li} key={v.key}>
                    <a
                      className={className.a}
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
        <small className={className.small}>
          Copyright © 2016 htmlgo.site All rights reserved.
        </small>
      </footer>
    </>
  )
}
