import React from 'react'
import Real from '../../assets/real.jpeg'
import Cozy from "../../assets/Cozy-Point.jpeg"
import Seven from "../../assets/707.jpeg"
import Kamili from "../../assets/kamili.jpg"
import Maiyan from "../../assets/maiyan.jpg"
import Kilifi from "../../assets/kilifi.png"
import { Link } from 'react-router-dom'

const products = [
  { name: 'Mandharini Kilifi', description: 'REAL ESTATE', href: '/vacations/the-curve' },
  { name: 'Arijiju', description: 'HOLIDAY HOMES', href: '/vacations/the-curve' },
  { name: 'Thyme Villas', description: 'REAL ESTATE', href: '/vacations/the-curve' },
  { name: 'The Curve', description: 'REAL ESTATE', href: '/vacations/the-curve' },
  { name: 'Medina Palms', description: 'BOUTIQUE HOTELS', href: '/vacations/the-curve' },
  { name: 'Rock & Sea Watamu', description: 'BOUTIQUE HOTELS', href: '/vacations/the-curve' },
]

function realEstate() {
  return (
    <div>
      <section>
        <div className=''>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="w-full h-max" style={{ position: "sticky", top: "70px" }}>
              <div className="border-1">
                <img
                  src={Real}
                  alt="Air Ballon"
                  className="w-[95%] h-screen rounded-3xl rounded-l-none object-cover "
                />
                <div className="absolute h-screen w-[95%] inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-[25%] ms-20">
                  <h1 className="text- font-medium text-white tracking-widest">FEATURED VACATION</h1>
                  <p className="py-5 text-5xl font-extrabold text-white">
                    The Curve
                  </p>
                  <button className="p-3 px-8 mt-5 rounded-md bg-white inline-flex cursor-pointer items-center text-sm text-black">
                    VIEW VACATIONS
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h1 className='text-black text-5xl pt-12 p-5 py-10 font-bold'>Real Estate</h1>
              <p className="py-3 text-sm leading-relaxed text-gray-800 max-w-xl">
                21 OPULENT VACATIONS <hr />
              </p>
              <div className="max-w-xl h-max ">
                <div className="p-4 gap-5 inline-flex m-2 my-4 bg-white rounded-xl space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <img src={Cozy} className="w-[221px] h-[235px] rounded-xl object-cover" alt="test " srcset="" />
                  <div className='w-full'>
                    <h1 className="py-3 pt-0 text-2xl font-semibold capitalize text-gray-700">Cozy Points</h1>
                    <p className="text-md text-gray-500">
                      A cool and stylish villa with a warm and personal welcome, Cozy Point is quietly and privately situated in Malindi’s best area.
                    </p>
                    <button className="mt-7 ms-[68%] rounded-md text-xs px-4 p-2 border-2">DETAILS</button>
                  </div>
                </div>

                <div className="p-4 gap-5 inline-flex m-2 my-4 bg-white rounded-xl space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <img src={Seven} className="w-[221px] h-[265px] rounded-xl object-cover" alt="test " srcset="" />
                  <div className='w-full'>
                    <h1 className="text-sm font-light tracking-widest text-gray-700">NAIROBI</h1>
                    <h1 className="py-3 pt-0 text-2xl font-semibold capitalize text-gray-700">707 Mbabane</h1>
                    <p className="text-sm text-gray-500">
                      07 Mbabane is a stunning ultra modern 5 Bedroom townhouses in a luxury gated community where modernity and nature intermingle in an alchemy, crafted to delight the most discerning of tastes.
                    </p>
                    <button className="mt-7 ms-[68%] rounded-md text-xs px-4 p-2 border-2">DETAILS</button>
                  </div>
                </div>

                <div className="p-4 gap-5 inline-flex m-2 my-4 bg-white rounded-xl space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <img src={Maiyan} className="w-[221px] h-[265px] rounded-xl object-cover" alt="test " srcset="" />
                  <div className='w-full'>
                    <h1 className="text-sm font-light tracking-widest text-gray-700">NANYUKI</h1>
                    <h1 className="py-3 pt-0 text-2xl font-semibold capitalize text-gray-700">Maiyan Villas</h1>
                    <p className="text-sm text-gray-500">
                      Be it waking up to the sounds of nature, catching the warmth of a morning sunrise as you delight in the magical view of Mount Kenya, or enjoying a stroll through our beautifully manicured gardens. With a home-away-from-home feel and ultimate indulgences, Maiyan looks to redefine your concept of what a vacation can be.
                    </p>
                    <button className="mt-7 ms-[68%] rounded-md text-xs px-4 p-2 border-2">DETAILS</button>
                  </div>
                </div>

                <div className="p-4 gap-5 inline-flex m-2 my-4 bg-white rounded-xl space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <img src={Kilifi} className="w-[221px] h-[265px] rounded-xl object-cover" alt="test " srcset="" />
                  <div className='w-full'>
                    <h1 className="text-sm font-light tracking-widest text-gray-700">KILIFI</h1>
                    <h1 className="py-3 pt-0 text-2xl font-semibold capitalize text-gray-700">Mandharini Kilifi</h1>
                    <p className="text-sm text-gray-500">
                      Take advantage of recreation opportunities such as an outdoor pool or take in the view from a terrace and a garden. Additional amenities at this villa include complimentary wireless internet access, concierge services, and barbecue grills.
                    </p>
                    <button className="mt-7 ms-[68%] rounded-md text-xs px-4 p-2 border-2">DETAILS</button>
                  </div>
                </div>

                <div className="p-4 gap-5 inline-flex m-2 my-4 bg-white rounded-xl space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <img src={Kamili} className="w-[221px] h-[265px] rounded-xl object-cover" alt="test " srcset="" />
                  <div className='w-full'>
                    <h1 className="text-sm font-light tracking-widest text-gray-700">KILIFI</h1>
                    <h1 className="py-3 pt-0 text-2xl font-semibold capitalize text-gray-700">Kamili House</h1>
                    <p className="text-sm text-gray-500">
                      Kamili meaning ‘perfect’ in Kiswahili, is a stunning beach villa backing onto the lush Kilifi Plantations.
                    </p>
                    <button className="mt-7 ms-[68%] rounded-md text-xs px-4 p-2 border-2">DETAILS</button>
                  </div>
                </div>
                <div className="p-4 gap-5 inline-flex m-2 my-4 bg-white rounded-xl space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <img src={Cozy} className="w-[221px] h-[235px] rounded-xl object-cover" alt="test " srcset="" />
                  <div className='w-full'>
                    <h1 className="py-3 pt-0 text-2xl font-semibold capitalize text-gray-700">Cozy Points</h1>
                    <p className="text-md text-gray-500">
                      A cool and stylish villa with a warm and personal welcome, Cozy Point is quietly and privately situated in Malindi’s best area.
                    </p>
                    <button className="mt-7 ms-[68%] rounded-md text-xs px-4 p-2 border-2">DETAILS</button>
                  </div>
                </div>

                <div className="p-4 gap-5 inline-flex m-2 my-4 bg-white rounded-xl space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <img src={Seven} className="w-[221px] h-[265px] rounded-xl object-cover" alt="test " srcset="" />
                  <div className='w-full'>
                    <h1 className="text-sm font-light tracking-widest text-gray-700">NAIROBI</h1>
                    <h1 className="py-3 pt-0 text-2xl font-semibold capitalize text-gray-700">707 Mbabane</h1>
                    <p className="text-sm text-gray-500">
                      07 Mbabane is a stunning ultra modern 5 Bedroom townhouses in a luxury gated community where modernity and nature intermingle in an alchemy, crafted to delight the most discerning of tastes.
                    </p>
                    <button className="mt-7 ms-[68%] rounded-md text-xs px-4 p-2 border-2">DETAILS</button>
                  </div>
                </div>

                <div className="p-4 gap-5 inline-flex m-2 my-4 bg-white rounded-xl space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <img src={Maiyan} className="w-[221px] h-[265px] rounded-xl object-cover" alt="test " srcset="" />
                  <div className='w-full'>
                    <h1 className="text-sm font-light tracking-widest text-gray-700">NANYUKI</h1>
                    <h1 className="py-3 pt-0 text-2xl font-semibold capitalize text-gray-700">Maiyan Villas</h1>
                    <p className="text-sm text-gray-500">
                      Be it waking up to the sounds of nature, catching the warmth of a morning sunrise as you delight in the magical view of Mount Kenya, or enjoying a stroll through our beautifully manicured gardens. With a home-away-from-home feel and ultimate indulgences, Maiyan looks to redefine your concept of what a vacation can be.
                    </p>
                    <button className="mt-7 ms-[68%] rounded-md text-xs px-4 p-2 border-2">DETAILS</button>
                  </div>
                </div>

                <div className="p-4 gap-5 inline-flex m-2 my-4 bg-white rounded-xl space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <img src={Kilifi} className="w-[221px] h-[265px] rounded-xl object-cover" alt="test " srcset="" />
                  <div className='w-full'>
                    <h1 className="text-sm font-light tracking-widest text-gray-700">KILIFI</h1>
                    <h1 className="py-3 pt-0 text-2xl font-semibold capitalize text-gray-700">Mandharini Kilifi</h1>
                    <p className="text-sm text-gray-500">
                      Take advantage of recreation opportunities such as an outdoor pool or take in the view from a terrace and a garden. Additional amenities at this villa include complimentary wireless internet access, concierge services, and barbecue grills.
                    </p>
                    <button className="mt-7 ms-[68%] rounded-md text-xs px-4 p-2 border-2">DETAILS</button>
                  </div>
                </div>

                <div className="p-4 gap-5 inline-flex m-2 my-4 bg-white rounded-xl space-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2">
                  <img src={Kamili} className="w-[221px] h-[265px] rounded-xl object-cover" alt="test " srcset="" />
                  <div className='w-full'>
                    <h1 className="text-sm font-light tracking-widest text-gray-700">KILIFI</h1>
                    <h1 className="py-3 pt-0 text-2xl font-semibold capitalize text-gray-700">Kamili House</h1>
                    <p className="text-sm text-gray-500">
                      Kamili meaning ‘perfect’ in Kiswahili, is a stunning beach villa backing onto the lush Kilifi Plantations.
                    </p>
                    <button className="mt-7 ms-[68%] rounded-md text-xs px-4 p-2 border-2">DETAILS</button>
                  </div>
                </div>


              </div>

              <div className="py-5">
                <p className="py-3 pb-0 text-sm leading-relaxed text-gray-800 mx-auto w-[90%]">
                  OTHER VACATIONS <hr />
                </p>
                <div className="p-4 grid grid-cols-2">
                  {products.map((item) => (
                    <div className="">
                      <Link to={item.href}>
                        <div key={item.name} className="border group relative flex items-center gap-x-6 rounded-md p-4 m-1 text-sm leading-6 hover:bg-gray-50">
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default realEstate