import React, { useEffect, useState } from 'react'
import { EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';

const Contact = () => {

  const [start, setStart] = useState('');
  const swiperSlide = useSwiperSlide();

  if (swiperSlide.isActive) {
    setTimeout(() => {
      setStart('start')
    }, 600)
  }



  return (
    <>
      <div className='Contact_wallpaper'>
        <div className='Contact_main'></div>
        <Swiper
          effect={'flip'}
          grabCursor={true}
          modules={[EffectFlip]}
          className={" Contact_container " + start}
        >
          <SwiperSlide className='Contact'>
            <div className='Contact_title'></div>
            <div className='Contact_page'>
              <div className='Contact_profile'>
                <div className='Contact_profilepicture'></div>
                <h3>서 영석<span>, Youngsuk Seo</span></h3>
              </div>
              <div className='Contact_populated'>
                <div className='Contact_bottom'>
                  <div className='Contact_info'>
                    <div className='Contact_Tel'>
                      <div className='Contact_nameicon'></div>
                      <div className='Contact_text'>
                        <h5>Phone</h5>
                        <p> 010 8311 2388</p>
                      </div>
                    </div>
                    <div className='Contact_E-mail'>
                      <div className='Contact_nameicon'></div>
                      <div className='Contact_text'>
                        <h5>E-mail</h5>
                        <p> naisha855@gmail.com</p>
                      </div>
                    </div>
                  </div>

                <div className='Contact_data'>
                  <div className='Contact_QR'></div>
                  <h6>왼쪽으로 드래그하여 뒷면 확인</h6>
                </div>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='Contact'>
            <div className='Contact_page2'>
              <div className='Contact_Lastleft'>
                <h4>Thank You!</h4>
                <p>저의 포트폴리오를 봐주셔서 감사합니다.</p>
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