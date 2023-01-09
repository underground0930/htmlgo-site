type Props = {
  category: string
}

const className = {
  snsBox: `mx-auto max-w-[240px] md:max-w-[260px] flex items-center justify-center flex-wrap`,
  snsBoxChild: `mb-10px w-[20%] text-center last-of-type:mr-0px`,
  github: `w-[40px] h-[40px]`,
  twitter: `w-[40px] h-[40px]`,
  qiita: `w-[40px] h-[40px]`,
  zenn: `w-[40px] h-[40px] rounded-[4px]`,
  note: `w-[40px] h-[40px] rounded-[4px]`,
}

const SnsBox = ({ category }: Props) => {
  return (
    <>
      <ul className={className.snsBox}>
        <li className={className.snsBoxChild}>
          <a href='https://github.com/underground0930' target='_blank' rel='noreferrer'>
            github
          </a>
        </li>
        <li className={className.snsBoxChild}>
          <a href='https://twitter.com/resistance_gowy' target='_blank' rel='noreferrer'>
            twitter
          </a>
        </li>
        <li className={className.snsBoxChild}>
          <a href='http://qiita.com/resistance_gowy' target='_blank' rel='noreferrer'>
            qiita
          </a>
        </li>
        <li className={className.snsBoxChild}>
          <a href='https://zenn.dev/resistance_gowy' target='_blank' rel='noreferrer'>
            zenn
          </a>
        </li>
        <li className={className.snsBoxChild}>
          <a href='https://note.com/resistance_gowy' target='_blank' rel='noreferrer'>
            note
          </a>
        </li>
      </ul>
    </>
  )
}

export default SnsBox
