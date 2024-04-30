import React from 'react'
import { EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Contact = () => {
  return (
    <>
      <div className='Contact_wallpaper'>
        <Swiper
          effect={'flip'}
          grabCursor={true}
          modules={[EffectFlip]}
          className="Contact_populate"
        >
          <SwiperSlide>
            <div className='Contact_page'>
              <div className='Contact_profilepicture'></div>
              <div className='Contact_populate'>
                <h5>name</h5>
                <p>서 영석</p>
                <h5>Phone</h5>
                <p> 010 8311 2388</p>
                <h5>E-mail</h5>
                <p> naisha855@gmail.com</p>
                <h6>왼쪽으로 드래그하여 뒷면 확인</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Contact_page'>
              <div className='Contact_Lastleft'>
              <h4>Thank You!</h4>
              <p>저의 포트폴리오를 봐주셔서 감사합니다.</p>
              <div className='Contact_Lastlogo'></div>
              </div>
              <div className='Contact_Lastright'></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Contact