import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from 'components/common/carousel/Carousel.module.scss'
import "swiper/css";

export const Carousel = () => {
  return (
    <Swiper className={styles.swiper}>
      <SwiperSlide color='red'>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  )
}