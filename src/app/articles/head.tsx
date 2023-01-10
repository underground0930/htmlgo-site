import { DefaultHead } from '@/components/defaultHead'

export default async function Head({}) {
  return (
    <>
      <DefaultHead
        title='ARTICLES | HTMLGO'
        description='色々なブログの記事のフィードをまとめたものです'
        url='https://htmlgo.site/article/'
      />
    </>
  )
}
