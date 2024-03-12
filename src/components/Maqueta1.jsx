import { IdentificationIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form';
import PlanList from './PlanList';
import SwitchC from './SwitchC'

function Maqueta1({ selectedMailingLists, setSelectedMailingLists, mailingLists, run, nombres, apellidos, onSubmit, enabled, setEnabled, submitted, setOpen }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div className="col-span-3 p-10">
        <PlanList selectedMailingLists={selectedMailingLists} setSelectedMailingLists={setSelectedMailingLists} mailingLists={mailingLists} />
        <div className="mt-5">
          <div className="flex space-x-3 mb-2 text-gray-600">
            <IdentificationIcon className="h-6 w-6 flex-shrink-0" />
            <h3 className="text-base font-semibold leading-7 text-gray-600">Información Personal</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <p className="text-sm font-semibold leading-6 text-gray-900">RUN</p>
            <p className="mt-1 ml-2 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ run}</p>
              </div>

              <div className="col-span-1">
                <p className="text-sm font-semibold leading-6 text-gray-900">Nombre(s)</p>
            <p className="mt-1 ml-2 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ nombres}</p>
              </div>

              <div className="col-span-1">
                <p className="text-sm font-semibold leading-6 text-gray-900">Apellidos</p>
            <p className="mt-1 ml-2 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ apellidos}</p>
              </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="col-span-1">
              <label title='Este campo es requerido para validar la vigencia de tu documento de identidad' htmlFor="serie" className="block text-sm font-semibold leading-6 text-gray-900">
                No de Serie de Cédula
              </label>
              <div className="mt-2">
                <input
                  {...register("serie", { required: true })}
                  type="text"
                  name="serie"
                  id="serie"
                  autoComplete="given-name"
                  className="pl-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              {errors.serie && <p className="error text-red-500">Campo requerido</p>}
            </div>
            <div className="col-span-1">
              <label htmlFor="telefono" className="block text-sm font-semibold leading-6 text-gray-900">
                Teléfono
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">+56</span>
                  <input
                    {...register("telefono", { required: true })}
                    type="number"
                    name="telefono"
                    id="telefono"
                    autoComplete="telefono"
                    className="pl-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder=""
                  />
                </div>
                {errors.telefono && <p className="error text-red-500">Campo requerido</p>}
              </div>

            </div>
            <div className="col-span-1">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    id="email"
                    className="pl-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.email && <p className="error text-red-500">Campo requerido</p>}
            </div>
          </div>
          <div className="mx-auto flex justify-start mt-5">
            <div className="relative flex gap-x-3">
              <SwitchC enabled={enabled} setEnabled={setEnabled} />
              <div className="text-sm leading-6">
                <p className="text-gray-500 cursor-pointer" onClick={() => {setOpen(true)}}>Acepto términos y condiciones.</p>
              </div>
            </div>
          </div>
              {!enabled && submitted && <div className="error text-red-500">Debe aceptar los términos y condiciones</div>}
          <div className="mx-auto flex justify-end mt-5">
            <button
              type="submit"
              className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-phover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phover"
            >
              Siguiente
            </button>
          </div>
        </form>
      </div>
  )
}

export default Maqueta1
