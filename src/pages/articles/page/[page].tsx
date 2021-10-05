// type
import { FeedObj } from 'types/index'

// components
import ArticlesBody from 'components/articlesBody'

// libs
import { event } from 'libs/gtag'
import { articlesGetStaticProps } from 'libs/articlesGetStaticProps'

// const
import { ARTICLE_PER_PAGE } from 'const/index'

// type
type Props = {
  articles: FeedObj[]
  page: number
  pages: number
}

export default function Articles({ articles = [], page, pages }: Props) {
  return <ArticlesBody articles={articles} page={page} pages={pages} />
}

export async function getStaticPaths() {
  let articles = await import('public/feed.json')
    .then((response) => {
      return response.default
    })
    .catch((err) => {
      console.log(err)
      return []
    })
  const pages = Math.ceil(articles.length / ARTICLE_PER_PAGE)
  const paths = [...new Array(pages)].map((_, i) => {
    return {
      params: {
        page: String(i + 1),
      },
    }
  })

  return { paths, fallback: false }
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
