// reference
// url:https://zenn.dev/catnose99/articles/19a05103ab9ec7

import { LoadingSpinner } from '@/components/ui/loading-spinner'

export default function Loading() {
  return (
    <div className='max-w-(--content-width) md:mx-auto'>
      <div className='mt-[200px] flex items-center justify-center'>
        <LoadingSpinner />
      </div>
    </div>
  )
}
