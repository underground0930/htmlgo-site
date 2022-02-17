export type FeedObj = {
  category: string
  title: string
  published: string
  link: string
  img: string
  tags: string[]
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

export type WorksPosts = WorksPost[]

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
  slider: any[]
}

export type PanelType = 'tile' | 'list' | 'text' | ''