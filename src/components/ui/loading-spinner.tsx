import React from 'react'

type Props = React.ComponentPropsWithoutRef<'div'>

export const LoadingSpinner: React.FC<Props> = ({ ...props }) => {
  return (
    <div
      {...props}
      className='border-link-active h-10 w-10 animate-spin rounded-full border-4 border-t-transparent'
    />
  )
}
