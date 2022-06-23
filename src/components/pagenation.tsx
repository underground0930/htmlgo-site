import PagenationChild from './pagenationChild'

type Props = {
  pages: number
  page: number
}
const className = {
  ul: `
    text-center
    py-20px
    align-top
    border-y
    border-border
  `,
}

const Pagenation = ({ pages, page }: Props) => {
  return (
    <>
      <ul className={className.ul}>
        {page > 1 && <PagenationChild page={page - 1}>&lt;</PagenationChild>}
        {[...Array(pages)].map((_, i) => {
          return (
            <PagenationChild page={page} key={i + 1} loopIndex={i}>
              {i + 1}
            </PagenationChild>
          )
        })}
        {page < pages && <PagenationChild page={page + 1}>&gt;</PagenationChild>}
      </ul>
    </>
  )
}

export default Pagenation
