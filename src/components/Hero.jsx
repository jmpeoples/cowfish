import { Fragment, useId, useRef, useState } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3CenterLeftIcon, Bars4Icon, ClockIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ChevronRightIcon,
  ChevronUpDownIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'My tasks', href: '#', icon: Bars4Icon, current: false },
  { name: 'Recent', href: '#', icon: ClockIcon, current: false },
]
const teams = [
  { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
]
const projects = [{
  "id": 1,
  "title": "Job",
  "viewers": 4245965,
  "avgViews": 38833,
  "Price": "$6745.93",
  "pinned": false
}, {
  "id": 2,
  "title": "Daltfresh",
  "viewers": 4209602,
  "avgViews": 16224,
  "Price": "$5032.88",
  "pinned": false
}, {
  "id": 3,
  "title": "Viva",
  "viewers": 4736546,
  "avgViews": 58516,
  "Price": "$7878.24",
  "pinned": false
}, {
  "id": 4,
  "title": "Fintone",
  "viewers": 3738383,
  "avgViews": 82004,
  "Price": "$8148.25",
  "pinned": false
}, {
  "id": 5,
  "title": "Bamity",
  "viewers": 2484433,
  "avgViews": 75650,
  "Price": "$821.17",
  "pinned": false
}, {
  "id": 6,
  "title": "Prodder",
  "viewers": 213076,
  "avgViews": 29477,
  "Price": "$4786.83",
  "pinned": false
}, {
  "id": 7,
  "title": "Bigtax",
  "viewers": 4127064,
  "avgViews": 83673,
  "Price": "$7686.96",
  "pinned": false
}, {
  "id": 8,
  "title": "Wrapsafe",
  "viewers": 2932321,
  "avgViews": 58076,
  "Price": "$9016.44",
  "pinned": false
}, {
  "id": 9,
  "title": "Flexidy",
  "viewers": 4557170,
  "avgViews": 1431,
  "Price": "$5362.01",
  "pinned": false
}, {
  "id": 10,
  "title": "Namfix",
  "viewers": 2154191,
  "avgViews": 55272,
  "Price": "$2090.39",
  "pinned": false
}, {
  "id": 11,
  "title": "Flexidy",
  "viewers": 3454926,
  "avgViews": 48469,
  "Price": "$6186.67",
  "pinned": false
}, {
  "id": 12,
  "title": "Pannier",
  "viewers": 2863390,
  "avgViews": 81423,
  "Price": "$7111.23",
  "pinned": false
}, {
  "id": 13,
  "title": "Fix San",
  "viewers": 3547613,
  "avgViews": 43997,
  "Price": "$8092.70",
  "pinned": false
}, {
  "id": 14,
  "title": "Matsoft",
  "viewers": 4872732,
  "avgViews": 59340,
  "Price": "$8456.13",
  "pinned": false
}, {
  "id": 15,
  "title": "Bamity",
  "viewers": 1360067,
  "avgViews": 72941,
  "Price": "$7290.21",
  "pinned": false
}, {
  "id": 16,
  "title": "Aerified",
  "viewers": 3782128,
  "avgViews": 74073,
  "Price": "$2106.62",
  "pinned": false
}, {
  "id": 17,
  "title": "Keylex",
  "viewers": 2719281,
  "avgViews": 61099,
  "Price": "$9001.33",
  "pinned": false
}, {
  "id": 18,
  "title": "Trippledex",
  "viewers": 2647272,
  "avgViews": 26370,
  "Price": "$2751.87",
  "pinned": false
}, {
  "id": 19,
  "title": "Cookley",
  "viewers": 4329141,
  "avgViews": 89995,
  "Price": "$1180.89",
  "pinned": false
}, {
  "id": 20,
  "title": "Y-find",
  "viewers": 3828939,
  "avgViews": 88288,
  "Price": "$2104.63",
  "pinned": false
}, {
  "id": 21,
  "title": "Asoka",
  "viewers": 59104,
  "avgViews": 26411,
  "Price": "$5819.34",
  "pinned": false
}, {
  "id": 22,
  "title": "Stim",
  "viewers": 3715810,
  "avgViews": 62491,
  "Price": "$8013.95",
  "pinned": false
}, {
  "id": 23,
  "title": "Overhold",
  "viewers": 1995571,
  "avgViews": 60342,
  "Price": "$1118.45",
  "pinned": false
}, {
  "id": 24,
  "title": "Bigtax",
  "viewers": 759204,
  "avgViews": 79502,
  "Price": "$3338.54",
  "pinned": false
}, {
  "id": 25,
  "title": "Tresom",
  "viewers": 4357300,
  "avgViews": 18137,
  "Price": "$6677.66",
  "pinned": false
}, {
  "id": 26,
  "title": "Y-find",
  "viewers": 773412,
  "avgViews": 75713,
  "Price": "$4040.23",
  "pinned": false
}, {
  "id": 27,
  "title": "Lotlux",
  "viewers": 118739,
  "avgViews": 6485,
  "Price": "$7400.48",
  "pinned": false
}, {
  "id": 28,
  "title": "Y-Solowarm",
  "viewers": 339594,
  "avgViews": 2348,
  "Price": "$5797.63",
  "pinned": false
}, {
  "id": 29,
  "title": "Lotlux",
  "viewers": 2160817,
  "avgViews": 82712,
  "Price": "$1143.15",
  "pinned": false
}, {
  "id": 30,
  "title": "Sonsing",
  "viewers": 4146094,
  "avgViews": 10307,
  "Price": "$9379.39",
  "pinned": false
}, {
  "id": 31,
  "title": "Toughjoyfax",
  "viewers": 2680298,
  "avgViews": 31467,
  "Price": "$6668.81",
  "pinned": false
}, {
  "id": 32,
  "title": "It",
  "viewers": 2642647,
  "avgViews": 89196,
  "Price": "$6974.83",
  "pinned": false
}, {
  "id": 33,
  "title": "Stringtough",
  "viewers": 371780,
  "avgViews": 71708,
  "Price": "$5458.64",
  "pinned": false
}, {
  "id": 34,
  "title": "Lotstring",
  "viewers": 4239664,
  "avgViews": 21017,
  "Price": "$8184.52",
  "pinned": false
}, {
  "id": 35,
  "title": "Temp",
  "viewers": 4181408,
  "avgViews": 35487,
  "Price": "$3221.46",
  "pinned": false
}, {
  "id": 36,
  "title": "Fix San",
  "viewers": 4744984,
  "avgViews": 19816,
  "Price": "$8710.72",
  "pinned": false
}, {
  "id": 37,
  "title": "Cardify",
  "viewers": 4934681,
  "avgViews": 59922,
  "Price": "$9092.77",
  "pinned": false
}, {
  "id": 38,
  "title": "Andalax",
  "viewers": 1210557,
  "avgViews": 1262,
  "Price": "$2040.49",
  "pinned": false
}, {
  "id": 39,
  "title": "Latlux",
  "viewers": 4913443,
  "avgViews": 60821,
  "Price": "$8440.98",
  "pinned": true
}, {
  "id": 40,
  "title": "Y-Solowarm",
  "viewers": 4510156,
  "avgViews": 58119,
  "Price": "$8059.93",
  "pinned": false
}, {
  "id": 41,
  "title": "Bytecard",
  "viewers": 221841,
  "avgViews": 13656,
  "Price": "$8354.90",
  "pinned": true
}, {
  "id": 42,
  "title": "Subin",
  "viewers": 942326,
  "avgViews": 85659,
  "Price": "$8971.32",
  "pinned": false
}, {
  "id": 43,
  "title": "Konklux",
  "viewers": 3998569,
  "avgViews": 40072,
  "Price": "$6296.00",
  "pinned": true
}, {
  "id": 44,
  "title": "Bigtax",
  "viewers": 3160998,
  "avgViews": 52615,
  "Price": "$1340.75",
  "pinned": false
}, {
  "id": 45,
  "title": "Bytecard",
  "viewers": 1859737,
  "avgViews": 23103,
  "Price": "$9555.80",
  "pinned": false
}, {
  "id": 46,
  "title": "Redhold",
  "viewers": 64923,
  "avgViews": 53522,
  "Price": "$972.04",
  "pinned": false
}, {
  "id": 47,
  "title": "Span",
  "viewers": 88691,
  "avgViews": 50028,
  "Price": "$6159.81",
  "pinned": true
}, {
  "id": 48,
  "title": "Y-Solowarm",
  "viewers": 2921944,
  "avgViews": 18370,
  "Price": "$3872.61",
  "pinned": false
}, {
  "id": 49,
  "title": "Alpha",
  "viewers": 1604467,
  "avgViews": 19375,
  "Price": "$4382.01",
  "pinned": false
}, {
  "id": 50,
  "title": "Bitwolf",
  "viewers": 1176633,
  "avgViews": 86136,
  "Price": "$8342.01",
  "pinned": false
}]

const pinnedProjects = projects.filter((project) => project.pinned)

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Hero() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="px-2">
                      <div className="space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                              'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                'mr-3 flex-shrink-0 h-6 w-6'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="mt-8">
                        <h3 className="px-3 text-sm font-medium text-gray-500" id="mobile-teams-headline">
                          Teams
                        </h3>
                        <div className="mt-1 space-y-1" role="group" aria-labelledby="mobile-teams-headline">
                          {teams.map((team) => (
                            <a
                              key={team.name}
                              href={team.href}
                              className="group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            >
                              <span
                                className={classNames(team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full')}
                                aria-hidden="true"
                              />
                              <span className="truncate">{team.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4">
          <div className="flex flex-shrink-0 items-center px-6">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=500"
              alt="Your Company"
            />
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="mt-6 flex h-0 flex-1 flex-col overflow-y-auto">
            {/* User account dropdown */}
            <Menu as="div" className="relative inline-block px-3 text-left">
              <div>
                <Menu.Button className="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  <span className="flex w-full items-center justify-between">
                    <span className="flex min-w-0 items-center justify-between space-x-3">
                      <img
                        className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="truncate text-sm font-medium text-gray-900">Jessy Schwarz</span>
                        <span className="truncate text-sm text-gray-500">@jessyschwarz</span>
                      </span>
                    </span>
                    <ChevronUpDownIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </span>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          View profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Notifications
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Get desktop app
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            {/* Sidebar Search */}
            <div className="mt-5 px-3">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                  aria-hidden="true"
                >
                  <MagnifyingGlassIcon className="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full rounded-md border-gray-300 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search"
                />
              </div>
            </div>
            {/* Navigation */}
            <nav className="mt-6 px-3">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-8">
                {/* Secondary navigation */}
                <h3 className="px-3 text-sm font-medium text-gray-500" id="desktop-teams-headline">
                  Teams
                </h3>
                <div className="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
                  {teams.map((team) => (
                    <a
                      key={team.name}
                      href={team.href}
                      className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <span
                        className={classNames(team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full')}
                        aria-hidden="true"
                      />
                      <span className="truncate">{team.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Main column */}
        <div className="flex flex-col lg:pl-64">
          {/* Search header */}
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex flex-1">
                <form className="flex w-full md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      name="search-field"
                      className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              View profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Notifications
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Get desktop app
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Support
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Logout
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <main className="flex-1">
            {/* Page title & actions */}
            <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Home</h1>
              </div>
              <div className="mt-4 flex sm:mt-0 sm:ml-4">
                <button
                  type="button"
                  className="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-0"
                >
                  Share
                </button>
                <button
                  type="button"
                  className="order-0 inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:order-1 sm:ml-3"
                >
                  Create
                </button>
              </div>
            </div>
            {/* Pinned projects */}
            <div className="mt-6 px-4 sm:px-6 lg:px-8">
              <h2 className="text-sm font-medium text-gray-900">Pinned Projects</h2>
              <ul role="list" className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
                {pinnedProjects.map((project) => (
                  <li key={project.id} className="relative col-span-1 flex rounded-md shadow-sm">
                    <div
                      className={classNames(
                        project.bgColorClass,
                        'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                      )}
                    >
                      {project.initials}
                    </div>
                    <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                      <div className="flex-1 truncate px-4 py-2 text-sm">
                        <a href="#" className="font-medium text-gray-900 hover:text-gray-600">
                          {project.title}
                        </a>
                        <p className="text-gray-500">{project.totalMembers} Members</p>
                      </div>
                      <Menu as="div" className="flex-shrink-0 pr-2">
                        <Menu.Button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                          <span className="sr-only">Open options</span>
                          <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-10 top-3 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                    View
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                    Removed from pinned
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                    Share
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects list (only on smallest breakpoint) */}
            <div className="mt-10 sm:hidden">
              <div className="px-4 sm:px-6">
                <h2 className="text-sm font-medium text-gray-900">Brands</h2>
              </div>
              <ul role="list" className="mt-3 divide-y divide-gray-100 border-t border-gray-200">
                {projects.map((project) => (
                  <li key={project.id}>
                    <a href="#" className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                      <span className="flex items-center space-x-3 truncate">
                        <span
                          className={classNames(project.bgColorClass, 'w-2.5 h-2.5 flex-shrink-0 rounded-full')}
                          aria-hidden="true"
                        />
                        <span className="truncate text-sm font-medium leading-6">
                          {project.title}
                        </span>
                      </span>
                      <ChevronRightIcon
                        className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects table (small breakpoint and up) */}
            <div className="mt-8 hidden sm:block">
              <div className="inline-block min-w-full border-b border-gray-200 align-middle">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-t border-gray-200">
                      <th
                        className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        <span className="lg:pl-2">Brand</span>
                      </th>
                      <th
                        className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        Viewers
                      </th>
                      <th
                        className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                        scope="col"
                      >
                        Avg. views
                      </th>
                      <th
                        className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                        scope="col"
                      >
                        Price
                      </th>
                     
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {projects.map((project) => (
                      <tr key={project.id}>
                        <td className="max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                          <div className="flex items-center lg:pl-2">
                            <div
                              className={classNames(project.bgColorClass, 'flex-shrink-0 w-2.5 h-2.5 rounded-full')}
                              aria-hidden="true"
                            />
                            <a href="#" className="truncate hover:text-gray-600">
                              <span>
                                {project.title}
                              </span>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-sm font-medium text-gray-500">
                          <div className="flex items-center space-x-2">
                            <div className="flex flex-shrink-0 -space-x-1">
                             {project.viewers}
                            </div>
                           
                          </div>
                        </td>
                        <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                          {project.avgViews}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          {project.Price}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
  
}
