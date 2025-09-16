import React from 'react'

type Props = Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> & {
  text?: string
}

export const LoadingSpinner = ({ text, ...props }: Props) => {
  return (
    <div {...props} className='flex flex-col items-center gap-4'>
      <div className='border-link-active h-10 w-10 animate-spin rounded-full border-4 border-t-transparent' />
      {text && <div className='text-sm'>{text}</div>}
    </div>
  )
}
