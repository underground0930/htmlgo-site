import { snsList } from '@/const'

export const AboutSnsBox: React.FC = () => {
  return (
    <>
      <ul className='flex flex-wrap justify-center gap-3'>
        {snsList.map((v, i) => {
          return (
            <li key={i}>
              <a
                className='px-2 text-xl font-bold hover:text-linkActive'
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
    </>
  )
}
