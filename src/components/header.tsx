import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from 'styles/components/Header.module.scss'

type Props = {}

const Header = ({}: Props) => {
  const { asPath } = useRouter()
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <h1 className={styles.title}>
            <Link href="/">
              <a>HTMLGO</a>
            </Link>
          </h1>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href="/">
                  <a className={asPath === '/' ? 'active' : undefined}>TOP</a>
                </Link>
              </li>
              <li>
                <Link href="/about/">
                  <a className={asPath.startsWith('/about') ? 'active' : undefined}>ABOUT</a>
                </Link>
              </li>
              <li>
                <Link href="/works/">
                  <a className={asPath.startsWith('/works') ? 'active' : undefined}>WORKS</a>
                </Link>
              </li>
              <li>
                <Link href="/articles/">
                  <a className={asPath.startsWith('/articles') ? 'active' : undefined}>ARTICLES</a>
                </Link>
              </li>
              <li>
                <Link href="/contact/">
                  <a className={asPath.startsWith('/contact') ? 'active' : undefined}>CONTACT</a>
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
