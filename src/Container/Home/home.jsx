import { useState } from 'react'
import React from 'react'
import { ChevronDown, Copy, ArrowUpRight, MoveLeft, MoveRight } from 'lucide-react'
import { motion } from 'framer-motion';
import Feature from '../Feature_Properties/feature'
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const slides = [
  { image: 'https://assets-global.website-files.com/6583d18e043fa866285fce1c/65e9c76b548876efb6590467_Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Luxury%20%20(1).jpg' },
  { image: 'https://assets-global.website-files.com/6583d18e043fa866285fce1c/65e9cbbb29280e17bb03a1a6_Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Luxury%20%20(3)%20(1).jpg' },
  { image: 'https://assets-global.website-files.com/6583d18e043fa866285fce1c/65e9cca62e0c8a323cd03ec6_Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Luxury%20%20(4)%20(1).jpg' },
  { image: 'https://assets-global.website-files.com/6583d18e043fa866285fce1c/65e9c707891fce2e5fa324da_Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Luxury%20%20(2)%20(1).jpg' },
  { image: 'https://assets-global.website-files.com/6583d18e043fa866285fce1c/65e9c697f9e2f1b6ccf71e78_Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Luxury%20%20(1).jpg' },
  { image: 'https://assets-global.website-files.com/6583d18e043fa866285fce1c/65e9c76b548876efb6590467_Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Luxury%20%20(1).jpg' },
  { image: 'https://assets-global.website-files.com/6583d18e043fa866285fce1c/65e9cbbb29280e17bb03a1a6_Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Luxury%20%20(3)%20(1).jpg' },
  { image: 'https://assets-global.website-files.com/6583d18e043fa866285fce1c/65e9cca62e0c8a323cd03ec6_Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Luxury%20%20(4)%20(1).jpg' },
  { image: 'https://assets-global.website-files.com/6583d18e043fa866285fce1c/65e9c707891fce2e5fa324da_Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Luxury%20%20(2)%20(1).jpg' },
  { image: 'https://assets-global.website-files.com/6583d18e043fa866285fce1c/65e9c697f9e2f1b6ccf71e78_Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Copy%20of%20Luxury%20%20(1).jpg' },
];

