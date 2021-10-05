import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from 'styles/components/Header.module.scss'

// libs
import { event } from 'libs/gtag'

type Props = {}

const Header = ({}: Props) => {
  const { asPath } = useRouter()
  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: `header`, label, value })
  }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <h1 className={styles.title}>
            <Link href="/">
              <a
                onClick={() => {
                  clickHandler('top_logo', '/')
                }}
              >
                HTMLGO
              </a>
            </Link>
          </h1>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href="/">
                  <a
                    className={asPath === '/' ? 'active' : undefined}
                    onClick={() => {
                      clickHandler('top', '/')
                    }}
                  >
                    TOP
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about/">
                  <a
                    className={asPath.startsWith('/about') ? 'active' : undefined}
                    onClick={() => {
                      clickHandler('about', '/about/')
                    }}
                  >
                    ABOUT
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/works/">
                  <a
                    className={asPath.startsWith('/works') ? 'active' : undefined}
                    onClick={() => {
                      clickHandler('works', '/works/')
                    }}
                  >
                    WORKS
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/articles/">
                  <a
                    className={asPath.startsWith('/articles') ? 'active' : undefined}
                    onClick={() => {
                      clickHandler('articles', '/articles/')
                    }}
                  >
                    ARTICLES
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact/">
                  <a
                    className={asPath.startsWith('/contact') ? 'active' : undefined}
                    onClick={() => {
                      clickHandler('contact', '/contact/')
                    }}
                  >
                    CONTACT
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
