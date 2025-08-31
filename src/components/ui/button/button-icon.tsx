import { Icons, type IconsName } from '@/components/utils/icons'

// アイコンレンダリング関数
export const ButtonIcon = ({
  iconName,
  iconSize,
  width,
  height,
}: {
  iconName?: IconsName
  iconSize?: number
  width?: number
  height?: number
}) => {
  if (iconName) {
    const IconComponent = Icons[iconName]
    return (
      <span className='flex-shrink-0'>
        <IconComponent size={iconSize} width={width} height={height} />
      </span>
    )
  }
  return null
}
