import { PagerChild } from './PagerChild'

type Props = {
  pages: number
  page: number
}
const className = {
  ul: `
    text-center
    py-20px
    align-top
    border-y-1
    border-border
  `,
}

export const Pager: React.FC<Props> = ({ pages, page }) => {
  return (
    <>
      <ul className={className.ul}>
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
