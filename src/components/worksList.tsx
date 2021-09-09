import Link from 'next/link'
import Image from 'next/image'

// type
import { WorksPosts } from 'types/index'

// styles
import styles from 'styles/components/WorksList.module.scss'

// modules
import { conversionDate } from 'utils/conversionDate'

type Props = {
  works: WorksPosts
}

const WorksList = ({ works = [] }: Props) => {
  return (
    <>
      <ul className={styles.worksList}>
        {works.map((work) => (
          <li key={work.id}>
            <Link href={`/works/${work.slug}`}>
              <a>
                <dl>
                  <dt>
                    <img src={work.slider[0].img.url + '?w=800'} width="320" height="180" alt="" />
                  </dt>
                  <dd>
                    <time>{conversionDate(work.date)}</time>
                    <h3>{work.title}</h3>
                    <p>
                      {work.category.map((c) => (
                        <span key={c.id}>{c.category_label}</span>
                      ))}
                      {work.technology.map((t) => (
                        <span key={t.id}>{t.technology_label}</span>
                      ))}
                    </p>
                  </dd>
                </dl>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default WorksList
