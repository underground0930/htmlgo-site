import Head from 'next/head'

type Props = {
  title: string
  description: string
  image?: string
  url: string
  isTop?: boolean
}

const HeadWrap = ({ title, description, image, url, isTop = false }: Props): JSX.Element => {
  const img = image ?? 'https://htmlgo.site/img/ogp_new.png'
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:type" content={isTop ? 'website' : 'article'} key="og:type" />
      <meta property="og:image" content={img} key="og:image" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta property="twitter:image" content={img} key="twitter:image" />
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <link rel="canonical" href={url} key="canonical" />
    </Head>
  )
}

export default HeadWrap
