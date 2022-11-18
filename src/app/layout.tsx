'use client'

import '../styles/globals.css'
import { Provider } from 'react-redux'
import Script from 'next/script'
import * as gtag from 'libs/gtag'
import usePageView from 'hooks/usePageView'
import store from '../store'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  usePageView()
  return (
    <Provider store={store}>
      <>
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
        <html>
          <body>{children}</body>
        </html>
      </>
    </Provider>
  )
}
