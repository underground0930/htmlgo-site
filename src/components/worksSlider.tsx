import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import styles from 'styles/components/WorksSlider.module.scss'

import { Pagination, Navigation, Virtual, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// type
// import { Post } from 'types/index'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/virtual'

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
        className={`${styles.container}`}
        virtual
        lazy={{ loadPrevNext: true }}
        onSwiper={(swiper) => {
          setSw(swiper)
        }}
        onSlideChange={(swiper) => {
          sliderChangeHandle()
        }}
      >
        <div className={`swiper-wrapper`}>
          {slider.map((v, i) => {
            let isLoading = true
            return (
              <SwiperSlide className={styles.slider} virtualIndex={i} key={v.img.url}>
                {isLoading && <div className={styles.loader}>Loading...</div>}
                <img
                  src={v.img.url}
                  alt=""
                  onLoad={(e) => {
                    isLoading = false
                  }}
                />
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
