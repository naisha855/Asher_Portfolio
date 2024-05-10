import React, { useEffect, useState } from 'react'
import { EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';

const Contact = () => {

  const [start, setStart] = useState('');
  const [start2, setStart2] = useState('');
  const [start3, setStart3] = useState('');
  const [start4, setStart4] = useState('');
  const [start5, setStart5] = useState('');
  const [start6, setStart6] = useState('');
  const [start7, setStart7] = useState('');
  const [start8, setStart8] = useState('');
  const swiperSlide = useSwiperSlide();

  if (swiperSlide.isActive) {
    setTimeout(() => {
      setStart('start')
    }, 600)
    setTimeout(() => {
      setStart2('start2')
    }, 1500)
    setTimeout(() => {
      setStart3('start3')
    }, 2000)
    setTimeout(() => {
      setStart4('start4')
    }, 2500)
    setTimeout(() => {
      setStart5('start5')
    }, 2700)
    setTimeout(() => {
      setStart6('start6')
    }, 2900)
    setTimeout(() => {
      setStart7('start7')
    }, 3100)
    setTimeout(() => {
      setStart8('start8')
    }, 3300)
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
                <h3 className={start2}>서 영석<span className={start3}>, Youngsuk Seo</span></h3>
              </div>
              <div className='Contact_populated'>
                <div className='Contact_bottom'>
                  <div className='Contact_info'>
                    <div className='Contact_Tel'>
                      <div className={' Contact_nameicon ' + start4}></div>
                      <div className={' Contact_text ' + start6}>
                        <h5>Phone</h5>
                        <p> 010 8311 2388</p>
                      </div>
                    </div>
                    <div className='Contact_E-mail'>
                      <div className={' Contact_nameicon ' + start5}></div>
                      <div className={' Contact_text ' + start7}>
                        <h5>E-mail</h5>
                        <p> naisha855@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className='Contact_data'>
                    <div className={' Contact_QR ' + start8}></div>
                    <h6 className={start8}>왼쪽으로 드래그하여 뒷면 확인</h6>
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