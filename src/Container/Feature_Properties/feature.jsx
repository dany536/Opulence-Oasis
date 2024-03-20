import { Link } from 'react-router-dom';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './feature.css';

// import required modules
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

export default function feature() {
    return (
        <>
            <div className="containerF">
                <Swiper
                    navigation={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 10,
                        stretch: 0,
                        depth: 200,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Autoplay, Navigation]}
                    className="swiper_containerF"
                >
                    <SwiperSlide className='swiperslideF'>
                        <Link to="/location/holiday-homes">
                            <img className='transition ease-in-out duration-700 hover:scale-105' src="./holiday_slide2.jpg" />
                            <div className="cursor-pointer absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-left mx-auto w-full pb-28">
                                <h1 className="text-lg font-semibold text-center tracking-widest text-white">8 VACATIONS</h1>
                                <p className="mt-2 text-6xl text-center text-white">
                                    Holiday Homes
                                </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='swiperslideF'>
                        <Link to="/location/real-estate">
                            <img className='transition ease-in-out duration-700 hover:scale-105' src="./real_slide2.jpg" />
                            <div className="cursor-pointer absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-left mx-auto w-full pb-28">
                                <h1 className="text-lg font-semibold text-center tracking-widest text-white">21 VACATIONS</h1>
                                <p className="mt-2 text-6xl text-center text-white">
                                    Real Estate
                                </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='swiperslideF'>
                        <Link to="/location/boutique-hotels">
                            <img className='transition ease-in-out duration-700 hover:scale-105' src="./boutique_slide2.jpg" />
                            <div className="cursor-pointer absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-left mx-auto w-full pb-28">
                                <h1 className="text-lg font-semibold text-center tracking-widest text-white">8 VACATIONS</h1>
                                <p className="mt-2 text-6xl text-center text-white">
                                    Boutique Hotels
                                </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='swiperslideF'>
                        <Link to="/location/safari-lodges">
                            <img className='transition ease-in-out duration-700 hover:scale-105' src="./lodges_slide2.png" />
                            <div className="cursor-pointer absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-left mx-auto w-full pb-28">
                                <h1 className="text-lg font-semibold text-center tracking-widest text-white">14 VACATIONS</h1>
                                <p className="mt-2 text-6xl text-center text-white">
                                    Safari Lodges
                                </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='swiperslideF'>
                        <Link to="/location/safari-camps">
                            <img className='transition ease-in-out duration-700 hover:scale-105' src="./camps_slide2.jpg" />
                            <div className="cursor-pointer absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-left mx-auto w-full pb-28">
                                <h1 className="text-lg font-semibold text-center tracking-widest text-white">20 VACATIONS</h1>
                                <p className="mt-2 text-6xl text-center text-white">
                                    Safari Camps
                                </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    );
}
