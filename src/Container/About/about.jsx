import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';


function about() {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='h-screen w-full' ><img src='./d1.png' /></SwiperSlide>
        <SwiperSlide ><img src='./d2.png' /></SwiperSlide>
        <SwiperSlide ><img src='./d3.png' /></SwiperSlide>
      </Swiper>

    </div>
  )
}

export default about