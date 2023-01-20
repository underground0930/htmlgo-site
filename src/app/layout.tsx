import '../styles/globals.css'

import Footer from '@/components/common/footer'
import Header from '@/components/common/header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
