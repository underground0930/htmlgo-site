import { useState } from 'react'

// type
import { WorksPosts } from 'types/index'

// style
import styles from 'styles/page/Works.module.scss'

// libs
import { event } from 'libs/gtag'
import { worksGetStaticProps } from 'libs/getStaticProps'

// components
import HeadWrap from 'components/headWrap'
import Layout from 'components/layout'
import Title from 'components/title'
import IconBtn from 'components/IconBtn'
import WorksList from 'components/worksList'

type Props = {
  works: WorksPosts
  categories: { category_label: string; category_slug: string }[]
  technologies: { technology_label: string; technology_slug: string }[]
}

export default function Works({ works, categories = [], technologies = [] }: Props) {
  const [category, setCategory] = useState('')
  const [technology, setTechnology] = useState('')

  const categoryHandler = (e: any): void => {
    setCategory(e.currentTarget.value)
  }

  const technologyHandler = (e: any): void => {
    setTechnology(e.currentTarget.value)
  }

  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: 'works', label, value })
  }

  const filterPost = (): WorksPosts => {
    return works.filter((work) => {
      const categoryMatch = category === '' || work.category.map((c) => c.category_slug).includes(category)
      const technologyMatch =
        technology === '' || work.technology.map((c) => c.technology_slug).includes(technology)

      return categoryMatch && technologyMatch
    })
  }
  return (
    <Layout>
      <HeadWrap
        title={'WORKS | HTMLGO'}
        description={'実績を紹介しています'}
        url={`https://htmlgo.site/works/`}
      />
      <main className={styles.main}>
        <Title>
          <span>WORKS</span>
          <span>お仕事の実績や、自主制作のまとめページです</span>
        </Title>
        <div className={styles.filter}>
          <div className={styles.filterChild}>
            <select className={styles.filterSelect} onChange={categoryHandler} value={category}>
              <option value="">Category</option>
              {categories.map((c) => (
                <option value={c.category_slug} key={c.category_slug}>
                  {c.category_label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filterChild}>
            <select className={styles.filterSelect} onChange={technologyHandler} value={technology}>
              <option value="">Technology</option>
              {technologies.map((c) => (
                <option value={c.technology_slug} key={c.technology_slug}>
                  {c.technology_label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <WorksList works={filterPost()} clickHandler={clickHandler} />
        <footer className={styles.footer}>
          <div className={styles.back}>
            <IconBtn
              icon="faHome"
              link="/"
              color="#ffffff"
              onClick={() => {
                clickHandler('top', '/')
              }}
            />
          </div>
        </footer>
      </main>
    </Layout>
  )
}

export const getStaticProps = worksGetStaticProps
