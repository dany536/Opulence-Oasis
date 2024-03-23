import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react';

import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'


import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Real Estate', description: '21 VACATIONS', href: '/location/real-estate' },
    { name: 'Safari Lodges', description: '14 VACATIONS', href: '/location/safari-lodges' },
    { name: 'Boutique Hotels', description: '8 VACATIONS', href: '/location/boutique-hotels' },
    { name: 'Holiday Homes', description: '8 VACATIONS', href: '/location/holiday-homes' },
    { name: 'Safari Camps', description: '20 VACATIONS', href: '/location/safari-camps' },
]


export default function Header() {


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <div className="flex lg:hidden">

                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen((test => !test))}
                        >

                            {
                                setMobileMenuOpen ?
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" /> :
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />

                            }
                            {/* <Bars3Icon className="h-6 w-6" aria-hidden={(test => !test)} />
                            <XMarkIcon className="h-6 w-6" aria-hidden="false" /> */}

                        </button>
                    </div>


                    <Link to="/" className="flex items-center">
                        <h1 className="text-center text-xl font-serif">OPULENCE OASIS</h1>
                    </Link>


                    <div className="flex  flex-row items-center lg:order-2">
                        <Popover.Group className="hidden lg:flex lg:gap-x-12">
                            <Popover className="relative">
                                <Popover.Button className="flex rounded-sm border items-center gap-x-1 text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 font-semibold leading-6 text-gray-900">
                                    TRAVEL <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute right-1 top-full z-10 mt-5 w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">

                                        <p className="py-3 pb-0 text-sm leading-relaxed text-gray-800 mx-auto w-[90%]">
                                            CHOOSE LOCATION <hr />
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
                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                        </Popover.Group>
                    </div>

                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/concierge"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    CONCIERGE
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/support"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    SUPPORT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blogs"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    BLOGS
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed z-10" />
                <Dialog.Panel className=" text-center fixed rounded-b-xl inset-y-1 z-10 w-full mx-auto h-max broder-5 m-10 bg-white p-4 sm:max-w-sm sm:ring-gray-900/10">

                    <div className="mt-2 flow-root transition duration-700">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                    <li>
                                        <NavLink
                                            to="/about"
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            ABOUT
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/concierge"
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            CONCIERGE
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/support"
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            SUPPORT
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/blogs"
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            BLOGS
                                        </NavLink>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>


        </header>
    );
}