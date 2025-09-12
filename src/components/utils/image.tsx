'use client'
import DefaultNextImage, { type ImageProps } from 'next/image'
import { tv, type VariantProps } from 'tailwind-variants'

const imageVariants = tv({
  base: 'relative!',
  variants: {
    circle: {
      true: 'rounded-full',
    },
    cover: {
      true: 'object-cover',
    },
  },
  defaultVariants: {
    circle: false,
    cover: false,
  },
})

type CommonVariantProps = VariantProps<typeof imageVariants>

type Props = {
  alt?: string
} & CommonVariantProps &
  Omit<ImageProps, 'className' | 'alt'>

export const Image = ({
  circle = false,
  cover = false,
  fill = true,
  alt = '',
  width,
  height,
  ...props
}: Props) => {
  const className = imageVariants({ circle, cover })
  return (
    <DefaultNextImage
      {...props}
      className={className}
      alt={alt}
      fill={width && height ? false : fill}
      width={width}
      height={height}
    />
  )
}
