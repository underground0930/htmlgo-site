import Link from 'next/link'

type Props = {
  title?: string
  link: string
  blank?: boolean
  color: string
  icon: 'faHome' | 'faAlignJustify'
  onClick?: () => void
}

const className = {
  btn: 'min-w-[120px] inline-block bg-btn text-btnIcon text-14px text-center text-decoration-none px-15px py-10px :visited:text-btnIcon',
  icon: 'w-[20px] h-[20px] inline-block',
}

const IconBtn = ({ title, link, blank = false, color, icon, onClick }: Props) => {
  return (
    <>
      {blank && (
        <a
          className={className.btn}
          href={link}
          target='_blank'
          rel='noreferrer'
          onClick={onClick}
        ></a>
      )}
      {!blank && <Link href={link} className={className.btn} onClick={onClick}></Link>}
    </>
  )
}

export default IconBtn
