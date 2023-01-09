// components
import ArticlesBody from 'components/articlesBody'

// libs
import { fetchArticles } from 'libs/fetchArticles'

export default async function Articles({ params: { page } }: { params: { page: string } }) {
  const result = await fetchArticles({ params: { page } })
  return <ArticlesBody articles={result.articles} page={result.page} pages={result.pages} />
}
