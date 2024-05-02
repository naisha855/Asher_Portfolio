import './App.css';
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
import { useEffect, useState } from 'react';

function App() {
 const [load,setLoad] = useState(false); 

 useEffect(()=>{
  setTimeout(()=>{
    setLoad(true)
  },3000)
 },[])

  // let swiper = new Swiper('.stop_swiper', {
  //   freeMode : false
  // })

  return (
    <>
      <div className="App">
              <Intro></Intro>              
            {
              load ? <Main></Main> :null
            }
      </div>
    </>
  );
}

export default App;
