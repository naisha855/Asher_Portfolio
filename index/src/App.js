import './App.css';
import Main from './components/Main';
// import React, { useRef, useState } from 'react';

// CSS
import './scss/reset.scss'
import './scss/common.scss'
import './scss/main.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cards';
import Intro from './components/Intro';


function App() {
  return (
    <div className="App">
      <Intro />
      <Main />

    </div>
  );
}

export default App;
