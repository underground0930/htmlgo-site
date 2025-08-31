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
  // 通常時のアイコン（hover時に隠す）
  const IconComponent = Icon[icon]
  //  hover時のアイコン
  const HoverIconComponent = hoverIcon ? Icon[hoverIcon] : hoverIconColor ? IconComponent : null
  return (
    <>
      <IconComponent
        className={HoverIconComponent ? 'group-hover:hidden' : ''}
        size={iconSize}
        color={iconColor}
      />
      {HoverIconComponent && (
        <HoverIconComponent
          className='hidden group-hover:inline'
          size={iconSize}
          color={hoverIconColor}
        />
      )}
    </>
  )
}
