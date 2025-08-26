import React from 'react'

export const LoadingSpinner: React.FC = () => {
  return (
    <>
      <div className='h-10 w-10 animate-spin rounded-full border-4 border-link-active border-t-transparent' />
    </>
  )
}
