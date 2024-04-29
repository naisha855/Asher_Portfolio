import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules';
import Profile from './Profile';
import Skill from './Skill';
import Portfolio from './Portfolio';
import Contact from './Contact';


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
      className="Main"
      speed="1000"
    >
      <SwiperSlide><Profile /></SwiperSlide>
      <SwiperSlide><Skill /></SwiperSlide>
      <SwiperSlide><Portfolio /></SwiperSlide>
      <SwiperSlide><Contact /></SwiperSlide>
    </Swiper>

  )
}

export default Main