import React, { useState } from 'react'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { EffectFlip, Scrollbar, Controller } from 'swiper/modules';


const Portfolio = () => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [start, setStart] = useState('');
    const [start2, setStart2] = useState('');
    const swiperSlide = useSwiperSlide();

    if (swiperSlide.isActive) {
        setTimeout(() => {
          setStart('start')
        }, 1800)
      }

      if (swiperSlide.isActive) {
        setTimeout(() => {
          setStart2('start2')
        }, 1000)
      }

    return (
        <>
            <div className='Portfolio'>
                <div className={' Portfolio_left ' + start}>
                    <Swiper
                        scrollbar={{
                            hide: true,
                        }}
                        grabCursor={true}
                        modules={[Scrollbar, Controller]}
                        className="Portfolio_explanation"
                        onSwiper={setFirstSwiper}
                        controller={{ control: secondSwiper }}
                    >
                        <SwiperSlide>
                            <h2>SIDE SHOW: STAR WARS</h2>
                            <div className='Portfolio_tag'>
                                <h4>REACT</h4><h4>ROUTER</h4><h4>REDUX</h4><h4>SCSS</h4><h4>AXIOS</h4>
                            </div>
                            <h3>WORKER</h3>
                            <h5>1인, 개인</h5>
                            <h3>COLOR</h3>
                            <div className='color_container'>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#fade4b" }}></div>
                                    <h6>#fade4b</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#222" }}></div>
                                    <h6>#222</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#f4f4f4" }}></div>
                                    <h6>#f4f4f4</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#1d1e1f" }}></div>
                                    <h6>#1d1e1f</h6>
                                </div>
                            </div>
                            <h3>ABOUT</h3>
                            <p>SIDESHOW 피규어 샵, 그 중에서 스타워즈 상품 페이지를 REACT를 사용해 작업하였습니다. REACT BOOTSTRAP과 SWIPER SLIDER를 이용해 구조를 구성했고 REACT ROUTER를 통해 상세 페이지를 만들었으며 REDUX로 장바구니를 구성했습니다. 상품 정보는 AXIOS를 통해서 서버를 정리했습니다.</p>
                            <button>View</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2>온라인 중고서점 오픈마켓, 북코아</h2>
                            <div className='Portfolio_tag'>
                                <h4>HTML</h4><h4>SCSS</h4><h4>Jquery</h4><h4>API</h4><h4>AJAX</h4>
                            </div>
                            <h3>WORKER</h3>
                            <h5>1인, 개인</h5>
                            <h3>COLOR</h3>
                            <div className='color_container'>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#237AF6" }}></div>
                                    <h6>#237AF6</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#003c85" }}></div>
                                    <h6>#003c85</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#db1037" }}></div>
                                    <h6>#db1037</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#616161" }}></div>
                                    <h6>#616161</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#ffffff", border: "1px solid black" }}></div>
                                    <h6>#ffffff</h6>
                                </div>
                            </div>
                            <h3>ABOUT</h3>
                            <p>카카오 오픈 API의 사용을 주 목적으로 하여 온라인 서점 북코아를 HTML과 SCSS를 사용해 작업했습니다. 이번 프로젝트는 원본 북코아 웹 사이트의 도서 정보 중 작가 소개, 타이틀과 같은 지원하지 않는 기능을 추가하였고 브랜드를 테마로 만들어 방문자가 보기 더욱 편하도록 리뉴얼 하였습니다. </p>
                            <button>View</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2>GROUND SEESAW</h2>
                            <div className='Portfolio_tag'>
                                <h4>HTML</h4><h4>CSS</h4><h4>Jquery</h4><h4>반응형</h4>
                            </div>
                            <h3>WORKER</h3>
                            <h5>3인, 팀 프로젝트</h5>
                            <h3>COLOR</h3>
                            <div className='color_container'>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#237AF6" }}></div>
                                    <h6>#237AF6</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#003c85" }}></div>
                                    <h6>#003c85</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#db1037" }}></div>
                                    <h6>#db1037</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#616161" }}></div>
                                    <h6>#616161</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#ffffff", border: "1px solid black" }}></div>
                                    <h6>#ffffff</h6>
                                </div>
                            </div>
                            <h3>ABOUT</h3>
                            <p>GROUND SEESAW의 웹 사이트를 재구성한 3인 팀 프로젝트입니다. 2024년 3월에 전시회 소개 작품을 개별 테마로 재구성하였습니다. 제가 정한 전시회 작품은 "Alice into the Newworld"입니다.</p>
                            <button>View</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2>건강정보 TMI 웹 사이트, HEALTH</h2>
                            <div className='Portfolio_tag'>
                                <h4>HTML</h4><h4>CSS</h4><h4>JS</h4><h4>반응형</h4>
                            </div>
                            <h3>WORKER</h3>
                            <h5>1인, 개인</h5>
                            <h3>COLOR</h3>
                            <div className='color_container'>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#F2D6A5" }}></div>
                                    <h6>#F2D6A5</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#c1ab84" }}></div>
                                    <h6>#c1ab84</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#454545" }}></div>
                                    <h6>#454545</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#ffffffb3", border: "1px solid black" }}></div>
                                    <h6>#ffffffb3</h6>
                                </div>

                            </div>
                            <h3>ABOUT</h3>
                            <p>
                                HTML과 CSS를 이용해 웹 페이지를 구성하였고 javascript로 웹 페이지의 효과와 기능을 구현하였습니다. 이번 프로젝트는 테블릿과 휴대폰으로 웹 사이트를 접속할 때, 기기별로 웹 페이지를 지원할 수 있도록 반응형 작업을 하였습니다.
                            </p>
                            <button>View</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2>애견샵 웹 사이트, DCG</h2>
                            <div className='Portfolio_tag'>
                                <h4>HTML</h4><h4>CSS</h4>
                            </div>
                            <h3>WORKER</h3>
                            <h5>1인, 개인</h5>
                            <h3>COLOR</h3>
                            <div className='color_container'>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#ff69b4" }}></div>
                                    <h6>#ff69b4</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#808080" }}></div>
                                    <h6>#808080</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#ff0000" }}></div>
                                    <h6>#ff0000</h6>
                                </div>
                                <div className='color_page'>
                                    <div className='color' style={{ backgroundColor: "#ffff00" }}></div>
                                    <h6>#ffff00</h6>
                                </div>

                            </div>
                            <h3>ABOUT</h3>
                            <p>
                                애견샵 웹 사이트를 HTML과 CSS만을 사용하여 구현한 저의 첫번째 프로젝트입니다.
                                HTML로 위치를 구성했고 CSS와 HOVER효과로 디자인 하였습니다.
                            </p>
                            <button>View</button>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    modules={[EffectFlip, Controller]}
                    className={" Portfolio_image " + start2}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                >
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/img/SIDESHOW_STARWARS_FigureShop.png'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/img/Bookoa_BookShop.png'} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/img/Alice_into_the_New_world.png'} />
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