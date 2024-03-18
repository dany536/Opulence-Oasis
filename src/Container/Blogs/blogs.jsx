import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './style.css';

// import required modules
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

export default function blogs() {
  return (
    <>
    <div className="container">
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
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="./holiday_slide2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./real_slide2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./boutique_slide2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./holiday_slide2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./real_slide2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./boutique_slide2.jpg" />
        </SwiperSlide>
      </Swiper>      
    </div>

    </>
  );
}
