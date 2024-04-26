import React from 'react'

const Intro = () => {
  return (
    <>
      <div className='intro_container'>
        <video autoplay muted loop playsinline src={process.env.PUBLIC_URL + '/img/12716-241674181_small.mp4'}/>
        </div>
        <div className='intro_populate'>
          <h1>
            <span>Simple,</span><br />
            그 속에 정교한 <span>System</span> <br />
            정성 어린 <span>Sincere</span>
          </h1>
          <div></div>
          <h6>SCROLL OPEN</h6>
        </div>

    </>
  )
}

export default Intro