// アイコン管理

import { Image } from '@/components/utils/image'

type Props = {
  className?: string
  width?: number
  height?: number
}

const Icons = {
  doubleArrowRightWhite: ({ className, width = 18, height = 20 }: Props) => (
    <Image
      src='/icon/double-arrow-right-white.svg'
      alt='右向きの二重矢印'
      width={width}
      height={height}
      className={className}
    />
  ),
}

export { Icons }
