import Link from 'next/link'

type Props = {
  title: string
  link: string
  blank?: boolean
  onClick?: () => void
}

const className = 'inline-block bgColor text-14px text-center text-decoration-none px-5 py-4'

const TextBtn = ({ title, link, blank = false, onClick }: Props) => {
  return (
    <>
      {blank && (
        <a className={className} href={link} onClick={onClick}>
          {title}
        </a>
      )}
      {!blank && (
        <Link href={link}>
          <a className={className} onClick={onClick}>
            {title}
          </a>
        </Link>
      )}
    </>
  )
}

export default TextBtn
