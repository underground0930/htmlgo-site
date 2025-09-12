'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Pagination, Navigation, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'

import { Image } from '@/components/utils/image'

import type { WorksSlider } from '@/features/works/types'
import { NO_IMAGE } from '@/features/works/constants'

type NewSlider = WorksSlider & { loading: boolean }

type Props = {
  sliders: WorksSlider[]
}

const WorksSliderComponent = ({ sliders }: Props) => {
  const [index, setIndex] = useState(1)
  const [bothEnds, setBothEnds] = useState({
    first: true,
    last: false,
  })
  const swiperRef = useRef<SwiperRef>(null)

  const goNext = () => swiperRef.current?.swiper.slideNext()
  const goPrev = () => swiperRef.current?.swiper.slidePrev()

  const [sliderList, setSliderList] = useState<NewSlider[]>([])

  useEffect(() => {
    if (sliders.length === 0) {
      setSliderList([
        {
          fieldId: 'noImage',
          img: {
            url: NO_IMAGE,
            height: 600,
            width: 1200,
          },
          loading: false,
        },
      ])
      return
    }

    setSliderList(
      sliders.map((item) => {
        return {
          ...item,
          loading: true,
        }
      }),
    )
  }, [sliders])

  const sliderChangeHandle = (): void => {
    if (!swiperRef.current) return
    setIndex(swiperRef.current?.swiper.activeIndex + 1)
    if (swiperRef.current.swiper.activeIndex === 0) {
      setBothEnds({
        first: true,
        last: false,
      })
      return
    } else if (swiperRef.current.swiper.activeIndex === sliders.length - 1) {
      setBothEnds({
        first: false,
        last: true,
      })
      return
    }
    setBothEnds({
      first: false,
      last: false,
    })
  }

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Virtual]}
        className='border-border w-full border'
        virtual
        onSlideChange={sliderChangeHandle}
        ref={swiperRef}
      >
        <div className='swiper-wrapper'>
          {sliderList.map((item, i) => {
            return (
              <SwiperSlide
                className="relative block aspect-video h-full object-cover before:content-['']"
                virtualIndex={i}
                key={item.img.url}
              >
                {item.loading && (
                  <div className="transform-translate-z-[0] absolute top-0 right-0 bottom-0 left-0 m-auto h-[10em] w-[10em] animate-[load8_1.1s_linear_infinite] rounded-[50%] border-t-[1.1em] border-r-[1.1em] border-b-[1.1em] border-l-[1.1em] border-t-black/10 border-r-black/10 border-b-black/10 border-l-black/30 indent-[-9999em] text-xs after:block after:h-[10em] after:w-[10em] after:rounded-[50%] after:content-['']">
                    Loading...
                  </div>
                )}
                <Image
                  cover
                  src={item.img.url}
                  onLoad={() => {
                    setSliderList((prev) => {
                      return prev.map((s, j) => {
                        if (i === j) {
                          s.loading = false
                        }
                        return s
                      })
                    })
                  }}
                />
              </SwiperSlide>
            )
          })}
        </div>
      </Swiper>
      {!bothEnds.first && sliders.length > 1 && (
        <div
          className='prevBtn bg-base absolute top-0 bottom-0 left-[-14px] z-1 m-auto hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white md:flex'
          onClick={goPrev}
        >
          &lt;
        </div>
      )}
      {!bothEnds.last && sliders.length > 1 && (
        <div
          className='nextBtn bg-base absolute top-0 right-[-14px] bottom-0 z-1 m-auto hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white md:flex'
          onClick={goNext}
        >
          &gt;
        </div>
      )}
      {sliders.length > 1 && (
        <div className='flex w-full items-center justify-center pt-5 text-base font-bold'>
          {index} / {sliders.length}
        </div>
      )}
    </>
  )
}

export default WorksSliderComponent
