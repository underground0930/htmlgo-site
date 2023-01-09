// components
import ArticlesBody from 'components/articlesBody'

// libs
import { fetchArticles } from 'libs/fetchArticles'

export default async function Articles() {
  const result = await fetchArticles({ params: { page: '1' } })
  return <ArticlesBody articles={result.articles} page={result.page} pages={result.pages} />
}
