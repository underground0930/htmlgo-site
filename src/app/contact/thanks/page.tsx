import TextBtn from '@/components/common/textBtn'
import Title from '@/components/common/title'

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
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
