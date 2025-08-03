import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { fetchWorksPaths } from '@/libs/fetch/fetchWorksPaths'
import { fetchWorksDetail } from '@/libs/fetch/fetchWorksDetail'

import { WorksDetailBody } from '@/components/pages/works/WorksDetailBody'

import { removeHtml, setMetaData } from '@/utils'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props) {
  const result = await fetchWorksDetail({ slug: params.slug })
  let meta = {}
  if (result.post) {
    const { title, body: description, slider } = result.post
    const ogp =
      slider?.length && slider[0]?.img?.url ? slider[0].img.url : '/img/ogp_new.png'
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
        url: `/works/${params.slug}`,
        images: ogp,
      }),
    }
  }

  return {
    ...meta,
  }
}

export async function generateStaticParams() {
  const paths = await fetchWorksPaths()

  return paths.map((path) => path.slug)
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
