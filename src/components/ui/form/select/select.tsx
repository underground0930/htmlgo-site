'use client'

import React from 'react'
import ReactSelect, { Props as ReactSelectProps } from 'react-select'
import { tv, type VariantProps } from 'tailwind-variants'

const selectVariants = tv({
  base: 'cursor-pointer w-full',
})

type CommonVariantProps = VariantProps<typeof selectVariants>

type Props = ReactSelectProps & CommonVariantProps

export const Select = (props: Props) => {
  const className = selectVariants()
  return (
    <div suppressHydrationWarning>
      <ReactSelect {...props} className={className} />
    </div>
  )
}
