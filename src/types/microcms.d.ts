export type MicroCMSResponse = {
  contents: WorksPost[]
  totalCount: number
  offset: number
  limit: number
}

export type WorksPost = {
  id: string
  title: string
  slug: string
  date: string
  category: { id: string; category_label: string; category_slug: string }[]
  technology: { id: string; technology_label: string; technology_slug: string }[]
  slider: { img: { url: string } }[]
}

export type Post = {
  title: string
  slug: string
  url?: string
  url2?: string
  date: string
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
}
