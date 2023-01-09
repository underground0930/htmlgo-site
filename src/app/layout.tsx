import '../styles/globals.css'

// components
import Header from 'components/header'
import Footer from 'components/footer'

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
  wrapper: ``,
  container: ``,
}
