import Image from 'next/image'

// types
import { FeedObj } from 'types/index'

// styles
import styles from 'styles/components/PanelsTile.module.scss'

type Props = {
  articles: FeedObj[]
  clickHandler: (label: string, value: string) => void
}

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
                <dt className="relative h-[140px]">
                  <Image src={article.img} alt={''} layout={'fill'} objectFit={'cover'} />
                </dt>
                <dd>
                  <time>{article.published}</time>
                  <h3>{article.title}</h3>
                  <p>
                    <span>{article.category}</span>
                    {article.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
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
