/**
 * ボタン内アイコンコンポーネント
 * hover時の簡単なアイコン切り替えに対応
 */

import { Icon, type IconName, type ColorVariants } from '@/components/utils/icon'

export const ButtonIcon = ({
  icon,
  iconSize,
  iconColor,
  hoverIcon,
  hoverIconColor,
}: {
  icon: IconName
  iconSize?: number
  iconColor?: ColorVariants
  hoverIcon?: IconName
  hoverIconColor?: ColorVariants
}) => {
  const IconComponent = Icon[icon]
  const HoverIconComponent = hoverIcon ? Icon[hoverIcon] : Icon[icon]

  return (
    <>
      {/* 通常時のアイコン（hover時に隠す） */}
      <IconComponent className={'group-hover:hidden'} size={iconSize} color={iconColor} />
      {/* hover時のアイコン */}
      <HoverIconComponent
        className='hidden group-hover:inline'
        size={iconSize}
        color={hoverIconColor}
      />
    </>
  )
}
