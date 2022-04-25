// react
import React, { useEffect, useState } from 'react'
import { createClient } from 'microcms-js-sdk'

// type
import { Post } from 'types/index'

// components
import WorksDetailBody from 'components/worksDetailBody'
import Loader from 'components/loader'

// プレビューに必要なパラメータ
const targetParams = ['contentId', 'draftKey', 'microcmsApiKey']

type FetchData = {
  post: Post | null
  prev: { slug: string } | null
  next: { slug: string } | null
}

export default function WorksPreview() {
  const [isLoading, setIsLoading] = useState(true)
  const [postData, setPostData] = useState({} as FetchData)

  useEffect(() => {
    ;(async () => {
      const result = await previewWorksDetailProps()
      if (result?.post) {
        setPostData(result)
        setIsLoading(false)
        return
      }
      location.href = '/works/'
    })()
  }, [])

  if (isLoading) return <Loader />
  return postData ? WorksDetailBody({ ...postData, isPreview: true }) : <></>
}

const previewWorksDetailProps = async (): Promise<FetchData | null> => {
  const url = new URL(location.href)
  const searchParams = url.searchParams

  const isExistParams = targetParams.every((p) => {
    return searchParams.has(p)
  })

  if (!isExistParams) {
    console.log('Invalid param')
    return null
  }

  const client = createClient({
    serviceDomain: 'htmlgo',
    apiKey: searchParams.get('microcmsApiKey') ?? '',
  })
  const contentId = searchParams.get('contentId') ?? ''
  const draftKey = searchParams.get('draftKey') ?? ''

  const post = await client
    .get({
      endpoint: 'works',
      contentId,
      queries: {
        draftKey,
        fields: 'title,slug,url,url2,date,body,production_period,credit,category,technology,slider',
      },
    })
    .then((v) => {
      return v
    })
    .catch((err) => {
      return null
    })

  if (post === null) {
    console.log("Couldn't get the data")
    return null
  }

  const pager: any[] = await Promise.allSettled([
    client
      .get({
        endpoint: 'works',
        queries: {
          draftKey,
          limit: 1,
          orders: '-date',
          filters: `date[less_than]${post.date}`,
          fields: 'slug',
        },
      })
      .then((v) => {
        return v?.contents?.length ? v.contents[0] : null
      })
      .catch((err) => {
        return null
      }),
    client
      .get({
        endpoint: 'works',
        queries: {
          draftKey,
          limit: 1,
          orders: 'date',
          filters: `date[greater_than]${post.date}`,
          fields: 'slug',
        },
      })
      .then((v) => {
        return v?.contents?.length ? v.contents[0] : null
      })
      .catch((err) => {
        return null
      }),
  ]).then((results) =>
    results.map((r) => {
      if (r.status === 'fulfilled') {
        return r.value
      }
      return null
    })
  )

  return {
    post,
    prev: pager[0] ?? null,
    next: pager[1] ?? null,
  }
}
