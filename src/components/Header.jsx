import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline'

import { Menu } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/20/solid'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import imgClave from "./../assets/clave_unica_color.7d8e1b56a097.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        <div className="mx-auto flex items-center justify-center text-gray-500">
                         Autentícate con
                        </div>
                        <div className="mx-auto flex items-center justify-center">
                          <img className="" src={imgClave} alt="..." />
                        </div>
                      </Dialog.Title>
                      <div className="">
                        <p className="text-sm text-gray-500">
                          Comienza el proceso de compra de Firma Avanzada Online.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 mx-20">
                    <a
                      href="https://accounts.claveunica.gob.cl/accounts/login/?next=/openid/authorize/%3Fclient_id%3D9a76efc4c34e4bd7843206658dc45454%26response_type%3Dcode%26scope%3Dopenid%2Brun%2Bname%26redirect_uri%3Dhttps%253A%252F%252Fclaveunica.gob.cl%252Fauth%252Fcallbacklogin%26state%3DqPTpVqUNT208ffeDX2F5I_fqJK8"
                      className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-phover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpen(false)}
                    >
                      Ingresar
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <nav className="border-b-4 border-primary shadow-md shadow-fdox-gray-light/70">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img className="h-8" src="./firmadox.png" alt="Mi imagen" />
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:justify-end ">
              <div className="flex items-center justify-end space-x-5">

                <Link to="/fao" className="p-1 border border-primary rounded-lg">
                  redirect FAO
                </Link>

                <Menu as="div" className="relative inline-block text-left border border-primary rounded-lg">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary hover:bg-phover px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300">
                      <PlusIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
                      <span className='text-white'>Comprar</span>
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <span

                              onClick={() => {setOpen(true)}}
                              className={classNames(
                                active ? 'bg-gray-50 text-gray-900 cursor-pointer' : 'text-gray-700',
                                'block px-4 py-2 text-sm cursor-pointer'
                              )}
                            >
                              <div className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-indigo-500" aria-hidden="true">
                                Firma avanzada Online
                              </div>
                              <div className="mt-0.5 text-xs font-light italic leading-5 text-gray-500">Firma de manera segura y con validez jurídica</div>
                            </span>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <a href="https://canary-web.albertcs.com/auth?redirect=https://rvtfao.vercel.app/" className="text-fdox-gray-dark/80 hover:text-fdox-gray-dark inline-flex items-center justify-center px-2.5 py-1.5 text-sm font-medium group border border-primary rounded-lg" data-phx-id="m4-phx-F7rT1wh1dkPYB0py">
                  <UserCircleIcon  className="h-6 w-6" />
                  <span className="mb-0.5">Acceder</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header
