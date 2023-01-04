'use client'
import React from 'react'

export const SampleBtn = () => {
  return (
    <button
      className='client_btn'
      onClick={() => {
        alert('hoge')
      }}
    >
      これはクライアント
    </button>
  )
}
