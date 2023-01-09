'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { Pagination, Navigation, Virtual, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles

type Props = {
  slider: {
    fieldId: string
    img: {
      url: string
      height: number
      width: number
    }
  }[]
}

const className = {
  container: `w-[100%] border-border border-1`,
  slider: `
    relative
    object-fit-cover
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
    hidden
    md:block
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

const WorksSlider: React.FC<Props> = ({ slider }: Props) => {
  const [index, setIndex] = useState(1)
  const [isFirst, setIsFirst] = useState(true)
  const [isLast, setIsLast] = useState(false)
  const [sw, setSw] = useState<any | null>(null)

  const goNext = () => {
    sw.slideNext()
  }

  const goPrev = () => {
    sw.slidePrev()
  }

  const sliderChangeHandle = (): void => {
    setIndex(sw?.activeIndex + 1)
    if (sw?.activeIndex === 0) {
      setIsFirst(true)
      setIsLast(false)
    } else if (sw?.activeIndex === slider.length - 1) {
      setIsFirst(false)
      setIsLast(true)
    } else {
      setIsFirst(false)
      setIsLast(false)
    }
  }

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Virtual, Lazy]}
        className={`${className.container}`}
        virtual
        lazy={{ loadPrevNext: true }}
        onSwiper={(swiper) => setSw(swiper)}
        onSlideChange={(swiper) => sliderChangeHandle()}
      >
        <div className='swiper-wrapper'>
          {slider.map((v, i) => {
            let isLoading = true
            return (
              <SwiperSlide className={className.slider} virtualIndex={i} key={v.img.url}>
                {isLoading && <div className={className.loader}>Loading...</div>}
                <Image
                  src={v.img.url}
                  alt=''
                  priority={true}
                  fill={true}
                  onLoadingComplete={(e) => (isLoading = false)}
                />
              </SwiperSlide>
            )
          })}
        </div>
      </Swiper>
      {!isFirst && slider.length > 1 && (
        <div className={`${className.sliderBtn} ${className.sliderPrev} prevBtn`} onClick={goPrev}>
          PREV
        </div>
      )}
      {!isLast && slider.length > 1 && (
        <div className={`${className.sliderBtn} ${className.sliderNext} nextBtn`} onClick={goNext}>
          NEXT
        </div>
      )}
      {slider.length > 1 && (
        <div className={`${className.indicator}`}>
          {index} / {slider.length}
        </div>
      )}
    </>
  )
}

export default WorksSlider
