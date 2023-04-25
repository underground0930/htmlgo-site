// reference
// url:https://zenn.dev/catnose99/articles/19a05103ab9ec7

import { LoadingSpinner } from '@/components'

export default function Loading() {
  return (
    <main className='mx-20px max-w-[800px] md:mx-auto'>
      <div className='mt-[200px] flex items-center justify-center'>
        <LoadingSpinner />
      </div>
    </main>
  )
}
