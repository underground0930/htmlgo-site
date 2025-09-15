import { Title } from '@/components/ui/title'
import { Button } from '@/components/ui/button'

export const PageContent = () => {
  return (
    <div className='mx-5'>
      <Title title='THANKS' text='お問合せありがとうございました' />
      <div className='mx-auto mb-10 max-w-[600px]'>
        <div className='text-center text-base md:text-xl'>
          お問い合わせありがとうございました。
          <br />
          内容を確認後、折り返しご連絡いたしますので、
          <br />
          今しばらくおまちください。
        </div>
      </div>
      <div className='border-border mt-10 border-t pt-10 pb-10 text-center'>
        <Button component='link' href='/' icon='home'>
          HOME
        </Button>
      </div>
    </div>
  )
}
