import { useState } from 'react'
import React from 'react'
import { ChevronDown, Copy, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion';
import Safari from '../../assets/test.png'

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

      <div className="relative w-full bg-white mb-10">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <svg
              width="30"
              height="36"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                fill="black"
              />
            </svg>
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">We&apos; hiring</p>
              </div>
              <p className="text-sm font-medium">Join our team &rarr;</p>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              People who care about your growth
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi blanditiis
              dolores quasi eaque explicabo!
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <input
                  className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                ></input>
                <p className="mt-2 text-sm text-gray-500">We care about your privacy</p>
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center mb-20">
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Featured Properties
            </h2>
          </div>

        </div>
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
                src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
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
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
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
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
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
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
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

      <section>
        <div className='p-10 lg:p-20 bg-[#F7F8FC]'>

          <div className="grid lg:grid-cols-2 lg:items-center">

            <div className="rounded-2xl p-7 border-2 mx-auto max-w-xl">
              <div className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  alt="Laptop"
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

            {/* <div className="w-full lg:w-1/2">
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
            </div> */}

            <div className="w-full pt-8 lg:p-10 ">
              <img
                src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="ManWith Laptop"
                className="h-full w-full rounded-md"
              />
            </div>
          </div>

        </div>
      </section>

    </>
  )
}
