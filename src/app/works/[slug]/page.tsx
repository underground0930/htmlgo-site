import ErrorPage from 'next/error'

// components
import WorksDetailBody from '@/components/pages/works/worksDetailBody'

// libs
import { fetchWorksDetail } from '@/libs/fetchWorksDetail'

type Props = {
  params: {
    slug: string
  }
}

export default async function WorksDetail({ params }: Props) {
  const result = await fetchWorksDetail({ slug: params.slug })
  const { post, prev, next } = result

  return WorksDetailBody({ post, prev, next })
}
