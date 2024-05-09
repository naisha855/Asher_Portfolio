import React, { useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import TabSkill from './TabSkill'
import { useSwiperSlide } from 'swiper/react';

const Skill = () => {

  let [tab, setTab] = useState(0);
  const [start, setStart] = useState('');
  const [start2, setStsrt2] = useState('');
  const swiperSlide = useSwiperSlide(); 

  const activeStyle = {
    color: '#ff7722',
    backgroundColor: '#ffffff',
  };

    if (swiperSlide.isActive) {
      setTimeout(() => {
        setStart('start')
      }, 500)
      setTimeout(() => {
        setStsrt2('start2')
      }, 1300)
    }


    // 한번 더 클릭하면 Tab 0이 되는 코드
    // const setTab = (selectedTab) => {
    //   if(tab === selectedTab){
    //     setTab(0);
    //   }else{
    //     setTab(selectedTab);
    //   }
    // }

  return (
    <Container className='Skill_container'>
      <div className={' Skill_left ' + start}>
        <TabSkill className='Skill_left' tab={tab} />
      </div>

      <Nav variant="tabs" defaultActiveKey="link0" className={' Skill_right ' + start2} >

        
        <ul>
          <Nav.Link onClick={() => { setTab(1) }} style={tab===1 ? activeStyle : {}}>PROGRAMMING</Nav.Link>
          <Nav.Link onClick={() => { setTab(2) }} style={tab===2 ? activeStyle : {}}>GRAPIC DESIGN</Nav.Link>
          <Nav.Link onClick={() => { setTab(3) }} style={tab===3 ? activeStyle : {}}>VERSON CONTROL</Nav.Link>
          <Nav.Link onClick={() => { setTab(4) }} style={tab===4 ? activeStyle : {}}>SERVER & DATA</Nav.Link>
        </ul>
      </Nav>
    </Container>
  )
}

export default Skill