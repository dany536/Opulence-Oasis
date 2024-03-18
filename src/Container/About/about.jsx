import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoveLeft, MoveRight } from 'lucide-react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


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
        className="mySwiper h-[90vh] bg-slate-500"
      >
        <SwiperSlide >
          <Link to="/about">
            <img className="object-fill" src='./d1.png' />
            <div className="cursor-pointer absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 right-0">
              <p className="tracking-widest text-white text-sm p-4 ms-10">POPULAR LOCATION <hr /></p>
              <div className="flex flex-row gap-2">
              <div className="bg-white rounded-lg rounded-b-none rounded-e-none">
                <p className='p-5'> <MoveRight /></p><hr />
                <p className='p-5'> <MoveLeft /></p>
              </div>
              <div className="p-10 pb-12 bg-white mx-auto w-[450px] text-black">
                <h1 className="text-sm font-semibold tracking-widest">8 VACATIONS</h1>
                <p className="mt-2 text-xl ">Holiday Homes</p>
              </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide >
          <Link to="/about">
            <img className="object-fill" src='./d2.png' />
            <div className="cursor-pointer absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 right-0">
              <p className="tracking-widest text-white text-sm p-4 ms-10">POPULAR LOCATION <hr /></p>
              <div className="flex flex-row gap-2">
              <div className="bg-white rounded-lg rounded-b-none rounded-e-none">
                <p className='p-5'> <MoveRight /></p><hr />
                <p className='p-5'> <MoveLeft /></p>
              </div>
              <div className="p-10 pb-12 bg-white mx-auto w-[450px] text-black">
                <h1 className="text-sm font-semibold tracking-widest">8 VACATIONS</h1>
                <p className="mt-2 text-xl ">Holiday Homes</p>
              </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide >
          <Link to="/about">
            <img className="object-fill" src='./d3.png' />
            <div className="cursor-pointer absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 right-0">
              <p className="tracking-widest text-white text-sm p-4 ms-10">POPULAR LOCATION <hr /></p>
              <div className="flex flex-row gap-2">
              <div className="bg-white rounded-lg rounded-b-none rounded-e-none">
                <p className='p-5'> <MoveRight /></p><hr />
                <p className='p-5'> <MoveLeft /></p>
              </div>
              <div className="p-10 pb-12 bg-white mx-auto w-[450px] text-black">
                <h1 className="text-sm font-semibold tracking-widest">8 VACATIONS</h1>
                <p className="mt-2 text-xl ">Holiday Homes</p>
              </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>

      </Swiper>

    </div>
  )
}

export default about