import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { fetchWorksPaths } from './libs/fetch-works-paths'
import { fetchWorksDetail } from './libs/fetch-works-detail'

import { WorksDetailBody } from './components/works-detail-body'

import { removeHtml } from '@/utils/remove-html'
import { setMetaData } from '@/utils/set-metadata'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
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
  return paths.map((path) => ({ slug: path.slug }))
}

export default async function WorksDetail(props: Props) {
  const params = await props.params
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
