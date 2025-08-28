type Props = React.ComponentPropsWithoutRef<'ul'>

export const AboutSnsBox = (props: Props) => {
  return (
    <ul {...props} className='flex flex-wrap justify-center gap-3'>
      {snsList.map((v, i) => {
        return (
          <li key={i}>
            <a
              className='hover:text-link-active px-2 text-xl font-bold'
              rel={v.rel}
              href={v.href}
              target={v.target}
            >
              {v.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export const snsList = [
  {
    href: 'https://github.com/underground0930',
    target: '_blank',
    rel: 'noreferrer',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/resistance_gowy',
    target: '_blank',
    rel: 'noreferrer',
    label: 'X',
  },
  {
    href: 'https://zenn.dev/resistance_gowy',
    target: '_blank',
    rel: 'noreferrer',
    label: 'Zenn',
  },
  {
    href: 'http://qiita.com/resistance_gowy',
    target: '_blank',
    rel: 'noreferrer',
    label: 'Qiita',
  },
]
