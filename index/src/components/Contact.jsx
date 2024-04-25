import React from 'react'
import { EffectFlip, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Contact = () => {
  return (
    <>
      <div className='Contact_wallpaper'>
        <Swiper
          effect={'flip'}
          grabCursor={true}
          navigation={true}
          modules={[EffectFlip, Navigation]}
          className="Contact_populate"
        >
          <SwiperSlide>
            <div className='Contact_page'>
              <div className='Contact_profilepicture'>img</div>
              <div className='Contact_populate'>
                <h5>name</h5>
                <p>서 영석</p>
                <h5>Phone</h5>
                <p> 010 8311 2388</p>
                <h5>E-mail</h5>
                <p> naisha855@gmail.com</p>
                <h6>오른쪽 드래그로 뒷면 확인</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Contact_page'>
              <p>저의 포트폴리오를 봐주셔서 감사합니다!</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Contact