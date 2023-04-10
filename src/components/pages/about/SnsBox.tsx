const list = [
  {
    href: 'https://github.com/underground0930',
    target: '_blank',
    rel: 'noreferrer',
    label: 'Github',
  },
  {
    href: 'https://twitter.com/resistance_gowy',
    target: '_blank',
    rel: 'noreferrer',
    label: 'Twitter',
  },
  {
    href: 'http://qiita.com/resistance_gowy',
    target: '_blank',
    rel: 'noreferrer',
    label: 'Qiita',
  },
  {
    href: 'https://zenn.dev/resistance_gowy',
    target: '_blank',
    rel: 'noreferrer',
    label: 'Zenn',
  },
  {
    href: 'https://note.com/resistance_gowy',
    target: '_blank',
    rel: 'noreferrer',
    label: 'Note',
  },
]

const AboutSnsBox = () => {
  return (
    <>
      <ul className='mx-auto flex max-w-[220px] flex-wrap items-center justify-center'>
        {list.map((v, i) => {
          return (
            <li key={i} className='mb-10px mr-15px'>
              <a className='font-bold' rel={v.rel} href={v.href} target={v.target}>
                {v.label}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default AboutSnsBox
