import React, { useEffect, useState } from 'react'

const Intro = () => {

  const [inout, setInout] = useState('');

  useEffect(()=>{
      setTimeout(()=>{
        setInout('start')
      },2000)
  },[]) 

  return (
    <>
      <div className={'intro_wallpaper ' + inout}>
        <div className='intro_container'>
          <video src={process.env.PUBLIC_URL + '/img/12716-241674181_small.mp4'}  autoPlay muted loop />
        </div>
        <div className='intro_populate'>
          <h1>
            <span><span className='intro_blue'>S</span>imple<span className='intro_blue'>,</span></span><br />
            그 속에 <span className='intro_blue' >정</span>교한 <span>S<span className='intro_blue'>y</span>stem</span> <br />
            <span className='intro_blue' >정</span>성 어린 <span><span className='intro_blue'>S</span>incere</span>
          </h1>
          <div></div>
          <h6>SCROLL OPEN</h6>
        </div>
      </div>
    </>
  )
}

export default Intro