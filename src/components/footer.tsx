import styles from 'styles/components/Footer.module.scss'

import IconNextjs from 'svgs/IconNextjs.svg'
import IconVercel from 'svgs/IconVercel.svg'
import IconMicrocms from 'svgs/IconMicrocms.svg'
import IconGithub from 'svgs/IconGithub.svg'
import IconFormrun from 'svgs/IconFormrun.svg'
import IconRecaptcha from 'svgs/IconRecaptcha.svg'

// libs
import { event } from 'libs/gtag'

type Props = {}

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
    href: 'https://github.com/',
    key: 'github',
    icon: <IconGithub />,
  },
  {
    href: 'https://microcms.io/',
    key: 'microcms',
    icon: <IconMicrocms />,
  },
  {
    href: 'https://form.run/ja',
    key: 'form.run',
    icon: <IconFormrun />,
  },
  {
    href: 'https://www.google.com/recaptcha/about/',
    key: 'recaptcha',
    icon: <IconRecaptcha />,
  },
]

const Footer = ({}: Props) => {
  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: `footer`, label, value })
  }

  return (
    <>
      <footer className="bg-main text-footerText p-20px">
        <dl className="text-center text-14px mb-20px">
          <dt className="mb-15px">This website powered by</dt>
          <dd>
            <ul className="flex justify-center items-center">
              {links.map((v, index) => {
                return (
                  <li className="mx-7px" key={v.key}>
                    <a
                      href={v.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => {
                        clickHandler(v.key, e.currentTarget.href)
                      }}
                    >
                      {v.icon}
                    </a>
                  </li>
                )
              })}
            </ul>
          </dd>
        </dl>
        <small className="block text-10 text-center">Copyright © 2016 htmlgo.site All rights reserved.</small>
      </footer>
    </>
  )
}

export default Footer
