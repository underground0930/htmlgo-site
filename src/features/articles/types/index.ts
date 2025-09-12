/**
 * 記事機能の型定義
 * 外部フィード（Qiita、Zenn）の記事データ構造を定義
 */

/**
 * 外部フィード記事オブジェクト
 */
export type FeedObj = {
  /** 記事のカテゴリ */
  category: string
  /** 記事タイトル */
  title: string
  /** 公開日（YYYY-MM-DD形式） */
  published: string
  /** 記事URL */
  link: string
  /** 記事のサムネイル画像URL */
  img: string
  /** 記事のタグ一覧 */
  tags: string[]
}

/**
 * 記事一覧API レスポンス型
 */
export type ArticlesResponse = {
  /** 記事一覧 */
  articles: FeedObj[]
  /** 現在のページ番号 */
  page: number
  /** 総ページ数 */
  pages: number
  /** 総記事数 */
  totalCount: number
}
