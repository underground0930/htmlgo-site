import Link from 'next/link'
import { useRouter } from 'next/router'

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
      <header className="relative z-[1] mb-10 mx-5 border-b">
        <div className="flex items-center justify-between mx-auto md:max-w-5xl">
          <h1 className="font-bold md:w-52 md:text-2xl md:py-5">
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
          <nav className="">
            <ul className="flex">
              <li>
                <Link href="/">
                  <a
                    className={(asPath === '/' ? 'text-linkColor' : '') + ' hover:text-linkColor font-bold'}
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
                        className={
                          (asPath.startsWith(`/${v}`) ? 'text-linkColor' : '') +
                          ' hover:text-linkColor font-bold'
                        }
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
