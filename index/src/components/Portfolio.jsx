import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFlip, Pagination, Navigation } from 'swiper/modules';


const Portfolio = () => {
    return (
        <>
        <div className='Portfolio'>
<div className='Portfolio_left'></div>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Pagination, Navigation]}
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
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                </Swiper>
                </div>
        </>
    )
}

export default Portfolio