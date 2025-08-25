'use client'

type Props = {
  title?: string
  text?: string
}

export const Title: React.FC<Props> = ({ title, text }) => {
  return (
    <>
      <h2 className='mb-6 text-center leading-5 md:mb-10'>
        {title && (
          <span className='mb-1 block text-xl font-bold md:text-3xl'>{title}</span>
        )}
        {text && <span className='block text-xs'>{text}</span>}
      </h2>
    </>
  )
}
