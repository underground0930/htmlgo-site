import Link from 'next/link'
import Image from 'next/image'

// components
import CategoryIcon from './categoryIcon'

// type
import { WorksPosts } from 'types/index'

// styles
import styles from 'styles/components/WorksList.module.scss'

// modules
import { conversionDate } from 'utils/conversionDate'

type Props = {
  works: WorksPosts
  clickHandler: (label: string, value: string) => void
}

const WorksList = ({ works = [], clickHandler }: Props) => {
  return (
    <>
      <ul className={styles.worksList}>
        {works.map((work) => (
          <li key={work.id}>
            <Link href={`/works/${work.slug}`}>
              <a
                onClick={() => {
                  clickHandler(work.title, `/works/${work.slug}`)
                }}
              >
                <dl>
                  <dt>
                    <Image
                      src={work.slider[0].img.url + '?w=800'}
                      alt=""
                      layout={'fill'}
                      objectFit={'cover'}
                    />
                  </dt>
                  <dd>
                    <time>{conversionDate(work.date)}</time>
                    <h3>{work.title}</h3>
                    <p>
                      {work.category.map((c) => (
                        <CategoryIcon key={c.id} text={c.category_label} />
                      ))}
                      {work.technology.map((t) => (
                        <CategoryIcon key={t.id} text={t.technology_label} />
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
