import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function support() {
  return (
    <>
      <section>
        <div className='bg-gray-500'>
          <img className="h-[89vh] w-full" src="support.jpeg" alt="" srcset="" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-1/3 w-full ">
            <h1 className="text-5xl text-center tracking-wider font-bold text-white">Have a question ?</h1>
          </div>
        </div>
      </section>

      <section>

        <div className="max-w-6xl mx-auto lg:py-15 py-10">
          <p className="tracking-widest text-sm text-center py-10">FILL OUT THE FORM BELOW</p>

          <div className="grid grid-cols-1 lg:grid-cols-2">

            <div className="flex items-center bg-[#F7F8FC] rounded-xl justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">

                <form action="#" method="POST" className="mt-8">
                  <div className="space-y-5">

                    <div>
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        {' '}
                        Name{' '}
                      </label>
                      <div className="mt-2 flex flex-row gap-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="First name"
                        ></input>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Last name"
                        ></input>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        {' '}
                        Email address{' '}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Your email"
                        ></input>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        {' '}
                        Phone{' '}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="(555) 555-555"
                        ></input>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        {' '}
                        Message{' '}
                      </label>
                      <div className="mt-2">
                        <textarea rows="4" className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="terabox"
                          placeholder="Your message">
                        </textarea>
                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-[#3572ff] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      >
                        Submit <ArrowRight className="ml-2" size={16} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="px-20 py-5" style={{ position: "sticky", top: "70px" }}>
              <p className="tracking-widest text-sm">QUICK LINKS <hr /></p>
              <div className="bg-[#F7F8FC] transition ease-in-out duration-700 hover:scale-105 my-5 border-2 rounded-md p-3">
                <Link to='/'>
                  <p>Schedule a call</p>
                </Link>
              </div>
              <div className="bg-[#F7F8FC] transition ease-in-out duration-700 hover:scale-105 my-5 border-2 rounded-md p-3">
                <Link to='/'>
                  <p>support@opulenceoasis.co</p>
                </Link>
              </div>
              <div className="bg-[#F7F8FC] transition ease-in-out duration-700 hover:scale-105 my-5 border-2 rounded-md p-3">
                <Link to='/'>
                  <p>(555) 555-5555</p>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section>
        <div className="bg-[#081C3A] mb-96">
          <div className="p-16 py-20 max-w-6xl mx-auto text-center">
            <h2 className="text-sm py-3 font-base tracking-widest text-white">
              LET'S TALK
            </h2>
            <h2 className="text-2xl max-w-4xl mx-auto font-bold tracking-wider py-4 text-white xl:text-6xl">
              Contact an agent directly, today
            </h2>
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

export default support

