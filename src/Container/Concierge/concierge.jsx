import React from 'react'
import { ChevronRight } from 'lucide-react';

function concierge() {
  return (
    <>
      <section>
        <div className=''>
          <img className="w-full" src="concierge.jpeg" />
          <div className="absolute h-[125vh] inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
          <div className="absolute bottom-1/3 w-full ">
            <h1 className="text-5xl text-center max-w-4xl mx-auto tracking-wider font-semibold text-white">A unique collection of concierge services</h1>
          </div>
        </div>
      </section>

      <section>

        <div className="flex max-w-7xl mx-auto gap-10 flex-col md:flex-row p-5 py-10 lg:py-20">
          <div className="lg:mb-20 max-w-7xl lg:ms-28 ">
            <img src="./balloon2.jpeg" alt="Ballon" className="h-[90vh] w-full rounded-md object-cover items-center mx-auto" />
            <div className='absolute bg-white -mt-44 rounded-xl max-w-md p-5 ms-6 pb-8 lg:ms-12 shadow-lg'>
              <h1 className='text-black text-3xl text-center font-bold subpixel-antialiased p-4'>Hot Air Ballon Services</h1>
              <p className='text-slate-500 text-md p-5'>A unique and exhilarating experience. With highly trained pilots and expert guides, Opulence Oasis ensures a safe and unforgettable journey.</p>
              <a href="#" className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm text-black border transition duration-500 hover:bg-[#191c5e] hover:text-white sm:mx-2 sm:w-auto">
                <span className="tracking-wider">READ MORE</span>
              </a>
            </div>
          </div>

          <div className="p-2 max-w-md w-full">
            <p className='tracking-widest text-gray-700 font-semibold'>CONCIERGE <hr /></p>
            <div className="flex  h-max m-7 w-full flex-col rounded-md border md:flex-row hover:shadow-lg transition ease-in-out duration-700 hover:scale-105">
              <div className="h-full w-full md:h-[100px] md:w-[124px] p-1">
                <img
                  src="./night.png"
                  alt="Night life"
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
            <div className="flex  h-max m-7 w-full flex-col rounded-md border md:flex-row hover:shadow-lg transition ease-in-out duration-700 hover:scale-105">
              <div className="h-full w-full md:h-[100px] md:w-[124px] p-1">
                <img
                  src="fine.png"
                  alt="Fine Dining"
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
            <div className="flex  h-max m-7 w-full flex-col rounded-md border md:flex-row hover:shadow-lg transition ease-in-out duration-700 hover:scale-105">
              <div className="h-full w-full md:h-[100px] md:w-[124px] p-1">
                <img
                  src="car.png"
                  alt="Car"
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
            <div className="flex  h-max m-7 w-full flex-col rounded-md border md:flex-row hover:shadow-lg transition ease-in-out duration-700 hover:scale-105">
              <div className="h-full w-full md:h-[100px] md:w-[124px]">
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

      <section>
        <div className="p-16 bg-[#F7F8FC]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm py-3 font-base tracking-widest text-black">
              RECENT POSTS
            </h2>
            <h2 className="text-md font-bold py-4 text-[#171a53] xl:text-6xl">
              Browse our journal
            </h2>
            <div className="mt-6 p-5">

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                <div className="bg-white rounded-lg border-2 transition duration-500 ease-in-out hover:shadow-xl hover:scale-95">
                  <div className="w-full">
                    <img
                      src="./night-life.png"
                      alt=""
                      className="w-full rounded-lg rounded-b-none object-cover "
                    />
                    <div className='absolute bg-[#F7F8FC] -mt-4 rounded-md max-w-md ms-6  lg:ms-10 shadow-md'>
                      <h1 className='text-black text-xs text-center tracking-widest p-2 px-4'>FEBRUARY 21, 2024</h1>
                    </div>

                    <div className="p-7">
                      <h1 className="pt-4 inline-flex items-center text-xl font-semibold">
                        Night Life & Events &nbsp;
                      </h1>
                      <p className="py-5 text-sm text-gray-600">
                        Exclusive clubs, VIP treatment at trendy bars, and personalized recommendations for the best nightlife spots in town. Let us elevate your evening to new heights.
                      </p>
                      <button
                        type="button"
                        className="w-auto border-2 rounded-sm px-6 py-2 text-sm font-base text-black transition duration-500 hover:bg-[#081C3A] hover:text-white">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border-2 transition duration-500 ease-in-out hover:shadow-xl hover:scale-95">
                  <div className="w-full">
                    <img
                      src="./fine-dine.png"
                      alt=""
                      className="w-full rounded-lg rounded-b-none object-cover "
                    />
                    <div className='absolute bg-[#F7F8FC] -mt-4 rounded-md max-w-md ms-6  lg:ms-10 shadow-md'>
                      <h1 className='text-black text-xs text-center tracking-widest p-2 px-4'>FEBRUARY 2, 2024</h1>
                    </div>
                    <div className="p-7">
                      <h1 className="pt-4 inline-flex items-center text-xl font-semibold">
                        Fine Dining &nbsp;
                      </h1>
                      <p className="py-5 text-sm text-gray-600">
                        Welcome to gastronomic opulence. Indulge in an array of delectable dishes crafted by world-class chefs using the finest ingredients sourced locally and globally.
                      </p>
                      <button
                        type="button"
                        className="w-auto border-2 rounded-sm px-6 py-2 text-sm font-base text-black transition duration-500 hover:bg-[#081C3A] hover:text-white">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border-2 transition duration-500 ease-in-out hover:shadow-xl hover:scale-95">
                  <div className="w-full">
                    <img
                      src="./limousines.png"
                      alt=""
                      className="w-full rounded-lg rounded-b-none object-cover "
                    />
                    <div className='absolute bg-[#F7F8FC] -mt-4 rounded-md max-w-md ms-6  lg:ms-10 shadow-md'>
                      <h1 className='text-black text-xs text-center tracking-widest p-2 px-4'>FEBRUARY 2, 2024</h1>
                    </div>
                    <div className="p-7">
                      <h1 className="pt-4 inline-flex items-center text-xl font-semibold">
                        Limousines &nbsp;
                      </h1>
                      <p className="py-5 text-sm text-gray-600">
                        Whether it's airport transfers, city tours, or special events, our fleet of luxurious limousines is at your disposal, driven by professional chauffeurs who prioritize your safety and satisfaction.
                      </p>
                      <button
                        type="button"
                        className="w-auto border-2 rounded-sm px-6 py-2 text-sm font-base text-black transition duration-500 hover:bg-[#081C3A] hover:text-white">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border-2 transition duration-500 ease-in-out hover:shadow-xl hover:scale-95">
                  <div className="w-full">
                    <img
                      src="./game-drives.png"
                      alt=""
                      className="w-full rounded-lg rounded-b-none object-cover "
                    />
                    <div className='absolute bg-[#F7F8FC] -mt-4 rounded-md max-w-md ms-6  lg:ms-10 shadow-md'>
                      <h1 className='text-black text-xs text-center tracking-widest p-2 px-4'>FEBRUARY 2, 2024</h1>
                    </div>
                    <div className="p-7">
                      <h1 className="pt-4 inline-flex items-center text-xl font-semibold">
                        Game Drives &nbsp;
                      </h1>
                      <p className="py-5 text-sm text-gray-600">
                        Exclusive. Unforgettable. Bespoke. Our Helicopter Safaris are designed to create unforgettable memories while ensuring utmost comfort and security.
                      </p>
                      <button
                        type="button"
                        className="w-auto border-2 rounded-sm px-6 py-2 text-sm font-base text-black transition duration-500 hover:bg-[#081C3A] hover:text-white">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border-2 transition duration-500 ease-in-out hover:shadow-xl hover:scale-95">
                  <div className="w-full">
                    <img
                      src="./helicopter-safaris.png"
                      alt=""
                      className="w-full rounded-lg rounded-b-none object-cover "
                    />
                    <div className='absolute bg-[#F7F8FC] -mt-4 rounded-md max-w-md ms-6  lg:ms-10 shadow-md'>
                      <h1 className='text-black text-xs text-center tracking-widest p-2 px-4'>FEBRUARY 2, 2024</h1>
                    </div>
                    <div className="p-7">
                      <h1 className="pt-4 inline-flex items-center text-xl font-semibold">
                        Helicopter Safaris &nbsp;
                      </h1>
                      <p className="py-5 text-sm text-gray-600">
                        Exclusive. Unforgettable. Bespoke. Our Helicopter Safaris are designed to create unforgettable memories while ensuring utmost comfort and security.
                      </p>
                      <button
                        type="button"
                        className="w-auto border-2 rounded-sm px-6 py-2 text-sm font-base text-black transition duration-500 hover:bg-[#081C3A] hover:text-white">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border-2 transition duration-500 ease-in-out hover:shadow-xl hover:scale-95">
                  <div className="w-full">
                    <img
                      src="./chartered-flights.png"
                      alt=""
                      className="w-full rounded-lg rounded-b-none object-cover "
                    />
                    <div className='absolute bg-[#F7F8FC] -mt-4 rounded-md max-w-md ms-6  lg:ms-10 shadow-md'>
                      <h1 className='text-black text-xs text-center tracking-widest p-2 px-4'>FEBRUARY 2, 2024</h1>
                    </div>
                    <div className="p-7">
                      <h1 className="pt-4 inline-flex items-center text-xl font-semibold">
                        Chartered Flights &nbsp;
                      </h1>
                      <p className="py-5 text-sm text-gray-600">
                        We have an exclusive network of private aircraft and partnerships with top aviation providers. This is unparalleled luxury in the skies.
                      </p>
                      <button
                        type="button"
                        className="w-auto border-2 rounded-sm px-6 py-2 text-sm font-base text-black transition duration-500 hover:bg-[#081C3A] hover:text-white">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              <div className="p-10 w-full max-w-6xl text-center">

                <button
                  type="button"
                  className="w-auto border-2 inline-flex bg-[#32727A] rounded-md px-8 py-3 text-md font-base text-white transition duration-500 hover:bg-[#081C3A] hover:text-white">
                  NEXT <ChevronRight />
                </button>

              </div>


            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-16 bg-[#163057ec] text-center lg:py-40">
          <h2 className="text-sm py-3 font-base tracking-widest text-white">
            OPULENCE OASIS PROMISE
          </h2>
          <h2 className="text-lg max-w-5xl mx-auto font-semibold tracking-wider py-4 text-white xl:text-6xl">
            Get unparalleled peace of mind from start to finish of your trip
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
              <span className="mx-2 tracking-wider">LEARN ABOUT US</span>
            </a>
          </div>
        </div>

      </section>

    </>
  )
}

export default concierge