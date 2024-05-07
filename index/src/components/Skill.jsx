import React, { useState,useEffect } from 'react'
import { Container, Nav } from 'react-bootstrap'
import TabSkill from './TabSkill'
import { useSwiperSlide } from 'swiper/react';


const Skill = () => {

  let [tab, setTab] = useState(0);
  const [start, setStart] = useState('');
  const [start2, setStsrt2] = useState('');
  const swiperSlide = useSwiperSlide();

    if (swiperSlide.isActive) {
      setTimeout(() => {
        setStart('start')
      }, 600)
    }

    if (swiperSlide.isActive) {
      setTimeout(() => {
        setStsrt2('start2')
      }, 1500)
    }

  return (
    <Container className='Skill_container'>

      <div className={' Skill_left ' + start}>
        <TabSkill className='Skill_left' tab={tab} />
      </div>

      <Nav variant="tabs" defaultActiveKey="link0" className={' Skill_right ' + start2} >
        <ul>
          <Nav.Link onClick={() => { setTab(1) }}>PROGRAMMING</Nav.Link>
          <Nav.Link onClick={() => { setTab(2) }}>GRAPIC DESIGN</Nav.Link>
          <Nav.Link onClick={() => { setTab(3) }}>VERSON CONTROL</Nav.Link>
          <Nav.Link onClick={() => { setTab(4) }}>SERVER & DATA</Nav.Link>
        </ul>
      </Nav>
    </Container>
  )
}

export default Skill