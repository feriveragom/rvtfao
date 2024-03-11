import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { XMarkIcon } from '@heroicons/react/24/outline'

function TermCond({open, setOpen}) {
  return (
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
                    <div className="text-center">
                      <div className="mx-auto flex items-center justify-end">
                        <XMarkIcon
                          onClick={() => {setOpen(false)}}
                          className="h-8 w-8 rounded-md bg-primary text-sm font-semibold text-white shadow-sm hover:bg-phover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        />
                      </div>
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        <div className="mx-auto flex items-center justify-center text-gray-500">
                          Términos y condiciones
                        </div>
                      </Dialog.Title>
                      <div className="p-5 text-left">
                        <ul className="list-disc">
                          <li>Nam sit amet sem ac eros ullamcorper ultrices.</li>
                          <li>Aliquam erat volutpat. Donec eu quam vel nisi eleifend hendrerit.</li>
                          <li>Mauris eget arcu eu turpis laoreet pharetra.</li>
                        </ul>
                        <ol className="list-decimal pt-5">
                          <li>Suspendisse potenti.</li>
                          <li>Nunc eu tellus turpis.</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
  )
}

export default TermCond
