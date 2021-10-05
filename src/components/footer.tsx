import styles from 'styles/components/Footer.module.scss'

import IconNextjs from 'svgs/IconNextjs.svg'
import IconMicrocms from 'svgs/IconMicrocms.svg'
import IconGithub from 'svgs/IconGithub.svg'
import IconFormrun from 'svgs/IconFormrun.svg'
import IconRecaptcha from 'svgs/IconRecaptcha.svg'

// libs
import { event } from 'libs/gtag'

type Props = {}

const Footer = ({}: Props) => {
  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: `footer`, label, value })
  }

  return (
    <>
      <footer className={styles.footer}>
        <dl>
          <dt>This website powered by</dt>
          <dd>
            <ul>
              <li>
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    clickHandler('nextjs', e.currentTarget.href)
                  }}
                >
                  <IconNextjs />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    clickHandler('github', e.currentTarget.href)
                  }}
                >
                  <IconGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://microcms.io/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    clickHandler('microcms', e.currentTarget.href)
                  }}
                >
                  <IconMicrocms />
                </a>
              </li>
              <li>
                <a
                  href="https://form.run/ja"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    clickHandler('form.run', e.currentTarget.href)
                  }}
                >
                  <IconFormrun />
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/recaptcha/about/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    clickHandler('recaptcha', e.currentTarget.href)
                  }}
                >
                  <IconRecaptcha />
                </a>
              </li>
            </ul>
          </dd>
        </dl>
        <small>Copyright © 2016 htmlgo.site All rights reserved.</small>
      </footer>
    </>
  )
}

export default Footer
