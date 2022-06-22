import Image from 'next/image'

// components
import CategoryIcon from './categoryIcon'

// types
import { FeedObj } from 'types/index'

// styles
import styles from 'styles/components/PanelsList.module.scss'

type Props = {
  articles: FeedObj[]
  clickHandler: (label: string, value: string) => void
}

const PanelsList = ({ articles, clickHandler }: Props) => {
  return (
    <div className="">
      {articles.map((article) => {
        return (
          <article key={article.link} className="border-border px-20px first-of-type:border-t-1">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                clickHandler(article.title, article.link)
              }}
            >
              <dl className="bg-base flex items-center">
                <dt className="relative w-[70px] h-[70px] border border-border md:w-[100px] md:h-[100px]">
                  <Image src={article.img} alt={''} layout={'fill'} objectFit={'cover'} />
                </dt>
                <dd className="pl-20px flex-1">
                  <time className="block text-14px mb-4px">{article.published}</time>
                  <h3 className="text-15px font-bold">{article.title}</h3>
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
