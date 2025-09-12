'use client'
import { tv, type VariantProps } from 'tailwind-variants'

const imageVariants = tv({
  base: 'relative!',
  variants: {
    circle: {
      true: 'rounded-full',
    },
    cover: {
      true: 'w-full h-full object-cover',
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
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'className' | 'alt'>

export const Image = ({ circle = false, cover = false, alt = '', ...props }: Props) => {
  const className = imageVariants({ circle, cover })
  return <img {...props} className={className} alt={alt} />
}
