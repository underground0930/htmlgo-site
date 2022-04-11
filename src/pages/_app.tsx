import '../styles/globals.scss'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import * as gtag from 'libs/gtag'
import usePageView from 'hooks/usePageView'
import store from '../store'

export async function getServerSideProps() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ x: 1 })
    }, 1000)
  })

  return { props: { data } }
}

// NOTE:  https://tyotto-good.com/blog/next-document-app

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()
  return (
    <Provider store={store}>
      {gtag.GA_TRACKING_ID && (
        <>
          <Script
            defer
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            defer
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      )}
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
