// libs
import { fetchWorksList } from 'libs/fetchWorksList'

// components
import Title from 'components/title'
import TextBtn from 'components/textBtn'
import WorksList from 'components/worksList'

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

export default async function Works() {
  const { works, categories, technologies } = await fetchWorksList()

  return (
    <main className={className.main}>
      <Title title='WORKS' text='最新のお仕事の実績や、自主制作' />

      <WorksList works={works} />
      <footer className={className.footer}>
        <div className={className.back}>
          <TextBtn title='HOME' link='/' />
        </div>
      </footer>
    </main>
  )
}
