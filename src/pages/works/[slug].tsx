import Link from 'next/link'
import dynamic from 'next/dynamic'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// type
import { Post } from 'types/index'

// module
import { conversionDate } from 'utils/conversionDate'
import { removeHtml } from 'utils/removeHtml'
import { cutText } from 'utils/cutText'

// style
import styles from 'styles/page/WorksDetail.module.scss'

// libs
import { event } from 'libs/gtag'
import { client } from 'libs/client'

// components
import HeadWrap from 'components/headWrap'
import Layout from 'components/layout'
import Title from 'components/title'
import IconBtn from 'components/IconBtn'

const WorksSlider = dynamic(() => import('components/worksSlider'), {
  ssr: false,
})

type StaticProps = {
  params: {
    slug: string
  }
}

type Props = {
  post: Post | null
  prev: { slug: string } | null
  next: { slug: string } | null
}

export default function WorksDetail({ post, prev, next }: Props) {
  const shareTwitterUrl = (slug: string) => {
    return `https://twitter.com/share?url=https://htmlgo.site/works/${slug}/`
  }
  const shareFacebookUrl = (slug: string) => {
    return `https://www.facebook.com/share.php?u=https://htmlgo.site/works/${slug}`
  }
  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: 'works-detail', label, value })
  }

  if (post === null) {
    return <div>sorry! page error!</div>
  }

  return (
    <Layout>
      <HeadWrap
        title={`${post.title} | WORKS | HTMLGO`}
        description={post.body ? cutText(removeHtml(post.body), 120) : post.title + 'の実績紹介です。'}
        image={`https://htmlgo.site/img/ogp_new.png`}
        url={`https://htmlgo.site/works/${post.slug}/`}
      />
      <main className={styles.main}>
        <Title>
          <span>{post.title}</span>
          <span>WORKS NAME</span>
        </Title>
        <article className={styles.article}>
          <div className={styles.kv}>
            <div className={styles.kvInner}>
              <WorksSlider slider={post.slider}></WorksSlider>
            </div>
          </div>
          {post.body && (
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{
                __html: `${post.body}`,
              }}
            ></div>
          )}
          <div className={styles.info}>
            <div className={styles.infoBody}>
              <ul className={styles.infoList}>
                <li>
                  <dl>
                    <dt>公開日</dt>
                    <dd>
                      <time dateTime={conversionDate(post.date)}>{conversionDate(post.date)}</time>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>カテゴリー</dt>
                    <dd>
                      {post.category.map((v) => (
                        <span key={v.category_label}>{v.category_label}</span>
                      ))}
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>テクノロジー</dt>
                    <dd>
                      {post.technology.map((v) => (
                        <span key={v.technology_label}>{v.technology_label}</span>
                      ))}
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>制作期間</dt>
                    <dd>{post.production_period}</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>URL</dt>
                    <dd>
                      {post.url && (
                        <a href={post.url} target="_blank" rel="noreferrer">
                          <span>{post.url}</span>
                        </a>
                      )}
                      {post.url2 && (
                        <a href={post.url2} target="_blank" rel="noreferrer">
                          <span>{post.url2}</span>
                        </a>
                      )}
                      <a href=""></a>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>クレジット</dt>
                    <dd>
                      <ul>
                        {post.credit.map((v) => (
                          <li key={v.value}>
                            <p>{v.label}</p>
                            <p>
                              {v.link ? (
                                <a href={v.link} target="_blank" rel="noreferrer">
                                  {v.value}
                                </a>
                              ) : (
                                <a>{v.value}</a>
                              )}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
          <ul className={styles.sns}>
            <li className={styles.snsChild}>
              <a
                className={styles.facebook}
                href={shareFacebookUrl(post.slug)}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  clickHandler('facebook', `/works/${post.slug}`)
                }}
              >
                <FontAwesomeIcon icon={faFacebookF} color="#ffffff" />
              </a>
            </li>
            <li className={styles.snsChild}>
              <a
                className={styles.twitter}
                href={shareTwitterUrl(post.slug)}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  clickHandler('twitter', `/works/${post.slug}`)
                }}
              >
                <FontAwesomeIcon icon={faTwitter} color="#ffffff" />
              </a>
            </li>
          </ul>
          <div className={styles.back}>
            <IconBtn
              icon="faAlignJustify"
              link="/works/"
              color="#ffffff"
              onClick={() => {
                clickHandler('works', `/works/`)
              }}
            />
            {next && (
              <Link href={`/works/${next.slug}/`}>
                <a
                  className={styles.next}
                  onClick={() => {
                    clickHandler('next', `/works/${next.slug}`)
                  }}
                >
                  <FontAwesomeIcon icon={faChevronLeft} color="#ffffff" />
                </a>
              </Link>
            )}
            {prev && (
              <Link href={`/works/${prev.slug}`}>
                <a
                  className={styles.prev}
                  onClick={() => {
                    clickHandler('prev', `/works/${prev.slug}`)
                  }}
                >
                  <FontAwesomeIcon icon={faChevronRight} color="#ffffff" />
                </a>
              </Link>
            )}
          </div>
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data: any = await client.get({ endpoint: 'works' })

  const paths = data.contents.map((content: { slug: string }) => {
    return { params: { slug: content.slug } }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: StaticProps) {
  const slug = params.slug
  let post: any, prev: any, next: any

  post = await client
    .get({
      endpoint: 'works',
      queries: {
        filters: `slug[equals]${slug}`,
        fields: 'title,slug,url,url2,date,body,production_period,credit,category,technology,slider',
      },
    })
    .catch((err) => {
      return []
    })

  post = post.contents.length ? post.contents[0] : null
  if (post !== null) {
    // prev
    prev = await client
      .get({
        endpoint: 'works',
        queries: {
          limit: 1,
          orders: '-date',
          filters: `date[less_than]${post.date}`,
          fields: 'slug',
        },
      })
      .catch((err) => {
        return { contents: [] }
      })
    prev = prev.contents.length > 0 ? prev.contents[0] : null

    // next
    next = await client
      .get({
        endpoint: 'works',
        queries: {
          limit: 1,
          orders: 'date',
          filters: `date[greater_than]${post.date}`,
          fields: 'slug',
        },
      })
      .catch((err) => {
        console.log('works detail err :' + err)
        return { contents: [] }
      })
    next = next.contents.length > 0 ? next.contents[0] : null
  }
  return {
    props: {
      post,
      prev,
      next,
    },
  }
}