import ErrorPage from 'next/error'

// type
import { Post } from 'types/index'

// components
import WorksDetailBody from 'components/worksDetailBody'

// libs
import { worksDetailGetStaticProps } from 'libs/getStaticProps'
import { worksDetailGetStaticPaths } from 'libs/getStaticPaths'

type Props = {
  post: Post
  prev: { slug: string } | null
  next: { slug: string } | null
}

export default function WorksDetail({ post, prev, next }: Props) {
  if (!post) {
    return <ErrorPage statusCode={404} />
  }
  return WorksDetailBody({ post, prev, next })
}

export const getStaticPaths = worksDetailGetStaticPaths
export const getStaticProps = worksDetailGetStaticProps
