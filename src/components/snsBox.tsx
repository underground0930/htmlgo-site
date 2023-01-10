const className = {
  snsBox: `mx-auto max-w-[220px] flex items-center justify-center flex-wrap`,
  snsBoxChild: `mb-10px mr-15px`,
  snsBoxLink: `font-bold`,
  github: `w-[40px] h-[40px]`,
  twitter: `w-[40px] h-[40px]`,
  qiita: `w-[40px] h-[40px]`,
  zenn: `w-[40px] h-[40px] rounded-[4px]`,
  note: `w-[40px] h-[40px] rounded-[4px]`,
}

const SnsBox = () => {
  return (
    <>
      <ul className={className.snsBox}>
        <li className={className.snsBoxChild}>
          <a
            className={className.snsBoxLink}
            href='https://github.com/underground0930'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </li>
        <li className={className.snsBoxChild}>
          <a
            className={className.snsBoxLink}
            href='https://twitter.com/resistance_gowy'
            target='_blank'
            rel='noreferrer'
          >
            Twitter
          </a>
        </li>
        <li className={className.snsBoxChild}>
          <a
            className={className.snsBoxLink}
            href='http://qiita.com/resistance_gowy'
            target='_blank'
            rel='noreferrer'
          >
            Qiita
          </a>
        </li>
        <li className={className.snsBoxChild}>
          <a
            className={className.snsBoxLink}
            href='https://zenn.dev/resistance_gowy'
            target='_blank'
            rel='noreferrer'
          >
            Zenn
          </a>
        </li>
        <li className={className.snsBoxChild}>
          <a
            className={className.snsBoxLink}
            href='https://note.com/resistance_gowy'
            target='_blank'
            rel='noreferrer'
          >
            Note
          </a>
        </li>
      </ul>
    </>
  )
}

export default SnsBox
