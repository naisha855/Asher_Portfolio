import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Navigation, Scrollbar } from 'swiper/modules';

const Portfolio = () => {

    return (
        <>
        <div className='Portfolio'>
<div className='Portfolio_left'>
<Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="Portfolio_explanation"
      >
        <SwiperSlide>
            title, tag, worker: 몇명 , color,
            about, button
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
</div>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Navigation]}
                    className="Portfolio_image"
                    
                >
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/img/SIDESHOW_STARWARS_FigureShop.png'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/img/Bookoa_BookShop.png'} />
                    </SwiperSlide>
                    <SwiperSlide>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/img/Healfo.png'} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/img/DCG_PetShop.png'} />
                    </SwiperSlide>
                </Swiper>
                </div>
        </>
    )
}

export default Portfolio