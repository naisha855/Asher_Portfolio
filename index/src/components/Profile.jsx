import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

const Profile = () => {
  return (
    <Container>
    <div className='Profile_left'>
      <h2>ABOUT ME</h2>
      <h3>Hello!!</h3>
      <p>모두에게 느낌있는 프론트엔드 개발자가 되기를 꿈꾸는</p>
      <h3>저의 이름은 <br />
        "서영석" <br />
        입니다.</h3>
      </div>
    <div className='Profile_right'>
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="profile_picture"
        speed="800"
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