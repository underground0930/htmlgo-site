import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function usePageView() {
  // MEMO: まだサポートされていない
  const router = useRouter()
  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  // }, [router.events])
}
