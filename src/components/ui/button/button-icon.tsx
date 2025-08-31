import { Icon, type IconName } from '@/components/utils/icon'

/**
 * ボタン内アイコンコンポーネント
 * hover時の簡単なアイコン切り替えに対応
 */
export const ButtonIcon = ({
  icon,
  iconSize,
  width,
  height,
  hoverIcon,
}: {
  icon: IconName
  iconSize?: number
  width?: number
  height?: number
  hoverIcon?: IconName
}) => {
  const IconComponent = Icon[icon]
  const HoverIconComponent = hoverIcon ? Icon[hoverIcon] : null

  return (
    <>
      {/* 通常時のアイコン（hover時に隠す） */}
      <IconComponent className={hoverIcon ? 'group-hover:hidden' : ''} size={iconSize} width={width} height={height} />
      {/* hover時のアイコン */}
      {HoverIconComponent && (
        <HoverIconComponent className='hidden group-hover:inline' size={iconSize} width={width} height={height} />
      )}
    </>
  )
}
