// type
import { FeedObj } from 'types/index'

// components
import ArticlesBody from 'components/articlesBody'

// libs
import { articlesGetStaticProps } from 'libs/articlesGetStaticProps'

// type
type Props = {
  articles: FeedObj[]
  page: number
  pages: number
}

export default function Articles({ articles = [], page, pages }: Props) {
  return <ArticlesBody articles={articles} page={page} pages={pages} />
}

export async function getStaticProps({
  params,
}: {
  params: {
    page: string
  }
}) {
  return articlesGetStaticProps(params)
}
