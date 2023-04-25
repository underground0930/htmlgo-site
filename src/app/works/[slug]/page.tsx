import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { WorksDetailBody } from '@/components'
import { setBaseUrl } from '@/const'
import { fetchWorksDetail, fetchWorksDetailMeta } from '@/libs'
import { removeHtml, setMetaData } from '@/utils'

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 60

export async function generateMetadata({ params }: Props) {
  const result = await fetchWorksDetailMeta({ slug: params.slug })
  let meta = {}
  if (result) {
    const { title, body: description, slider } = result
    const ogp =
      slider?.length && slider[0]?.img?.url
        ? slider[0].img.url
        : setBaseUrl('/img/ogp_new.png')
    const maxLength = 120
    const parsedDescription = removeHtml(description ?? '')
    const slicedDescription =
      parsedDescription.length > maxLength
        ? parsedDescription.slice(0, maxLength) + '...'
        : parsedDescription

    meta = {
      ...setMetaData({
        meta: {
          openGraph: {
            type: 'article',
          },
        },
        title: `${title} | WORKS`,
        description: slicedDescription,
        url: setBaseUrl(`/works/${params.slug}`),
        images: ogp,
      }),
    }
  }

  return {
    ...meta,
  }
}

export default async function WorksDetail({ params }: Props) {
  const result = await fetchWorksDetail({ slug: params.slug })
  const { post, prev, next } = result

  if (!post) {
    notFound()
  }

  return (
    <Suspense
      fallback={
        <div className='relative flex h-10 w-full items-center justify-center'>
          <div>Loading...</div>
        </div>
      }
    >
      <WorksDetailBody post={post} prev={prev} next={next} />
    </Suspense>
  )
}
