import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules';
import Profile from './Profile';
import Skill from './Skill';


function Main() {
  return (

    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
      speed="1000"
    >
      <SwiperSlide><Profile /></SwiperSlide>
      <SwiperSlide><Skill /></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
    </Swiper>

  )
}

export default Main