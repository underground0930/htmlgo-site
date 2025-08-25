import { CategoryIcon } from '@/components/common/CategoryIcon'
import { ImageWrapper } from '@/components/common/ImageWrapper'

import { FeedObj } from '@/types'

type Props = {
  articles: FeedObj[]
}

export const ArticlesList: React.FC<Props> = ({ articles }) => {
  return (
    <div className='mb-5 md:mb-10 md:grid md:grid-cols-4 md:gap-4'>
      {articles.map((article, i) => {
        return (
          <article
            key={article.link}
            className='mb-5 w-full shadow-[0px_0px_7px_0px_rgba(0,0,0,0.3)] md:mb-0'
          >
            <a href={article.link} target='_blank' rel='noopener noreferrer'>
              <dl>
                <dt className='relative h-[140px] border-b border-border bg-main'>
                  <ImageWrapper
                    cls='object-cover'
                    src={article.img}
                    priority={i < 8 ? true : false}
                    sizes='(max-width: 768px) 100vw, 33vw'
                  />
                </dt>
                <dd className='p-3'>
                  <time className='mb-1 block text-xs'>{article.published}</time>
                  <h3 className='relative mb-1 break-all text-xs font-bold leading-5'>
                    {article.title}
                  </h3>
                  <p className='block empty:hidden'>
                    <CategoryIcon text={article.category} />
                    {article.tags.map((tag, index) => (
                      <CategoryIcon text={tag} key={index} />
                    ))}
                  </p>
                </dd>
              </dl>
            </a>
          </article>
        )
      })}
    </div>
  )
}
