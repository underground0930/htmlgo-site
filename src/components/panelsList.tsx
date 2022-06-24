import Image from 'next/image'

// components
import CategoryIcon from './categoryIcon'

// types
import { FeedObj } from 'types/index'

type Props = {
  articles: FeedObj[]
  clickHandler: (label: string, value: string) => void
}

const PanelsList = ({ articles, clickHandler }: Props) => {
  return (
    <div className="mb-20px md:mb-40px">
      {articles.map((article) => {
        return (
          <article key={article.link} className="border-b-1 border-border py-20px first-of-type:border-t-1">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                clickHandler(article.title, article.link)
              }}
            >
              <dl className="bg-base flex items-center">
                <dt className="relative w-[70px] h-[70px] border-1 border-border md:w-[100px] md:h-[100px]">
                  <Image src={article.img} alt={''} layout={'fill'} objectFit={'cover'} />
                </dt>
                <dd className="pl-20px flex-1">
                  <time className="block text-14px mb-4px">{article.published}</time>
                  <h3 className="text-15px font-bold mb-4px">{article.title}</h3>
                  <p>
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

export default PanelsList