export default function home() {

  const [travel, setTravel] = useState(false);
  const [realEstate, setRealEstate] = React.useState(false);
  const [concierge, setConcierge] = React.useState(false);
  const [safari, setSafari] = React.useState(true);

  const travelfn = () => {
    setTravel(true)
    setSafari(false)
    setConcierge(false)
    setRealEstate(false)
  }

  const safarifn = () => {
    setTravel(false)
    setSafari(true)
    setConcierge(false)
    setRealEstate(false)
  }

  const conciergefn = () => {
    setTravel(false)
    setSafari(false)
    setConcierge(true)
    setRealEstate(false)
  }

  const realEstatefn = () => {
    setTravel(false)
    setSafari(false)
    setConcierge(false)
    setRealEstate(true)
  }

  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides, ...slides, ...slides]

  return (
    <>
      <section>
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
                    <h1 className="text-xl font-semibold tracking-widest">Borana Lodge, Safari Lodges</h1>
                    <p className="mt-3 text-sm tracking-widest">LAIKIPIA COUNTY</p>
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
                  <h1 className="text-xl font-semibold tracking-widest">Elsa's Kopje,</h1>
                    <p className="mt-3 text-sm tracking-widest">NAIROKI COUNTY</p>
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
                  <h1 className="text-xl font-semibold tracking-widest">Angama Mara, Safari Lodges</h1>
                    <p className="mt-3 text-sm tracking-widest">NAROK COUNTY</p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>

        </Swiper>
      </section>

      <section>
        <div className="mx-auto max-w-7xl p-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center mb-5">
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Featured Properties
            </h2>
          </div>
        </div>
        <Feature />
      </section>

      <section>
        <div className='p-10 lg:p-20 bg-[#F7F8FC]'>

          <div className="lg:flex lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
              <div className="lg:my-0 lg:px-10">
                <p className="my-4 tracking-widest max-w-xl text-base leading-relaxed text-gray-600">
                  OPULENCE OASIS BENEFITS
                </p>

                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  What we do
                </h2>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                  Your gateway to luxury real estate and travel in Kenya's most sought-after destinations.
                </p>

                <button
                  type="button"
                  className="inline-flex items-center tracking-wider w-[280px] h-14 rounded-md bg-[#32727A] mt-10 text-base font-semibold text-white hover:bg-[#081C3A]"
                >
                  <p className="mx-auto flex items-center">
                    CHOOSE A DESTINATION
                    <ChevronDown className="ml-2 h-4 w-4" />

                  </p>
                </button>


              </div>
            </div>

            <div className="w-full lg:w-1/2 pt-8 lg:p-10 ">
              <img
                src="./test2.jpeg"
                alt="ManWith Laptop"
                className="h-full w-full rounded-md"
              />
            </div>
          </div>

          <div className="container">
            <p className="my-4 text-sm leading-relaxed text-gray-800">
              WHY WE'RE DIFFERENT <hr />
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:mt-12 xl:grid-cols-3">

              <div className="p-8 bg-white rounded-lg space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105">
                <span className="inline-block w-[60px] h-[60px] rounded-full bg-gray-100 p-5 text-black">
                  <img src="https://assets-global.website-files.com/6583d18e043fa866285fce1c/6583d18e043fa866285fcef1_Passport.svg" alt="" />
                </span>
                <h1 className="pt-5 text-xl font-semibold capitalize text-black">Concierge</h1>
                <p className="text-basic text-gray-500">
                  We offer an exquistite range of experiences, ensuring every moment of your journey is nothing short of extraordinary
                </p>
              </div>

              <div className="p-8 bg-white rounded-lg space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105">
                <span className="inline-block w-[60px] h-[60px] rounded-full bg-gray-100 p-5 text-black">
                  <img src="https://assets-global.website-files.com/6583d18e043fa866285fce1c/6583d18e043fa866285fcee1_Deals.svg" />
                </span>
                <h1 className="pt-5 text-xl font-semibold capitalize text-black">Real Estate</h1>
                <p className="text-basic text-gray-500">
                  An exclusive collection of Kenaya's most prestigious properties available for rent & sale offering comfort
                </p>
              </div>

              <div className="p-8 bg-white rounded-lg space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105">
                <span className="inline-block w-[60px] h-[60px] rounded-full bg-gray-100 p-5 text-black">
                  <img src="https://assets-global.website-files.com/6583d18e043fa866285fce1c/6583d18e043fa866285fcf06_Case.svg" />
                </span>
                <h1 className="pt-5 text-xl font-semibold capitalize text-black">Travel</h1>
                <p className="text-basic text-gray-500">
                  Meticulous collection of Africa's most exclusive boutique hotels, safari lodes & camps & holiday homes
                </p>
              </div>
            </div>

            <p className="my-10 text-sm leading-relaxed text-gray-800">
              POPULAR OPULENCE GASIS VACATIONS <hr />
            </p>
          </div>


        </div>
      </section>

      <section>

        <div className="bg-white mx-auto -mt-20 max-w-6xl sm:px-6 p-8">

          <div className="flex justify-between h-14">
            <p className="mx-auto btn cursor-pointer" onClick={travelfn}>TRAVEL</p>
            <p className="mx-auto btn cursor-pointer" onClick={realEstatefn}>REAL ESTATE</p>
            <p className="mx-auto btn cursor-pointer" onClick={conciergefn}>CONCIERGE</p>
            <p className="mx-auto btn cursor-pointer" onClick={safarifn}>SAFARI CAMPS</p>
          </div>

          <hr className='p-5' />

          {travel ?
            <div className="grid grid-cols-3">

              <div className="rounded-md">
                <div className="w-[300px] rounded-md border">
                  <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-cover"
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                      TRAVEL &nbsp;
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                    </p>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-md"></div>
              <div className="rounded-md"></div>
            </div>
            : null}

          {realEstate ?
            <div className="grid grid-cols-3">

              <div className="rounded-md">
                <div className="w-[300px] rounded-md border">
                  <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-cover"
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                      REAL ESTATE &nbsp;
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                    </p>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-md"></div>
              <div className="rounded-md"></div>
            </div>
            : null}

          {concierge ?
            <div className="grid grid-cols-3">

              <div className="rounded-md">
                <div className="w-[300px] rounded-md border">
                  <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-cover"
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                      CONCIERGE &nbsp;
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                    </p>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-md"></div>
              <div className="rounded-md"></div>
            </div>
            : null}

          {safari ?
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">

              <div className="rounded-2xl p-4 border-2 mx-auto transition duration-500 ease-in-out hover:shadow-xl hover:scale-105">
                <div className="w-[300px]">
                  <img
                    src="./chair.jpg"
                    alt=""
                    className="h-[200px] w-full rounded-2xl object-cover "
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-xl font-semibold">
                      The Sanctuary At Ol Lentille &nbsp;
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      One of Kenya's most exclusive lodge's. Nestled within a private conservancy, the lodge offers a unique blend of luxury, privacy, and sustainability. Pack your bags, embrace the local culture, and immerse yourself in the enchanting and relaxing era.
                    </p>
                    <hr className='my-5' />
                    <button
                      type="button"
                      className="w-full border-2  rounded-md mx-auto px-2 py-1.5 text-sm font-base text-black hover:shadow-lg transition duration-500 hover:bg-[#081C3A] hover:text-white">
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-4 border-2 mx-auto transition duration-500 ease-in-out hover:shadow-xl hover:scale-105">
                <div className="w-[300px]">
                  <img
                    src="./mountain.jpg"
                    alt=""
                    className="h-[200px] w-full rounded-2xl object-cover"
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-xl font-semibold">
                      The Sanctuary At Ol Lentille &nbsp;
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      One of Kenya's most exclusive lodge's. Nestled within a private conservancy, the lodge offers a unique blend of luxury, privacy, and sustainability. Pack your bags, embrace the local culture, and immerse yourself in the enchanting and relaxing era.
                    </p>
                    <hr className='my-5' />
                    <button
                      type="button"
                      className="w-full border-2  rounded-md mx-auto px-2 py-1.5 text-sm font-base text-black hover:shadow-lg transition duration-500 hover:bg-[#081C3A] hover:text-white">
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-4 border-2 mx-auto transition duration-500 ease-in-out hover:shadow-xl hover:scale-105">
                <div className="w-[300px]">
                  <img
                    src="zebra.jpg"
                    alt=""
                    className="h-[200px] w-full rounded-2xl object-cover"
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-xl font-semibold">
                      The Sanctuary At Ol Lentille &nbsp;
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      One of Kenya's most exclusive lodge's. Nestled within a private conservancy, the lodge offers a unique blend of luxury, privacy, and sustainability. Pack your bags, embrace the local culture, and immerse yourself in the enchanting and relaxing era.
                    </p>
                    <hr className='my-5' />
                    <button
                      type="button"
                      className="w-full border-2  rounded-md mx-auto px-2 py-1.5 text-sm font-base text-black hover:shadow-lg transition duration-500 hover:bg-[#081C3A] hover:text-white">
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>

            </div>
            : null}

        </div>


      </section>

      <section>
        <div className="p-16 bg-[#081C3A] text-center">
          <h2 className="text-sm py-3 font-base tracking-widest text-white">
            OUR PARTNERS
          </h2>
          <h2 className="text-3xl max-w-3xl mx-auto font-bold tracking-wider py-4 text-white xl:text-6xl">
            A network of carefully selected partners, each a master in thier respective fields.
          </h2>
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-md px-8 py-4 bg-white text-sm text-black shadow transition duration-500 hover:scale-105 sm:mx-2 sm:w-auto"
            >
              <span className="mx-2 tracking-wider">CONTACT US</span>
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-md px-8 py-4 bg-inherit text-sm text-white border shadow transition duration-500 hover:scale-105 sm:mx-2 sm:w-auto"
            >
              <span className="mx-2 tracking-wider">HOW IT WORKS</span>
            </a>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Wrapping div for seamless looping */}
          <motion.div
            className="flex"
            animate={{
              x: ['0%', '-100%'],
              transition: {
                ease: 'linear',
                duration: 13,
                repeat: Infinity,
              }
            }}
          >
            {/* Render duplicated slides */}
            {duplicatedSlides.map((slide, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="flex flex-col items-center justify-center h-[341px] w-[341px]">
                  <div className="relative h-[341px] w-[341px] rounded-md">
                    <img src={slide.image} alt={`Slide ${index + 1}`} className="max-h-full" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className='sm:flex'>
        <div className='p-10 lg:p-20'>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="mx-auto max-w-lg h-max bg-[#F7F8FC]" style={{ position: "sticky", top: "70px" }}>
              <div className="rounded-2xl w-full p-7 border-2">
                <img
                  src="./balloon1.jpg"
                  alt="Air Ballon"
                  className="rounded-2xl object-cover "
                />
                <div className="p-4">
                  <h1 className='tracking-widest text-sm py-4'>
                    GET STARTED TODAY
                  </h1>
                  <h1 className="inline-flex text-4xl font-semibold py-2">
                    We make dreams into reality on a daily basis &nbsp;
                  </h1>
                  <p className="my-3 text-xl text-gray-600">
                    We're passionate about what we do, we know our priorities inside and out and provide unparalleled expertise in pairing guests with their ideal safari destination or holiday home.
                  </p>
                  <button
                    type="button"
                    className="w-1/2 mt-5 border-2 rounded-md px-2 py-4 text-sm font-base text-white bg-[#32727A] transition ease-in-out duration-500 hover:scale-105 hover:bg-[#081C3A] ">
                    CONTACT US TODAY
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="py-4 text-sm leading-relaxed text-gray-800">
                WE ARE OPULENCE OASIS <hr />
              </p>
              <div className="w-full h-max p-8 lg:px-10  lg:py-0 border-l-2">
                <div className="p-8 m-2 my-8 bg-white rounded-md space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <h1 className="py-3 text-2xl font-semibold capitalize text-gray-700">Masters of Luxury travel & living</h1>
                  <p className="text-lg text-gray-500">
                    Based in Nairobi Kenya, we are a distinguished purveyor of unparalleled luxury, offering a harmonious blend of exquisite travel experiences, bespoke concierge services, and exclusive real estate opportunity in Africa.
                  </p>
                </div>
                <div className="p-8 m-2 my-8 bg-white rounded-lg space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <h1 className="py-3 text-2xl font-semibold capitalize text-gray-700">Redefining luxury</h1>
                  <p className="text-lg text-gray-500">
                    We believe that luxury is not just a material possession or an extravagant experience; it's a state of mind, a way of life. Our philosophy is centered around creating extraordinary experiences that transcend the boundaries of traditional luxury.
                  </p>
                </div>
                <div className="p-8 m-2 my-8 bg-white rounded-lg space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <h1 className="py-3 text-2xl font-semibold capitalize text-gray-700">Dedicated to excellence</h1>
                  <p className="text-lg text-gray-500">
                    Whether it’s a captivating safari expedition or a lavish beach escape, our meticulous attention to detail ensures that every moment is steeped in luxury and wonder. In addition to our travel and concierge offerings, Opulence Oasis sets the stage for redefined living through our exclusive real estate services in Kenya. Our portfolio of luxury properties showcases the epitome of elegance and sophistication, presenting a rare opportunity to own a piece of Africa’s most coveted destinations.
                  </p>
                </div>
                <div className="p-8 m-2 my-8 bg-white rounded-lg space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <h1 className="py-3 text-2xl font-semibold capitalize text-gray-700">Innovation</h1>
                  <p className="text-lg text-gray-500">
                    We’re here to elevate your travel and lifestyle aspirations in Africa, transcending expectations and crafting unforgettable moments that linger in the heart and mind. We invite you to embark on a journey with us, where every detail is meticulously tailored to reflect your unique desires and redefine luxury in its purest form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex max-w-7xl mx-auto gap-10 flex-col md:flex-row p-5">
          <div className="lg:mb-28 mb-7 max-w-7xl lg:ms-28 ">
            <img src="./balloon2.jpeg" alt="Ballon" className="h-[90vh] w-full rounded-md object-cover items-center mx-auto" />
            <div className='absolute bg-white -mt-44 rounded-xl lg:max-w-md max-w-sm md:p-5 p-3 ms-6 lg:ms-12 shadow-lg'>
              <h1 className='text-black md:text-3xl text-2xl text-center font-bold subpixel-antialiased md:p-4 pt-2'>Hot Air Ballon Services</h1>
              <p className='text-slate-500 md:text-xl text-md p-5'>A unique and exhilarating experience. With highly trained pilots and expert guides, Opulence Oasis ensures a safe and unforgettable journey.</p>
              <button className='border-2 text-xs tracking-widest rounded-md ms-3 mt-0 p-2'>READ MORE</button>
            </div>
          </div>

          <div className="p-2 md:max-w-md  w-full">
            <p className='tracking-widest text-gray-700 font-semibold'>Experience <hr /></p>

            <div className="h-max md:m-7 md:mb-3 m-5 ms-0 w-full inline-flex rounded-md border md:flex-row hover:shadow-lg transition ease-in-out duration-700 hover:scale-105">
              <div className="lg:h-[100px] lg:w-[124px] h-[110px] w-[124px]">
                <img
                  src="night.png"
                  alt="Game"
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div>
                <div className="p-4">
                  <h1 className="inline-flex text-lg font-semibold ">
                    Night Life & Events
                  </h1>
                </div>
              </div>
            </div>

            <div className="h-max md:m-7 md:my-3 m-5 ms-0 mt-0 w-full inline-flex rounded-md border md:flex-row hover:shadow-lg transition ease-in-out duration-700 hover:scale-105">
              <div className="lg:h-[100px] lg:w-[124px] h-[110px] w-[124px]">
                <img
                  src="fine.png"
                  alt="Game"
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div>
                <div className="p-4">
                  <h1 className="inline-flex text-lg font-semibold ">
                    Fine Dining
                  </h1>
                </div>
              </div>
            </div>

            <div className="h-max md:m-7 md:my-3 m-5 ms-0 mt-0 w-full inline-flex rounded-md border md:flex-row hover:shadow-lg transition ease-in-out duration-700 hover:scale-105">
              <div className="lg:h-[100px] lg:w-[124px] h-[110px] w-[124px]">
                <img
                  src="car.png"
                  alt="Game"
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div>
                <div className="p-4">
                  <h1 className="inline-flex text-lg font-semibold ">
                    Limousines
                  </h1>
                </div>
              </div>
            </div>

            <div className="h-max md:m-7 md:my-3 m-5 ms-0 mt-0 w-full inline-flex rounded-md border md:flex-row hover:shadow-lg transition ease-in-out duration-700 hover:scale-105">
              <div className="lg:h-[100px] lg:w-[124px] h-[110px] w-[124px]">
                <img
                  src="game.png"
                  alt="Game"
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div>
                <div className="p-4">
                  <h1 className="inline-flex text-lg font-semibold ">
                    Game Drives
                  </h1>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

    </>
  )
}
