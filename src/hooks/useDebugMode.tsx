import React from 'react'

const useDebugMode = ({ isDebug = false }: { isDebug: boolean }) => {
  const DebugModal = () => {
    if (isDebug === true) {
      return (
        <div className='fixed left-[0] top-[0] z-[20] h-[100px] w-[100px] text-[#f00]'>
          debugging now
        </div>
      )
    }
    return <></>
  }
  return { DebugModal, isDebug }
}

export default useDebugMode
