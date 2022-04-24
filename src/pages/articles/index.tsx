// type
import { FeedObj } from 'types/index'

// components
import ArticlesBody from 'components/articlesBody'

// libs
import { articlesGetStaticProps } from 'libs/getStaticProps'

// type
type Props = {
  articles: FeedObj[]
  page: number
  pages: number
}

export default function Articles({ articles = [], page, pages }: Props) {
  return <ArticlesBody articles={articles} page={page} pages={pages} />
}

export const getStaticProps = articlesGetStaticProps
