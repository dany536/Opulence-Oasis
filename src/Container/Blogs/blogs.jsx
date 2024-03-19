import React from 'react'
import { Link } from 'react-router-dom'

function blogs() {
  return (
    <>
      <section>
        <div className=''>
          <img className="w-full" src="blog1.jpg" />
          <div className="absolute h-[118vh] inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
          <div className="absolute bottom-1/4 w-full ">
            <h1 className="text-5xl text-center max-w-2xl mx-auto tracking-wider font-bold text-white">Find inspiration for your next location</h1>
            <p
              type="button"
              className="w-44 mx-auto text-center mt-10 cursor-pointer border-2 rounded-3xl px-2 py-3 text-sm font-base text-white transition ease-in-out duration-500 hover:scale-95 ">
              VIEW VACATIONS
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='p-10 lg:p-20'>
          <div className="grid lg:grid-cols-2 gap-1">
            <div className="mx-auto max-w-lg h-max" style={{ position: "sticky", top: "70px" }}>
              <div className="w-full">
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
            <div>
              <div className="w-full h-max p-8 lg:px-10  lg:py-0 border-l-2">
                <hr />
                <Link to='/'>
                  <div className="inline-flex p-5 m-2 bg-white gap-10 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105">
                    <h1 className="py-3 w-full text-lg font-semibold capitalize text-gray-700">How to improve Web Design Process</h1>
                    <p className="py-4 text-md text-gray-500 text-right">
                      Proin euismod, urna vitae auctor venenatis, mi metus  consectetur est, non rutrum sapien eros.
                    </p>
                  </div>
                </Link>
                <hr />
                <Link to='/'>
                  <div className="inline-flex p-5 m-2 bg-white gap-10 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105">
                    <h1 className="py-3 w-full text-lg font-semibold capitalize text-gray-700">What Will Website Be Like In 100 Years?</h1>
                    <p className="py-4 text-md text-gray-500 text-right">
                      Proin euismod, urna vitae auctor venenatis, mi metus  consectetur est, non rutrum sapien eros.
                    </p>
                  </div>
                </Link>
                <hr />
                <Link to='/'>
                  <div className="inline-flex p-5 m-2 bg-white gap-10 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105">
                    <h1 className="py-3 w-full text-lg font-semibold capitalize text-gray-700">Designers Who Changed the Web</h1>
                    <p className="py-4 text-md text-gray-500 text-right">
                      Proin euismod, urna vitae auctor venenatis, mi metus  consectetur est, non rutrum sapien eros.
                    </p>
                  </div>
                </Link>
                <hr />
                <Link to='/'>
                  <div className="inline-flex p-5 m-2 bg-white gap-10 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105">
                    <h1 className="py-3 w-full text-lg font-semibold capitalize text-gray-700">10 Great Examples of Responsive Websites</h1>
                    <p className="py-4 text-md text-gray-500 text-right">
                      Proin euismod, urna vitae auctor venenatis, mi metus  consectetur est, non rutrum sapien eros.
                    </p>
                  </div>
                </Link>
                <Link to='/'>
                  <div className="inline-flex p-5 m-2 bg-white gap-10 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105">
                    <h1 className="py-3 w-full text-lg font-semibold capitalize text-gray-700">How to improve Web Design Process</h1>
                    <p className="py-4 text-md text-gray-500 text-right">
                      Proin euismod, urna vitae auctor venenatis, mi metus  consectetur est, non rutrum sapien eros.
                    </p>
                  </div>
                </Link>
                <hr />
                <Link to='/'>
                  <div className="inline-flex p-5 m-2 bg-white gap-10 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105">
                    <h1 className="py-3 w-full text-lg font-semibold capitalize text-gray-700">What Will Website Be Like In 100 Years?</h1>
                    <p className="py-4 text-md text-gray-500 text-right">
                      Proin euismod, urna vitae auctor venenatis, mi metus  consectetur est, non rutrum sapien eros.
                    </p>
                  </div>
                </Link>
                <hr />
                <Link to='/'>
                  <div className="inline-flex p-5 m-2 bg-white gap-10 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105">
                    <h1 className="py-3 w-full text-lg font-semibold capitalize text-gray-700">Designers Who Changed the Web</h1>
                    <p className="py-4 text-md text-gray-500 text-right">
                      Proin euismod, urna vitae auctor venenatis, mi metus  consectetur est, non rutrum sapien eros.
                    </p>
                  </div>
                </Link>
                <hr />
                <Link to='/'>
                  <div className="inline-flex p-5 m-2 bg-white gap-10 transition duration-500 ease-in-out hover:shadow-lg hover:scale-105">
                    <h1 className="py-3 w-full text-lg font-semibold capitalize text-gray-700">10 Great Examples of Responsive Websites</h1>
                    <p className="py-4 text-md text-gray-500 text-right">
                      Proin euismod, urna vitae auctor venenatis, mi metus  consectetur est, non rutrum sapien eros.
                    </p>
                  </div>
                </Link>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default blogs