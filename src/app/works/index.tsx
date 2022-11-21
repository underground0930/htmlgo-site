import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

// type
import { WorksPosts } from 'types/index'

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

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  filter: `mb-20px md:flex`,
  filterChild: `
    mb-10px
    mr-0px
    md:mr-20px
    md:mb-0px
    relative
    block
    before:absolute
    before:before:content-[""]
    before:my-auto
    before:top-[0px]
    before:bottom-[0px]
    before:right-[10px]
    before:w-[5px]
    before:h-[5px]
    before:border-r-[2px]
    before:border-b-[2px]
    before:block
    before:rotate:45deg
    before:x-[-1px]
    before:y-[-1px]
    before:rotate-45
    before:z-[1]
  `,
  filterSelect: `
    w-[100%]
    md:w-[auto]
    relative
    outline-none
    bg-transparent
    text-overflow-['']
    appearance-none
    rounded-none
    h-[30px]
    border-1
    border-[#000]
    pr-[35px]
    pl-[10px]
  `,
  footer: `border-border border-t-[1px] pt-40px pb-40px mt-40px`,
  back: `text-center`,
}

export default function Works({ works, categories = [], technologies = [] }: Props) {
  const router = useRouter()
  const [filters, setFilters] = useState({
    category: '',
    technology: '',
  })

  const categoryHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.currentTarget
    const { technology } = router.query
    router.push({
      query: {
        ...(value ? { category: value } : {}),
        ...(technology ? { technology } : {}),
      },
    })
  }

  const technologyHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.currentTarget
    const { category } = router.query
    router.push({
      query: { ...(category ? { category } : {}), ...(value ? { technology: value } : {}) },
    })
  }

  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: 'works', label, value })
  }

  const filterPost = (): WorksPosts => {
    const { category, technology } = filters
    return works.filter((work) => {
      const categoryMatch = category === '' || work.category.map((c) => c.category_slug).includes(category)
      const technologyMatch =
        technology === '' || work.technology.map((c) => c.technology_slug).includes(technology)

      return categoryMatch && technologyMatch
    })
  }

  const changeToString = (param: string | string[] | undefined): string => {
    if (Array.isArray(param)) {
      return param[0]
    } else if (param === undefined) {
      return ''
    }
    return param
  }

  useEffect(() => {
    // パラメータを取ってくる
    if (router.isReady) {
      const { category, technology } = router.query
      setFilters({
        category: changeToString(category),
        technology: changeToString(technology),
      })
    }
  }, [router])

  return (
    <Layout>
      <HeadWrap
        title={'WORKS | HTMLGO'}
        description={'実績を紹介しています'}
        url={`https://htmlgo.site/works/`}
      />
      <main className={className.main}>
        <Title title="WORKS" text="最新のお仕事の実績や、自主制作" />
        <div className={className.filter}>
          <div className={className.filterChild}>
            <select className={className.filterSelect} onChange={categoryHandler} value={filters.category}>
              <option value="" key={''}>
                Category
              </option>
              {categories.map((c) => (
                <option value={c.category_slug} key={c.category_slug}>
                  {c.category_label}
                </option>
              ))}
            </select>
          </div>
          <div className={className.filterChild}>
            <select
              className={className.filterSelect}
              onChange={technologyHandler}
              value={filters.technology}
            >
              <option value="" key={''}>
                Technology
              </option>
              {technologies.map((c) => (
                <option value={c.technology_slug} key={c.technology_slug}>
                  {c.technology_label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <WorksList works={filterPost()} clickHandler={clickHandler} />
        <footer className={className.footer}>
          <div className={className.back}>
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