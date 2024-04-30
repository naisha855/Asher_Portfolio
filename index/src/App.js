import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade } from 'swiper/modules';
import Intro from './components/Intro';
import Main from './components/Main';

// CSS
import './scss/reset.scss'
import './scss/common.scss'
import './scss/main.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cards';
import 'swiper/css/scrollbar';

function App() {

  // let swiper = new Swiper('.stop_swiper', {
  //   freeMode : false
  // })

  return (
    <>
      <div className="App">
        {/* <Swiper
          mousewheel={true}

          className="Main"
          modules={[Mousewheel, EffectFade]}
          speed={1000}
        >
          <SwiperSlide className='stop_swiper'>            */}
              <Intro></Intro>              
          {/* </SwiperSlide>
          <SwiperSlide>            */}
              <Main></Main>         
          {/* </SwiperSlide>
        </Swiper> */}
      </div>
    </>
  );
}

export default App;
