// type
import { FeedObj } from 'types/index'

// components
import ArticlesBody from 'components/articlesBody'

// const
import { ARTICLE_PER_PAGE } from 'const/index'

// libs
import { articlesGetStaticProps } from 'libs/getStaticProps'
import { articlesGetStaticPaths } from 'libs/getStaticPaths'

// type
type Props = {
  articles: FeedObj[]
  page: number
  pages: number
}

export default function Articles({ articles = [], page, pages }: Props) {
  return <ArticlesBody articles={articles} page={page} pages={pages} />
}

export const getStaticPaths = articlesGetStaticPaths
export const getStaticProps = articlesGetStaticProps
