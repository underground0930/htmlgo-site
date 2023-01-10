import { DefaultHead } from '@/components/common/defaultHead'

export default async function Head({}) {
  return (
    <>
      <DefaultHead
        title='TOP | HTMLGO'
        description='WEB技術を書き連ねるサイト'
        url='https://htmlgo.site'
        isTop={true}
        isPreview={false}
      />
    </>
  )
}
