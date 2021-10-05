import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from 'libs/gtag'

export default function usePageView() {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
  }, [router.events])
}
