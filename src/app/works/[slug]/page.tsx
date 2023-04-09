import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { removeHtml } from '@/utils/removeHtml'
import { setMetaData } from '@/utils/setMetadata'

import { fetchWorksDetail } from '@/libs/fetchWorksDetail'
import { fetchWorksDetailMeta } from '@/libs/fetchWorksDetailMeta'

import WorksDetailBody from '@/components/pages/works/worksDetailBody'

import { setBaseUrl } from '@/const/config'

type Props = {
  params: {
    slug: string
  }
}

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
