
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { IdentificationIcon } from '@heroicons/react/24/outline'

import { useForm } from 'react-hook-form';

import Steps from "./Steps"

const mailingLists = [
  { id: 1, title: 'Un uso', description: '', price: '$8.000' },
  { id: 2, title: '1 año', description: '', price: '$11.000' },
  { id: 3, title: '2 años', description: '', price: '$15.500' },
  { id: 4, title: '3 años', description: '', price: '$20.150' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Fao() {
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [open, setOpen] = useState(false)

  const onSubmit = (data) => {
    // Procesa los datos del formulario aquí
    console.log(data);
  };

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
                          Términos y condiciones
                        </div>
                      </Dialog.Title>
                      <div className="pt-10">
                        <p className="text-sm text-gray-500">
                          Vestibulum eget tortor eu purus convallis laoreet sit amet quis eros.
                          Nam sit amet sem ac eros ullamcorper ultrices.
                          Mauris eget arcu eu turpis laoreet pharetra.
                          Aliquam erat volutpat. Donec eu quam vel nisi eleifend hendrerit.
                          Suspendisse potenti.
                          Nunc eu tellus turpis.
                          Sed accumsan nibh eget risus varius, eu tincidunt ante blandit.
                          Morbi quis quam at odio molestie hendrerit.
                          Proin tincidunt tellus et lacinia mollis.
                          Nam ac nisl sit amet ante tincidunt ultrices.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 mx-auto flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => {setOpen(false)}}
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Cerrar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className='grid grid-cols-4 gap-4'>
        <div className="col-span-1 p-10">
          <Steps />
        </div>
        <div className="col-span-3 p-10">
          <RadioGroup className="" value={selectedMailingLists} onChange={setSelectedMailingLists}>
        <RadioGroup.Label className="text-base font-semibold leading-6 text-gray-900">
          Seleccione su Plan
        </RadioGroup.Label>
          <div className="mt-5 grid grid-cols-4 gap-x-4">
            {mailingLists.map((mailingList) => (
              <RadioGroup.Option
                key={mailingList.id}
                value={mailingList}
                className={({ active }) =>
                  classNames(
                    active ? 'border-primary ring-2 ring-primary' : 'border-gray-300',
                    'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                  )
                }
              >
                {({ checked, active }) => (
                  <>
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                          {mailingList.title}
                        </RadioGroup.Label>
                        <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                          {mailingList.description}
                        </RadioGroup.Description>
                        <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                          {mailingList.price}
                        </RadioGroup.Description>
                      </span>
                    </span>
                    <CheckCircleIcon
                      className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-primary')}
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        active ? 'border' : 'border-2',
                        checked ? 'border-primary' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-lg'
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
          </RadioGroup>
          <div className="mt-5">
            <div className="flex space-x-3 mb-2">
              <IdentificationIcon className="h-6 w-6 flex-shrink-0 text-current" />
              <h3 className="text-base font-semibold leading-7 text-gray-900">Información Personal</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">

                <div className="col-span-1">
                  <p className="text-sm italic leading-6 text-gray-900">Email</p>
                  <p className="mt-1 ml-2 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">feriveragom@gmail.com</p>
                </div>

                <div className="col-span-1">
                  <p className="text-sm italic leading-6 text-gray-900">RUN</p>
                  <p className="mt-1 ml-2 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">99999999-9</p>
                </div>

                <div className="col-span-1">
                  <p className="text-sm italic leading-6 text-gray-900">Nombre(s)</p>
                  <p className="mt-1 ml-2 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fernando</p>
                </div>

                <div className="col-span-1">
                  <p className="text-sm italic leading-6 text-gray-900">Apellidos</p>
                  <p className="mt-1 ml-2 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Rivera Gómez</p>
                </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="col-span-1">
                <label title='Este campo es requerido para validar la vigencia de tu documento de identidad' htmlFor="serie" className="block text-sm italic leading-6 text-gray-900">
                  No de Serie de Cédula
                </label>
                <div className="mt-2">
                  <input
                    {...register("serie", { required: true })}
                    type="text"
                    name="serie"
                    id="serie"
                    autoComplete="given-name"
                    className="pl-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.serie && <p className="error text-red-500">Campo requerido</p>}
              </div>
              <div className="col-span-1">
                <label htmlFor="telefono" className="block text-sm italic leading-6 text-gray-900">
                  Teléfono
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">+56</span>
                    <input
                      {...register("telefono", { required: true })}
                      type="number"
                      name="telefono"
                      id="telefono"
                      autoComplete="telefono"
                      className="pl-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                  {errors.telefono && <p className="error text-red-500">Campo requerido</p>}
                </div>
              </div>
            </div>
            <div className="mx-auto flex justify-start mt-5">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <p className="text-gray-500 cursor-pointer" onClick={() => {setOpen(true)}}>Acepto términos y condiciones.</p>
                </div>
              </div>
            </div>
            <div className="mx-auto flex justify-end mt-5">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>

  )
};

export default Fao
