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
      <header className="relative z-[1] mb-32px mx-20px border-b border-border">
        <div className="items-center justify-between mx-auto md:flex">
          <h1 className="text-center leading-none font-bold text-25px pt-24px pb-16px md:text-left md:w-[210px] md:py-20px">
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
            <ul className="flex pb-8px md:pb-0px">
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
                  <li className="ml-20px" key={index}>
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
