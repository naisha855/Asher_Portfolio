import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

const Profile = () => {
  return (
    <Container>
    <div className='Profile_left'>ABOUT ME</div>
    <div className='Profile_right'>
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="profile_picture"
      >
        <SwiperSlide className='profile_picture_list' >Slide 1</SwiperSlide>
        <SwiperSlide className='profile_picture_list' >Slide 2</SwiperSlide>
        <SwiperSlide className='profile_picture_list' >Slide 3</SwiperSlide>

      </Swiper>
    </div>
    </Container>
  )
}

export default Profile