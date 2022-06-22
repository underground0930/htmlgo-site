import Link from 'next/link'
import { useRouter } from 'next/router'

// libs
import { event } from 'libs/gtag'

type Props = {}

const linkStyle = ' hover:text-linkActive font-bold text-14px md:text-16px'

const Header = ({}: Props) => {
  const { asPath } = useRouter()
  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: `header`, label, value })
  }
  return (
    <>
      <header className="relative z-[1] mb-10 mx-5 border-b">
        <div className="items-center justify-between mx-auto md:flex md:max-w-5xl">
          <h1 className="text-center leading-none font-bold text-25px pt-6 pb-4 md:text-left md:w-52 md:py-5">
            <Link href="/">
              <a
                className="no-underline"
                onClick={() => {
                  clickHandler('top_logo', '/')
                }}
              >
                HTMLGO
              </a>
            </Link>
          </h1>
          <nav className="overflow-x-scroll md:overflow-x-auto scrolling-touch">
            <ul className="flex pb-2 md:pb-0">
              <li>
                <Link href="/">
                  <a
                    className={(asPath === '/' ? 'text-linkActive' : '') + linkStyle}
                    onClick={() => {
                      clickHandler('top', '/')
                    }}
                  >
                    TOP
                  </a>
                </Link>
              </li>
              {['about', 'works', 'articles', 'contact'].map((v, index) => {
                return (
                  <li className="ml-5" key={index}>
                    <Link href={`/${v}/`}>
                      <a
                        className={(asPath.startsWith(`/${v}`) ? 'text-linkActive' : '') + linkStyle}
                        onClick={() => {
                          clickHandler(v, `/${v}/`)
                        }}
                      >
                        {v.toLocaleUpperCase()}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
