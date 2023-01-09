// components
import ArticlesBody from 'components/articlesBody'

// libs
import { articlesGetStaticProps } from 'libs/getStaticProps'

export default async function Articles() {
  const result = await articlesGetStaticProps({ params: { page: '1' } })
  return <ArticlesBody articles={result.articles} page={result.page} pages={result.pages} />
}
