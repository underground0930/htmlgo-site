import Link from 'next/link'

// styles
import styles from 'styles/components/Pagenation.module.scss'

type Props = {
  pages: number
  page: number
}

const Pagenation = ({ pages, page }: Props) => {
  const setLink = (index: number) => {
    if (index === 1) {
      return `/articles/`
    }
    return `/articles/page/${index}/`
  }

  return (
    <>
      <ul className={styles.pagination}>
        <li className={styles.prev}>
          {page > 1 && (
            <Link href={setLink(page - 1)}>
              <a>&lt;</a>
            </Link>
          )}
        </li>
        {[...Array(pages)].map((_, i) => {
          return (
            <li key={i + 1} className={i + 1 === page ? styles.active : ''}>
              <Link href={setLink(i + 1)}>
                <a>{i + 1}</a>
              </Link>
            </li>
          )
        })}

        <li className={styles.next}>
          {page < pages && (
            <Link href={setLink(page + 1)}>
              <a>&gt;</a>
            </Link>
          )}
        </li>
      </ul>
    </>
  )
}

export default Pagenation
