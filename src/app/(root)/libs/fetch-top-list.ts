/**
 * トップページデータ取得
 * 最新の記事と作品を取得します
 */

import { fetchLatestArticles } from '@/features/articles/api/fetch-articles'
import { fetchLatestWorks } from '@/features/works/api/fetch-works'

export async function fetchTopList() {
  const [articles, works] = await Promise.all([fetchLatestArticles(4), fetchLatestWorks(4)])

  return {
    works,
    articles,
  }
}
