'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Pagination, Navigation, Virtual } from 'swiper'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'

import { ImageWrapper } from '@/components/common/ImageWrapper'

import { WorksSlider } from '@/types'

type NewSlider = WorksSlider & { loading: boolean }

type Props = {
  sliders: WorksSlider[]
}

const className = {
  container: `w-[100%] border-border border-1`,
  sliderWrapper: `
    aspect-[16/9]
  `,
  slider: `
    relative
    object-fit-cover
    h-full
    before:content-[""]
    block
    aspect-video
  `,
  sliderBtn: `
    absolute
    m-auto
    top-0
    bottom-0
    w-[40px]
    h-[40px]
    cursor-pointer
    z-1
    items-center
    justify-center
    hidden
    md:flex
    bg-btn
    text-base
    rounded-full
  `,
  sliderPrev: `left-[-55px]`,
  sliderNext: `right-[-55px]`,
  indicator: `
  flex
  items-center
  justify-center
  w-full
  text-16px
  font-bold
  pt-20px
  `,
  icon: `w-[100%] h-[100%]`,
  loader: `
    rounded-[50%]
    w-[10em]
    h-[10em]
    after:block
    after:content-[""]
    after:rounded-[50%]
    after:w-[10em]
    after:h-[10em]
    left-0
    right-0
    top-0
    bottom-0
    m-auto
    text-10px
    absolute
    indent-[-9999em]
    border-t-[1.1em]
    border-t-[#000]/10
    border-r-[1.1em]
    border-r-[#000]/10
    border-b-[1.1em]
    border-b-[#000]/10
    border-l-[1.1em]
    border-l-[#000]/30
    transform-translate-z-[0]
    animate-[load8_1.1s_linear_infinite]
  `,
}

const WorksSlider: React.FC<Props> = ({ sliders }: Props) => {
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
    const newSliders = sliders.map((s) => {
      return {
        ...s,
        loading: true,
      }
    })
    setSliderList(newSliders)
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
        className={`${className.container}`}
        virtual
        onSlideChange={() => sliderChangeHandle()}
        ref={swiperRef}
      >
        <div className='swiper-wrapper'>
          {sliderList.map((v, i) => {
            return (
              <SwiperSlide className={className.slider} virtualIndex={i} key={v.img.url}>
                {v.loading && <div className={className.loader}>Loading...</div>}
                <ImageWrapper
                  cls=''
                  src={v.img.url}
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
          className={`${className.sliderBtn} ${className.sliderPrev} prevBtn`}
          onClick={goPrev}
        >
          &lt;
        </div>
      )}
      {!bothEnds.last && sliders.length > 1 && (
        <div
          className={`${className.sliderBtn} ${className.sliderNext} nextBtn`}
          onClick={goNext}
        >
          &gt;
        </div>
      )}
      {sliders.length > 1 && (
        <div className={`${className.indicator}`}>
          {index} / {sliders.length}
        </div>
      )}
    </>
  )
}

export default WorksSlider
