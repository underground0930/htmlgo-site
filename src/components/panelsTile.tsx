import Image from 'next/image'

// components
import CategoryIcon from './categoryIcon'

// types
import { FeedObj } from 'types/index'

type Props = {
  articles: FeedObj[]
  clickHandler: (label: string, value: string) => void
}

const span =
  'inline-block bg-[#000] rounded-[3px] text-btnIcon text-10px mt-4px px-6px py-3px :not(:last-of-type) mr-5px'

const PanelsTile = ({ articles, clickHandler }: Props) => {
  return (
    <div className="md:flex md:flex-wrap:md md:justify-between">
      {articles.map((article) => {
        return (
          <article
            key={article.link}
            className="shadow-[0px_0px_7px_0px_rgba(0,0,0,0.3)] w-[100%] md:w-[23.5%]"
          >
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                clickHandler(article.title, article.link)
              }}
            >
              <dl>
                <dt className="relative h-[140px] border border-border bg-main">
                  <Image src={article.img} alt={''} layout={'fill'} objectFit={'cover'} />
                </dt>
                <dd className="p-12px">
                  <time className="block text-12px mb-5px">{article.published}</time>
                  <h3 className="relative text-13px font-bold leading-5">{article.title}</h3>
                  <p className="block empty:hidden">
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

export default PanelsTile
