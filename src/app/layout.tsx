import '../styles/globals.css'

import Footer from '@/components/common/footer'
import Header from '@/components/common/header'

import { baseURL } from '@/const/config'

const title = 'HTMLGO'

const description = 'WEB技術を書き連ねるサイト'

export const metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  openGraph: {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    siteName: title,
    images: ['https://www.htmlgo.site/img/ogp_new.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    creator: '@resistance_gowy',
    images: ['https://www.htmlgo.site/img/ogp_new.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang='ja'>
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
