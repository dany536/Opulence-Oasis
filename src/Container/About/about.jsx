import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


function about() {
  return (
    <div>
      <h1 className="text-center text-3xl underline p-4">About Us</h1>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='text-center h-screen items-center'>Slide 1</SwiperSlide>
        <SwiperSlide className='text-center h-screen items-center'>Slide 2</SwiperSlide>
        <SwiperSlide className='text-center h-screen items-center'>Slide 3</SwiperSlide>
        <SwiperSlide className='text-center h-screen items-center'>Slide 4</SwiperSlide>
      </Swiper>

    </div>
  )
}

export default about