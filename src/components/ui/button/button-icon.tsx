import { Icons, type IconsName } from '@/components/utils/icons'

/**
 * ボタン内アイコンコンポーネント
 * hover時の簡単なアイコン切り替えに対応
 */
export const ButtonIcon = ({
  iconName,
  iconSize,
  width,
  height,
  hoverIconName,
}: {
  /** 通常時のアイコン名 */
  iconName?: IconsName
  /** アイコンサイズ */
  iconSize?: number
  /** アイコン幅 */
  width?: number
  /** アイコン高さ */
  height?: number
  /** hover時に変更するアイコン名（オプション） */
  hoverIconName?: IconsName
}) => {
  if (!iconName) return null

  const IconComponent = Icons[iconName]
  const HoverIconComponent = hoverIconName ? Icons[hoverIconName] : null

  return (
    <span className='flex-shrink-0'>
      {/* 通常時のアイコン（hover時に隠す） */}
      <span className={hoverIconName ? 'group-hover:hidden' : ''}>
        <IconComponent size={iconSize} width={width} height={height} />
      </span>

      {/* hover時のアイコン */}
      {HoverIconComponent && (
        <span className='hidden group-hover:inline'>
          <HoverIconComponent size={iconSize} width={width} height={height} />
        </span>
      )}
    </span>
  )
}
