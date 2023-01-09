// libs

// components

import Title from 'components/title'
import IconBtn from 'components/IconBtn'

const className = {
  main: 'mx-20px',
  body: `max-w-[600px] mx-auto mb-40px`,
  thanks: `text-16px text-center md:text-20px`,
  back: `border-border border-t-[1px] text-center pt-40px pb-40px mt-40px`,
}

export default function Thanks() {
  return (
    <>
      <main className={className.main}>
        <Title title='THANKS' text='お問合せありがとうございました' />
        <div className={className.body}>
          <div className={className.thanks}>
            お問い合わせありがとうございました。
            <br />
            内容を確認後、折り返しご連絡いたしますので、
            <br />
            今しばらくおまちください。
          </div>
        </div>
        <div className={className.back}>
          <IconBtn icon='faHome' title='back to top' link='/' color='#ffffff' />
        </div>
      </main>
    </>
  )
}
