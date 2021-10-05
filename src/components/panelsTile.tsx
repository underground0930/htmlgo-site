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
    <div className={styles.panelsTile}>
      {articles.map((article) => {
        return (
          <article key={article.link}>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                clickHandler(article.title, article.link)
              }}
            >
              <dl>
                <dt
                  style={{
                    backgroundImage: `url(${article.img})`,
                  }}
                ></dt>
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
