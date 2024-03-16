import {useState} from 'react'
import React from 'react'
import { ChevronDown, Copy, ArrowRight } from 'lucide-react'

export default function home() {

  const [travel, setTravel] = useState(false);
  const[realEstate, setRealEstate] = React.useState(false);
  const[concierge, setConcierge] = React.useState(false);
  const[safari, setSafari] = React.useState(true);

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

          <hr className='p-5'/>

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
            className="inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 sm:mx-2 sm:w-auto"
          >
            <span className="mx-2">Get it on the App Store</span>
          </a>
          <a
            href="#"
            className="mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 sm:mx-2 sm:mt-0 sm:w-auto"
          >
            <svg
              className="mx-2 h-5 w-5 fill-current"
              viewBox="-28 0 512 512.00075"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0"></path>
            </svg>
            <span className="mx-2">Get it on Google Play</span>
          </a>
        </div>
        </div>
      </section>


    </>
  )
}
