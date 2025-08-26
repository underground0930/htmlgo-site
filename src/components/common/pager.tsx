import { PagerChild } from './pager-child'

type Props = {
  pages: number
  page: number
}

export const Pager: React.FC<Props> = ({ pages, page }) => {
  return (
    <>
      <ul className='border-y border-border py-5 text-center align-top'>
        {page > 1 && <PagerChild page={page - 1}>&lt;</PagerChild>}
        {Array.from(Array(pages)).map((_, i) => {
          return (
            <PagerChild page={page} key={i + 1} loopIndex={i}>
              {i + 1}
            </PagerChild>
          )
        })}
        {page < pages && <PagerChild page={page + 1}>&gt;</PagerChild>}
      </ul>
    </>
  )
}
