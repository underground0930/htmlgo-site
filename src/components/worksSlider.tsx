import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import styles from 'styles/components/WorksSlider.module.scss'

import { Pagination, Navigation, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

type Props = {
  slider: any[]
}

const WorksSlider = ({ slider = [] }: Props) => {
  const [index, setIndex] = useState(1)
  const [isFirst, setIsFirst] = useState(true)
  const [isLast, setIsLast] = useState(false)
  const [sw, setSw] = useState<any | null>(null)

  const goNext = () => {
    sw?.slideNext()
  }

  const goPrev = () => {
    sw?.slidePrev()
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
        modules={[Pagination, Navigation, Virtual]}
        navigation={{ nextEl: '.nextBtn', prevEl: '.prevBtn' }}
        className={`${styles.container}`}
        virtual
        onSwiper={(swiper) => {
          setSw(swiper)
        }}
        onSlideChange={() => {
          sliderChangeHandle()
        }}
      >
        <div className={`swiper-wrapper`}>
          {slider.map((v, i) => {
            return (
              <SwiperSlide virtualIndex={i} key={i}>
                <img src={v.img.url} alt="" />
              </SwiperSlide>
            )
          })}
        </div>
      </Swiper>
      {!isFirst && slider.length > 1 && (
        <div className={`${styles.sliderPrev} prevBtn`} onClick={goPrev}>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            // title="前へ"
          />
        </div>
      )}
      {!isLast && slider.length > 1 && (
        <div className={`${styles.sliderNext} nextBtn`} onClick={goNext}>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            // title="次へ"
          />
        </div>
      )}
      {slider.length > 1 && (
        <div className={`${styles.indicator}`}>
          {index} / {slider.length}
        </div>
      )}
    </>
  )
}

export default WorksSlider
