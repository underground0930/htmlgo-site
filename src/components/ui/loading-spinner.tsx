import React from 'react'

type Props = Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>

export const LoadingSpinner = (props: Props) => {
  return (
    <div
      {...props}
      className='border-link-active h-10 w-10 animate-spin rounded-full border-4 border-t-transparent'
    />
  )
}
