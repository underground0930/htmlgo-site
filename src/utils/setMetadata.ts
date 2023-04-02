import { Metadata } from 'next'

export function setMetaData({
  title,
  description,
  url,
  images,
  meta,
}: {
  title?: string
  description?: string
  url?: string
  images?: string | [string]
  meta?: Metadata
}): Metadata {
  if (title) {
    meta = {
      ...meta,
      openGraph: {
        ...meta?.openGraph,
        title,
      },
      twitter: {
        ...meta?.twitter,
        title,
      },
    }
  }

  if (description) {
    meta = {
      ...meta,
      description,
      openGraph: {
        ...meta?.openGraph,
        description,
      },
      twitter: {
        ...meta?.twitter,
        description,
      },
    }
  }

  if (url) {
    meta = {
      ...meta,
      alternates: {
        canonical: url,
      },
      openGraph: {
        ...meta?.openGraph,
        url,
      },
      twitter: {
        ...meta?.twitter,
      },
    }
  }

  if (images) {
    meta = {
      ...meta,
      openGraph: {
        ...meta?.openGraph,
        images,
      },
      twitter: {
        ...meta?.twitter,
        images,
      },
    }
  }

  return meta
}
