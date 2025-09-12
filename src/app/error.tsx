'use client'
import { useEffect } from 'react'

import { nextMetaData } from '@/libs/next-metadata'

const description = 'ページでエラーが発生しました'

export const metadata = {
  ...nextMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'ERROR',
    description,
    url: '/',
    images: '/img/ogp-new.png',
  }),
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
