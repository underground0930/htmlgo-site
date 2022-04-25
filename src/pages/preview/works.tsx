// react
import React, { useEffect, useState } from 'react'
import { createClient } from 'microcms-js-sdk'

// type
import { Post } from 'types/index'

// components
import WorksDetailBody from 'components/worksDetailBody'
import Loader from 'components/loader'

type FetchData = {
  post: Post | null
  prev: { slug: string } | null
  next: { slug: string } | null
}

export default function WorksPreview() {
  const [loading, isLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [postData, setPostData] = useState({} as FetchData)

  useEffect(() => {
    ;(async () => {
      const result = await previewWorksDetailGetStaticProps()
      if (result?.post) {
        setPostData(result)
      } else {
        setIsError(true)
      }
      isLoading(false)
    })()
  }, [])

  if (loading) return <Loader />

  if (isError)
    return (
      <div
        style={{
          fontSize: 40,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>Error</span>
      </div>
    )

  return postData ? WorksDetailBody({ ...postData, isPreview: true }) : <></>
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// works detail preview
////////////////////////////////////////////////////////////////////////////////////////////////////

const previewWorksDetailGetStaticProps = async (): Promise<FetchData | null> => {
  const redirectUrl = '/works/'
  const url = new URL(location.href)
  const searchParams = url.searchParams
  const targetParams = ['contentId', 'draftKey', 'microcmsApiKey']
  const isExistParams = targetParams.every((p) => {
    return searchParams.has(p)
  })

  if (!isExistParams) {
    console.log('Invalid param')
    location.href = redirectUrl
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
    location.href = redirectUrl
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
