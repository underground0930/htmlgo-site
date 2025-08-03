import { CategoryIcon } from '@/components/common/CategoryIcon'
import { ImageWrapper } from '@/components/common/ImageWrapper'

import { FeedObj } from '@/types'

type Props = {
  articles: FeedObj[]
}

export const ArticlesList: React.FC<Props> = ({ articles }) => {
  return (
    <div className='mb-20px md:mb-40px md:grid md:grid-cols-4 md:gap-4'>
      {articles.map((article, i) => {
        return (
          <article
            key={article.link}
            className='mb-20px w-[100%] shadow-[0px_0px_7px_0px_rgba(0,0,0,0.3)] md:mb-0'
          >
            <a href={article.link} target='_blank' rel='noopener noreferrer'>
              <dl>
                <dt className='relative h-[140px] border-b-1 border-border bg-main'>
                  <ImageWrapper
                    cls='object-cover'
                    src={article.img}
                    priority={i < 8 ? true : false}
                    sizes='(max-width: 768px) 100vw, 33vw'
                  />
                </dt>
                <dd className='p-12px'>
                  <time className='mb-5px block text-12px'>{article.published}</time>
                  <h3 className='relative mb-5px break-all text-13px font-bold leading-5'>
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
