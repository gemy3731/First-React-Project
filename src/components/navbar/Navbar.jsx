import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navigation = [
  { name: 'ABOUT', href: '/about', current: false },
  { name: 'PORTFOLIO', href: '/portfolio', current: false },
  { name: 'CONTACT', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function NavBar() {
  const[scroll,setScroll]=useState(0);
  window.addEventListener("scroll",()=>{
    setScroll(window.scrollY)
  })
  return (
    <Disclosure as="nav" className={`bg-gray-800 fixed top-0 start-0 end-0  px-0 sm:px-7 z-10 ${scroll==0?"py-7":"py-2"}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-end rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">

            <div className="hidden sm:ml-6 md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300  hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute left-0 flex items-center pr-2  sm:ml-6 sm:pr-0">
            <Link to="/home"><h1 className='text-[2rem] font-bold text-white uppercase'>Start Framework</h1></Link>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden md:w-auto w-full block">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              as="NavLink"
              to={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300  hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
