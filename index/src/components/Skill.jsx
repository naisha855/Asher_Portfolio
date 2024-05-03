import React, { useState,useEffect } from 'react'
import { Container, Nav } from 'react-bootstrap'
import TabSkill from './TabSkill'


const Skill = () => {

  let [tab, setTab] = useState(0);
  const [start, setStart] = useState('');

  useEffect(()=>{
    setInterval(() => {
      setStart('start')
    }, [])
  },[])


  return (
    <Container className='Skill_container'>
      <div className={' Skill_left ' + start}>
        <TabSkill className='Skill_left' tab={tab} />
      </div>
      <Nav variant="tabs" defaultActiveKey="link0" className='Skill_right' >
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