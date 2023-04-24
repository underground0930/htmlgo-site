import { fetchAbout } from '@/libs'
import { setMetaData } from '@/utils'
import { setBaseUrl } from '@/const'
import { ImageWrapper, TextBtn, Title, AboutHistoryList, AboutSnsBox } from '@/components'

const description = 'このサイトについて'

export const metadata = {
  ...setMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'ABOUT',
    description,
    url: setBaseUrl('/about'),
    images: setBaseUrl('/img/ogp_new.png'),
  }),
}

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  body: `mb-40px pb-30px`,
  img: `mx-auto mb-40px rounded-full`,
  sns: `mb-45px`,
  title: `text-18px font-bold mt-40px mb-30px border-l-5 border-l-[#000] border-b-1 border-b-[#000]/30 pl-5px pb-5px`,
  link: `font-bold`,
  text: `text-15px`,
  btnWrap: `border-t-1 border-border text-center pt-40px mb-40px`,
}

export default async function About() {
  const aboutData = await fetchAbout()

  return (
    <>
      <main className={className.main}>
        <Title title='ABOUT' text='このサイトや主について説明しています' />
        <div className={className.body}>
          <div className=''>
            <ImageWrapper
              cls={className.img}
              src='/img/profile.jpg'
              width={210}
              height={210}
            />
          </div>
          <div className={className.sns}>
            <AboutSnsBox />
          </div>
          <div className='cms-about-content'>
            {aboutData.length > 0 ? (
              <>
                {aboutData[0].repeat.map((item, index) => {
                  return (
                    <section key={index}>
                      <h3 className={className.title}>{item.title}</h3>
                      <div
                        className={className.text}
                        dangerouslySetInnerHTML={{
                          __html: item.content,
                        }}
                      />
                    </section>
                  )
                })}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={className.btnWrap}>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
