import { MicroCMSListContent } from 'microcms-js-sdk'

// MicroCMS関連のデータ型
export type WorksCategory = {
  id: string
  category_label: string
  category_slug: string
} & MicroCMSListContent

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
  slider?: {
    fieldId: string
    img: {
      url: string
      height: number
      width: number
    }
  }[]
} & MicroCMSListContent

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

export type WorksSlider = NonNullable<WorkDetail['slider']>[number]
