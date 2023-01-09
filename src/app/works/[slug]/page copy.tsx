import ErrorPage from 'next/error'

// type
import { Post } from 'types/microcms'

// components
import WorksDetailBody from 'components/worksDetailBody'

// libs
import { fetchWorksDetail } from 'libs/fetchWorksDetail'

type Props = {
  params: {
    slug: string
  }
}

export default async function WorksDetail({ params }: Props) {
  console.table(params)
  const { slug } = params
  console.log(slug)

  if (!slug) {
    return <ErrorPage statusCode={404} />
  }
  const result = await fetchWorksDetail({ slug })
  const { post, prev, next } = result
  if (!post) {
    return <ErrorPage statusCode={404} />
  }
  return WorksDetailBody({ post, prev, next })
}
