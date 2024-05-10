import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

const Profile = () => {

  const [inout, setInout] = useState('');
  const [inout2, setInout2] = useState('');
  const [inout3, setInout3] = useState('');
  const [inout5, setInout5] = useState('');
  const [inout6, setInout6] = useState('');
  const [nametyp, setNametyp] = useState('');
  // const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setInout('start')
    }, 100)
    setTimeout(() => {
      setInout2('start2')
    }, 600)
    setTimeout(() => {
      setInout3('start3')
    }, 1300)
    setTimeout(() => {
      setInout5('start5')
    }, 5000)
    setTimeout(() => {
      setInout6('start6')
    }, 5500)
  }, [])

  useEffect(() => {
    const myName = "제제 이름은 \n서영석 \n입니다. ";
    const delay = 3000; // 3초 딜레이
    // 3초 후에 setInterval 시작
    const timer = setTimeout(() => {
      let count = 0; // 초기 카운트

      const interval = setInterval(() => {
        // 현재 state 가져오기
        setNametyp(prevNametyp => prevNametyp + myName[count]);
        // setCount(prevCount => prevCount + 1);
count++; // 카운트 증가
        // 모든 글자가 출력되면 clearInterval
        if (count === myName.length - 1) {
          clearInterval(interval);
        }

        
      }, 100);

      // setInterval을 반환하기 전에 clearInterval 함수 실행
      return () => clearInterval(interval);
    }, delay);

    // 컴포넌트 언마운트 시 타이머 클리어
    return () => clearTimeout(timer);
  }, []); // []를 빈 배열로 전달하여 이펙트를 초기 한 번만 실행

  return (
    <Container>
      <div className={'Profile_left ' + inout}>
        <h2>ABOUT ME</h2>
        <h4 className={inout2}>Hello!!</h4>
        <h5 className={inout3}>모두에게 느낌있는 프론트엔드 개발자가 되기를 꿈꾸는</h5>
        <div className='Name_page_txt'>
          <ul>
            <h3>{nametyp}</h3>
          </ul>
        </div>
        <p className={inout5}>
          화려하고 멋있는 것을 저는 정말 좋아하지만 <br />
          <span>USER</span> 가 <span>INTERFACE</span> 를 보고 접하며 느낄 때,  <br />
          쾌적한 기분을 느끼게 할 수 있는가 <br />
          에 대한 안정성을 우선 선호합니다.
        </p>
      </div>
      <div className={'Profile_right ' + inout6} >
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="profile_picture"
          speed="800"
        >
          <SwiperSlide className='profile_picture_list Profile_cap1'></SwiperSlide>
          <SwiperSlide className='profile_picture_list Profile_cap2'></SwiperSlide>
          <SwiperSlide className='profile_picture_list Profile_cap3'></SwiperSlide>
        </Swiper>
      </div>
    </Container>
  )
}

export default Profile