'use client'

import React from 'react'
import ReactSelect, { GroupBase, Props as ReactSelectProps } from 'react-select'
import { tv, type VariantProps } from 'tailwind-variants'

const selectVariants = tv({
  base: 'cursor-pointer w-full',
})

type CommonVariantProps = VariantProps<typeof selectVariants>

type Props<T, IsMulti extends boolean = false> = ReactSelectProps<T, IsMulti, GroupBase<T>> &
  CommonVariantProps

export const Select = <T, IsMulti extends boolean = false>(props: Props<T, IsMulti>) => {
  const className = selectVariants()
  return <ReactSelect<T, IsMulti, GroupBase<T>> {...props} className={className} />
}
