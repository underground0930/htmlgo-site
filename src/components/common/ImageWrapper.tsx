'use client'

import Image from 'next/image'

type Props = {
  src: string
  cls?: string
  alt?: string
  priority?: boolean
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  onLoadingComplete?: () => void
}

export function ImageWrapper({
  src,
  cls = '',
  alt = '',
  priority = false,
  fill = true,
  width,
  height,
  sizes = '',
  onLoadingComplete,
}: Props) {
  return (
    <Image
      className={'!relative ' + cls}
      src={src}
      alt={alt}
      priority={priority}
      fill={width && height ? false : fill}
      width={width}
      height={height}
      sizes={sizes}
      onLoadingComplete={() => onLoadingComplete?.()}
    />
  )
}
