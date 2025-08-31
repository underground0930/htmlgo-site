import { Icons, type IconsName } from '@/components/utils/icons'

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
  icon: IconsName
  iconSize?: number
  width?: number
  height?: number
  hoverIcon?: IconsName
}) => {
  const IconComponent = Icons[icon]
  const HoverIconComponent = hoverIcon ? Icons[hoverIcon] : null

  return (
    <>
      {/* 通常時のアイコン（hover時に隠す） */}
      <IconComponent
        className={hoverIcon ? 'group-hover:hidden' : ''}
        size={iconSize}
        width={width}
        height={height}
      />
      {/* hover時のアイコン */}
      {HoverIconComponent && (
        <HoverIconComponent
          className='hidden group-hover:inline'
          size={iconSize}
          width={width}
          height={height}
        />
      )}
    </>
  )
}
