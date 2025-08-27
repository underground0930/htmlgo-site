'use client'

import DefaultImage from 'next/image'

import { twMerge } from 'tailwind-merge'

type Props = {
  src: string
  className?: string
  alt?: string
  priority?: boolean
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  onLoadAction?: () => void
}

export const Image: React.FC<Props> = ({
  src,
  className = '',
  alt = '',
  priority = false,
  fill = true,
  width,
  height,
  sizes = '',
  onLoadAction,
  ...props
}) => {
  return (
    <DefaultImage
      {...props}
      className={twMerge('relative!', className)}
      src={src}
      alt={alt}
      priority={priority}
      fill={width && height ? false : fill}
      width={width}
      height={height}
      sizes={sizes}
      onLoad={() => onLoadAction?.()}
    />
  )
}
