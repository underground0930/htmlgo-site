import '../styles/globals.css'

import Footer from '@/components/common/footer'
import Header from '@/components/common/header'

const title = 'HTMLGO'

export const metadata = {
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
    images: 'https://www.htmlgo.site/img/ogp_new.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    creator: '@resistance_gowy',
    images: 'https://www.htmlgo.site/img/ogp_new.png',
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
  wrapper: 'flex-1',
  container: ``,
}
