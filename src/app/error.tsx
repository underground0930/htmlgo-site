'use client'
import { useEffect } from 'react'

import { baseURL, setBaseUrl } from '@/const/config'

export const metadata = {
  title: 'ERROR',
  alternates: {
    canonical: baseURL,
  },
  openGraph: {
    url: baseURL,
    images: setBaseUrl('/img/ogp_new.png'),
    type: 'article',
  },
}

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='flex h-40 items-center justify-center font-bold'>
      <div>
        <p>Something went wrong!</p>
        <button onClick={() => reset()}>Reset error boundary</button>
      </div>
    </div>
  )
}
