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
    images: 'https://www.htmlgo.site/img/ogp_new.png',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html>
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
