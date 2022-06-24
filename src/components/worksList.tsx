import Link from 'next/link'
import Image from 'next/image'

// components
import CategoryIcon from './categoryIcon'

// type
import { WorksPosts } from 'types/index'

// modules
import { conversionDate } from 'utils/conversionDate'

type Props = {
  works: WorksPosts
  clickHandler: (label: string, value: string) => void
}

const WorksList = ({ works = [], clickHandler }: Props) => {
  return (
    <>
      <ul className="md:flex md:flex-wrap md:justify-between">
        {works.map((work) => (
          <li key={work.id} className="mb-30px border-1 border-border md:w-[32%]">
            <Link href={`/works/${work.slug}`}>
              <a
                className="block"
                onClick={() => {
                  clickHandler(work.title, `/works/${work.slug}`)
                }}
              >
                <dl>
                  <dt className="relative aspect-[16/9] mb-10px border-b-1 border-border">
                    <Image
                      src={work.slider[0].img.url + '?w=800'}
                      alt=""
                      layout={'fill'}
                      objectFit={'cover'}
                    />
                  </dt>
                  <dd className="px-15px pb-10px">
                    <time className="block mb-5px">{conversionDate(work.date)}</time>
                    <h3 className="text-16px mb-10px font-bold break-all leading-5">{work.title}</h3>
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
