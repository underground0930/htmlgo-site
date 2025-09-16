/**
 * 作品機能の型定義
 * MicroCMSから取得する作品データの構造を定義
 */

import { MicroCMSListContent } from 'microcms-js-sdk'

/**
 * 作品カテゴリ・技術情報
 */
export type WorksCategory = {
  id: string
  category_label: string
  category_slug: string
} & MicroCMSListContent

/**
 * 作品詳細データ
 */
export type WorkDetail = {
  title: string
  slug: string
  url?: string
  url2?: string
  date: string
  publishedAt2?: string
  participationAt?: string
  body?: string
  production_period: string
  credit: { label: string; value: string; link?: string }[]
  category: {
    category_label: string
    category_slug: string
  }[]
  technology: {
    technology_label: string
    technology_slug: string
  }[]
  slider: {
    fieldId: string
    img: {
      url: string
      height: number
      width: number
    }
  }[]
} & MicroCMSListContent

/**
 * 作品一覧用データ（詳細データの一部を抽出）
 */
export type WorkIndex = Pick<
  WorkDetail,
  | 'id'
  | 'title'
  | 'slug'
  | 'date'
  | 'participationAt'
  | 'publishedAt2'
  | 'category'
  | 'technology'
  | 'slider'
>
/**
 * 作品スライダー画像データ
 */
export type WorksSlider = NonNullable<WorkDetail['slider']>[number]

/**
 * 作品一覧API レスポンス型
 */
export type WorksResponse = {
  /** 作品一覧 */
  works: WorkIndex[]
  /** 総作品数 */
  totalCount: number
  /** 現在のページ番号 */
  page: number
  /** 総ページ数 */
  pages: number
  /** カテゴリ一覧 */
  categories: WorksCategory[]
  /** 技術一覧 */
  technologies: WorksCategory[]
}
