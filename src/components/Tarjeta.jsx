
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useForm } from 'react-hook-form';

export default function Tarjeta({ name, codigo, onSubmit2, selectedMailingLists }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <h2 className="sr-only" id="profile-overview-title">
        Profile Overview
      </h2>
      <div className="bg-white p-6 pb-1">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">

            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-xl font-semibold text-gray-500 sm:text-2xl mb-2">{name}</p>
              <p className="text-sm font-medium text-gray-600">{selectedMailingLists ? "Ha seleccionado Firma Avanzada Online con vigencia de: "   : ""}
                <span className='text-gray-900'>{selectedMailingLists ? selectedMailingLists.title : ""}</span>
              </p>
              <p className="text-sm font-medium text-gray-600">{selectedMailingLists ? "Valor: " : ""}
              <span className='text-gray-900'>{selectedMailingLists ? selectedMailingLists.price : ""}</span>
              </p>
            </div>
          </div>
          <div className="mt-5 flex justify-center sm:mt-0">
            <InformationCircleIcon className="h-20 w-20 text-primary hover:text-phover" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 border-gray-200 bg-gray-50 divide-x ">
        <div className="col-span-1 ">
          <form onSubmit={handleSubmit(onSubmit2)} className="grid grid-cols-4 gap-4 p-2 pl-10">
            <div className='col-span-3'>
              <label title='Este campo es requerido para validar la vigencia de tu documento de identidad' htmlFor="serie" className="block text-sm font-medium leading-6 text-gray-900">
                Código de descuento
              </label>
              <div className="mt-2">
                <input
                  {...register("codigo")}
                  type="text"
                  name="codigo"
                  id="codigo"
                  autoComplete="given-name"
                  className="pl-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className='col-span-1 flex flex-col justify-end items-center'>
              <button
                type="submit"
                title='Aplicar código de descuento'
                className="w-9 h-9 rounded-md bg-primary px-2 text-sm font-semibold text-white shadow-sm hover:bg-phover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phover"
              >
                <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-1 flex flex-col">
            <div className="overflow-hidden rounded-lg bg-white m-2 p-2">
            <dt className="truncate text-sm font-medium text-gray-500">Monto a pagar: { codigo != "" ? "Código: " + codigo : ""}</dt>
              <dd className="mt-1 text-xl font-semibold tracking-tight text-gray-600 flex flex-col text-center">{selectedMailingLists ? selectedMailingLists.price : ""}</dd>
            </div>
        </div>
      </div>
    </div>
  )
}



