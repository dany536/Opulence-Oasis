import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">

                    <div className="grid grid-cols-5 sm:gap-20">
                        <div>
                            <h2 className="mb-6 text-md justify-between font-semibold text-gray-700 tracking-widest uppercase">
                                <Link to="/location/real-estate" className="hover:underline">
                                    real <br /> estate
                                </Link>
                            </h2>
                        </div>
                        <div>
                            <h2 className="mb-6 text-md font-semibold text-gray-700 tracking-widest uppercase">
                                <Link to="/location/safari-lodges" className="hover:underline">
                                    safari <br /> lodges
                                </Link>
                            </h2>
                        </div>
                        <div>
                            <h2 className="mb-6 text-md font-semibold text-gray-700 tracking-widest uppercase">
                                <Link to="/location/boutique-hotels" className="hover:underline">
                                    boutique <br /> hotels
                                </Link>
                            </h2>
                        </div>
                        <div>
                            <h2 className="mb-6 text-md font-semibold text-gray-700 tracking-widest uppercase">
                                <Link to="/location/holiday-homes" className="hover:underline">
                                    holiday <br /> homes
                                </Link>
                            </h2>
                        </div>
                        <div>
                            <h2 className="mb-6 text-md font-semibold text-gray-700 tracking-widest uppercase">
                                <Link to="/location/safari-camps" className="hover:underline">
                                    safari <br /> camps
                                </Link>
                            </h2>
                        </div>
                    </div>


                    <div className="item-center">
                        <Link to="/" className="flex items-center">
                            <h1 className="text-center md:text-3xl text-2xl font-serif">OPULENCE OASIS</h1>
                        </Link>
                    </div>

                </div>

                <hr className="my-2 border-gray-200 sm:mx-auto lg:my-3" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024 OPULENCE OASIS
                    </span>
                    <div className="flex space-x-5 sm:justify-center sm:mt-0">
                        <span className="text-sm text-gray-500 sm:text-center">
                            Design & Developed By Deepankar Sahu
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}