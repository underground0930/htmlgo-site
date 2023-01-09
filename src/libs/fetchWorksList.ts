////////////////////////////////////////////////////////////////////////////////////////////////////
// works List
////////////////////////////////////////////////////////////////////////////////////////////////////

// libs
import { client } from 'libs/client'

// const
import { WORKS_PER_PAGE } from 'const/index'

export async function fetchWorksList() {
  const promises: any[] = [
    {
      endpoint: 'works',
      limit: WORKS_PER_PAGE,
      fields: 'id,title,slug,date,category,technology,slider',
    },
    { endpoint: 'works_category', limit: 20 },
    { endpoint: 'works_technology', limit: 20 },
  ].map((child) => {
    return client
      .get<ResponseType>({ endpoint: child.endpoint, queries: { limit: child.limit } })
      .catch((err) => {
        console.log('works err :' + err)
        return { contents: [] }
      })
  })

  const result = await Promise.allSettled(promises).then((results: any[]) => {
    return {
      works: results[0].value.contents,
      categories: results[1].value.contents,
      technologies: results[2].value.contents,
    }
  })

  return result
}
