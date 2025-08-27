import '../styles/globals.css'
import { Metadata } from 'next'

import { Header } from '@/components/ui/header'
import { Footer } from '@/components/ui/footer'

const title = 'HTMLGO'

export const metadata: Metadata = {
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
    images: '/img/ogp-new.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    creator: '@resistance_gowy',
    images: '/img/ogp-new.png',
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
          <div className='min-h-[500px]'>
            <div className=''>
              <div>{children}</div>
            </div>
          </div>
          <Footer />
        </body>
      </html>
    </>
  )
}
