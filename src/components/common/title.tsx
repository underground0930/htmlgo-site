'use client'

type Props = {
  title?: string
  text?: string
}

const Title = ({ title, text }: Props) => {
  return (
    <>
      <h2 className='mb-24px text-center leading-[1.55] md:mb-40px'>
        {title && (
          <span className='mb-1 block text-20px font-bold md:text-30px'>{title}</span>
        )}
        {text && <span className='block text-13px'>{text}</span>}
      </h2>
    </>
  )
}

export default Title
