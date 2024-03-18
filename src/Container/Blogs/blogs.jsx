import React from 'react'

function blogs() {
  return (
    <>
      <section>
        <div className=''>
          <img className="w-full" src="blog1.jpg" />
          <div className="absolute h-[118vh] inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
          <div className="absolute bottom-1/3 w-full ">
            <h1 className="text-5xl text-center max-w-2xl mx-auto tracking-wider font-bold text-white">Find inspiration for your next location</h1>
          </div>
        </div>
      </section>

      <section>
        <div className='p-10 lg:p-20'>
          <div className="grid lg:grid-cols-2 gap-1">
            
            <div className="mx-auto max-w-lg h-max" style={{ position: "sticky", top: "70px" }}>
              <div className=" w-full">
                
                <div className="">
                  
                  <h1 className="inline-flex text-4xl font-semibold py-2">
                  Find inspiration for your next location&nbsp;
                  </h1>
                  <p className="my-3 text-xl text-gray-600">
                  Proin euismod, urna vitae auctor venenatis, mi metus consectetur est, non rutrum sapien eros non mauris. Praesent ex felis, bibendum vel a, aliquet iaculis nunc. Pellentesque neque dolor, pretium ac ligula in.
                  </p>
                  <button
                    type="button"
                    className="w-1/3 mt-5 border-2 rounded-3xl px-2 py-4 text-sm font-base text-white bg-black transition ease-in-out duration-500 hover:scale-95 ">
                      VIEW ALL POSTS
                  </button>
                </div>
              </div>
            </div>
            <div>
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

    </>
  )
}

export default blogs