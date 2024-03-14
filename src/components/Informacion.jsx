
import { CheckIcon } from '@heroicons/react/20/solid'
import { useForm } from 'react-hook-form';

export default function Informacion({ codigo, onSubmit2, selectedMailingLists }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-2'>
        <p className="text-base text-gray-500 mb-2">{selectedMailingLists ? "Ha seleccionado Firma Avanzada Online con vigencia de: " : ""}</p>
        <p className='text-gray-500 font-semibold text-xl text-center'>{selectedMailingLists ? selectedMailingLists.title : ""}</p>
        <form onSubmit={handleSubmit(onSubmit2)} className="grid grid-cols-4 gap-4 ">
          <div className='col-span-2'>
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
          <div className='col-span-1 flex flex-col justify-end items-left'>
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
      <div className="col-span-1 flex flex-col justify-center text-start text-3xl font-semibold tracking-tight text-gray-600">
          {selectedMailingLists ? selectedMailingLists.price + " CPL" : ""}
      </div>
    </div>

  )
}



