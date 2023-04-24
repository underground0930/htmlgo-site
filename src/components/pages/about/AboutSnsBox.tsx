import { snsList } from '@/const'

export const AboutSnsBox = () => {
  return (
    <>
      <ul className='mx-auto flex max-w-[220px] flex-wrap items-center justify-center'>
        {snsList.map((v, i) => {
          return (
            <li key={i} className='mb-10px mr-15px'>
              <a
                className='font-bold hover:text-linkActive'
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
