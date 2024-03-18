import React, { useRef, useState } from 'react';

function about() {
  return (
    <>
      <section>
        <div className='bg-gray-500'>
          <img className="h-[89vh] w-full" src="about.jpeg" alt="" srcset="" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-1/3 w-full ">
            <h1 className="text-5xl text-center tracking-wider font-bold text-white">We Are Opulence Oasis Co</h1>
          </div>
        </div>
      </section>

      <section>
        <div className='p-10 max-w-6xl mx-auto'>
          <p className="py-10 text-center tracking-widest text-base leading-relaxed text-gray-600">
            THE FUTURE OF LIVING
          </p>

          <div className="lg:flex lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
              <div className="lg:my-0 lg:px-10">

                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Creating extraordinary experiences that transcend the boundaries of traditional luxury.
                </h2>

                <p className="pt-8 max-w-xl text-lg leading-relaxed text-gray-600">
                  True opulence lies in material possessions and the intangible moments of joy, wonder, and connection. We invite you to embark on a journey of indulgence, exploration, and discovery with Opulence Oasis, where luxury knows no limits.
                </p>

                <button
                  type="button"
                  className="px-8 inline-flex items-center tracking-wider h-14 rounded-md bg-[#32727A] mt-10 text-base font-semibold text-white hover:bg-[#081C3A]"
                >
                  <p className="mx-auto flex items-center">
                    CONTACT US
                  </p>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 pt-8 lg:p-10 ">
              <img
                src="./opulence.jpeg"
                alt="ManWith Laptop"
                className="h-full w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#F7F8FC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full text-center md:max-w-2xl">
            <p className="text-center tracking-widest text-base leading-relaxed text-gray-600">
              THE FUTURE OF LIVING
            </p>
            <h2 className="py-5 text-3xl font-bold leading-snug text-black sm:text-4xl lg:text-5xl">
              Luxury Living Redefined
            </h2>
            <p className="mx-auto mt-4 text-xl leading-relaxed text-gray-600">
              Our deep commitment to preserving the natural beauty ofKenya and minimizing our ecological footprint is why we have sustainable practices in all aspects of our operations, ensuring that futuregenerations can continue to enjoy Kenya.
            </p>
          </div>

          <img className="pt-4" src="./about-gallery.jpeg" alt="" srcset="" />
        </div>
      </section>

      <section>
        <div className="bg-[#081C3A] mb-96">
          <div className="p-16 max-w-6xl mx-auto text-center">
            <h2 className="text-sm py-3 font-base tracking-widest text-white">
              OUR JOURNEY
            </h2>
            <h2 className="text-3xl max-w-3xl mx-auto font-bold tracking-wider py-4 text-white xl:text-6xl">
              Innovation, Excellence, Sustainability
            </h2>
            <p className="mx-auto my-4 text-xl leading-relaxed text-white">
              Our deep commitment to preserving the natural beauty ofKenya and minimizing our ecological footprint is why we have sustainable practices in all aspects of our operations, ensuring that futuregenerations can continue to enjoy Kenya.
            </p>
          </div>
          
          <div className='absolute bg-white -mt-10 rounded-xl max-w-6xl p-1 ms-6 lg:ms-20 shadow-lg'>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 max-w-6xl mx-auto">

              <div className="rounded-2xl bg-white h-max p-4 border mx-auto transition duration-500 ease-in-out hover:shadow-xl hover:scale-105">
                <div className="">
                  <img
                    src="./kevin.png"
                    alt=""
                    className="h-full rounded-2xl object-cover "
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-xl font-semibold">
                      Kevin Sylk &nbsp;
                    </h1>
                    <h1 className="inline-flex text-md font-semibold text-gray-500">
                      Nairobi, Kenya &nbsp;
                    </h1>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white h-max p-4 border mx-auto transition duration-500 ease-in-out hover:shadow-xl hover:scale-105">
                <div className="">
                  <img
                    src="./graca.jpeg"
                    alt=""
                    className="h-64 w-full rounded-2xl object-cover "
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-xl font-semibold">
                      Graca Keboi &nbsp;
                    </h1>
                    <h1 className="inline-flex text-md font-semibold text-gray-500">
                      Brazil &nbsp;
                    </h1>
                  </div>
                </div>
              </div>
       
              <div className="rounded-2xl bg-white h-max p-4 border mx-auto transition duration-500 ease-in-out hover:shadow-xl hover:scale-105">
                <div className="">
                  <img
                    src="./samantha.jpeg"
                    alt=""
                    className="h-64 w-full rounded-2xl object-cover "
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-xl font-semibold">
                      Samantha Tai &nbsp;
                    </h1>
                    <h1 className="inline-flex text-md font-semibold text-gray-500">
                      Miami, Florida &nbsp;
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


    </>
  )
}

export default about