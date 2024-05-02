import React, { useEffect, useState, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

const Profile = () => {

  const [inout, setInout] = useState('');
  const myName = "저의 이름은 \n서영석 \n입니다."
  const [nametyp, setNametyp] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setInout('start')
    }, 10)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setNametyp(nametyp + myName[count]);
      setCount(count + 1);
    }, 150);
    if (count === myName.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  })

  return (
    <Container>
      <div className={'Profile_left ' + inout}>
        <h2>ABOUT ME</h2>
        <h4>Hello!!</h4>
        <h5>모두에게 느낌있는 프론트엔드 개발자가 되기를 꿈꾸는</h5>
        <div className='Name_page_txt'>
          <ul>
            <h3>{nametyp}</h3>
          </ul>
        </div>
        <p className={inout}>
          화려하고 멋있는 것을 저는 정말 좋아하지만 <br />
          <span>USER</span> 가 <span>INTERFACE</span> 를 보고 접하며 느낄 때,  <br />
          쾌적한 기분을 느끼게 할 수 있는가 <br />
          에 대한 안정성을 우선 선호합니다.
        </p>
      </div>
      <div className={'Profile_right ' + inout} >
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