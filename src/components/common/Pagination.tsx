import { PaginationChild } from './PaginationChild'

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

export const Pagination = ({ pages, page }: Props) => {
  return (
    <>
      <ul className={className.ul}>
        {page > 1 && <PaginationChild page={page - 1}>&lt;</PaginationChild>}
        {Array.from(Array(pages)).map((_, i) => {
          return (
            <PaginationChild page={page} key={i + 1} loopIndex={i}>
              {i + 1}
            </PaginationChild>
          )
        })}
        {page < pages && <PaginationChild page={page + 1}>&gt;</PaginationChild>}
      </ul>
    </>
  )
}
