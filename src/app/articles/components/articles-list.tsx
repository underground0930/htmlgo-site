import { CategoryIcon } from '@/components/ui/category-icon'
import { Image } from '@/components/utils/image'

import { FeedObj } from '@/types/feed'

type Props = {
  articles: FeedObj[]
}

export const ArticlesList = ({ articles }: Props) => {
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
                <dt className='border-border bg-main relative h-[140px] border-b'>
                  <Image cover src={article.img} priority={i < 8} />
                </dt>
                <dd className='p-3'>
                  <time className='mb-1 block text-xs'>{article.published}</time>
                  <h3 className='relative mb-1 text-xs leading-5 font-bold break-all'>
                    {article.title}
                  </h3>
                  <p className='block empty:hidden'>
                    <CategoryIcon text={article.category} />
                    {article.tags.map((tag) => (
                      <CategoryIcon text={tag} key={tag} />
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
