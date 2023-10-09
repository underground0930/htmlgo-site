import '../styles/globals.css'

import { Footer, Header } from '@/components'

const title = 'HTMLGO'

export const metadata = {
  metadataBase: new URL('https://www.htmlgo.site'),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  openGraph: {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    siteName: title,
    images: '/img/ogp_new.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    creator: '@resistance_gowy',
    images: '/img/ogp_new.png',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang='ja'>
        <head>
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css'
          />
        </head>
        <body>
          <Header />
          <div className={className.wrapper}>
            <div className={className.container}>
              <div>{children}</div>
            </div>
          </div>
          <Footer />
        </body>
      </html>
    </>
  )
}

const className = {
  wrapper: 'min-h-[500px]',
  container: ``,
}
