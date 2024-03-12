
import { useState } from 'react'

import { IdentificationIcon } from '@heroicons/react/24/outline'

import { useForm } from 'react-hook-form';

import Steps from "./Steps"
import TermCond from './TermCond'
import SwitchC from './SwitchC'
import PlanList from './PlanList';
import { Step1, Step2, Step3, Step4 } from './EachStep';

const mailingLists = [
  { id: 1, title: 'Un uso', description: '', price: '$8.000' },
  { id: 2, title: '1 año', description: '', price: '$11.000' },
  { id: 3, title: '2 años', description: '', price: '$15.500' },
  { id: 4, title: '3 años', description: '', price: '$20.150' },
]

function Fao() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])
  const [open, setOpen] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const [serie, setSerie] = useState(12345)
  const [telefono, setTelefono] = useState(67890)
  const [email, setEmail] = useState("aaa@aa.aa")
  const [submitted, setSubmitted] = useState(false)

  const [steps, setSteps] = useState(Step1)

  const onSubmit = (data) => {
    setSubmitted(true)
    console.log(data);

    if (enabled) {
      // TODO
      setSteps(Step2)


    }
  };

  const step1 = () => {
    return (
      <div className="col-span-3 p-10">
          <PlanList selectedMailingLists={selectedMailingLists} setSelectedMailingLists={setSelectedMailingLists} mailingLists={mailingLists} />
          <div className="mt-5">
            <div className="flex space-x-3 mb-2">
              <IdentificationIcon className="h-6 w-6 flex-shrink-0 text-current" />
              <h3 className="text-base font-semibold leading-7 text-gray-900">Información Personal</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <p className="text-sm font-medium leading-6 text-gray-900">RUN</p>
                  <p className="mt-1 ml-2 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">99999999-9</p>
                </div>

                <div className="col-span-1">
                  <p className="text-sm font-medium leading-6 text-gray-900">Nombre(s)</p>
                  <p className="mt-1 ml-2 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fernando</p>
                </div>

                <div className="col-span-1">
                  <p className="text-sm font-medium leading-6 text-gray-900">Apellidos</p>
                  <p className="mt-1 ml-2 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Rivera Gómez</p>
                </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="col-span-1">
                <label title='Este campo es requerido para validar la vigencia de tu documento de identidad' htmlFor="serie" className="block text-sm font-medium leading-6 text-gray-900">
                  No de Serie de Cédula
                </label>
                <div className="mt-2">
                  <input
                    {...register("serie", { required: true })}
                    type="text"
                    name="serie"
                    id="serie"
                    value={serie}
                    autoComplete="given-name"
                    className="pl-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.serie && <p className="error text-red-500">Campo requerido</p>}
              </div>
              <div className="col-span-1">
                <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">
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
                      value={telefono}
                      autoComplete="telefono"
                      className="pl-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                  {errors.telefono && <p className="error text-red-500">Campo requerido</p>}
                </div>

              </div>
              <div className="col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      className="pl-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

  const step2 = () => {
    return (
      <div className="col-span-3 p-10">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setSteps(Step1)}
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-phover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phover"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={() => setSteps(Step3)}
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-phover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phover"
          >
            Siguiente
          </button>
        </div>
      </div>
    )
  }

  const step3 = () => {
    return (
      <div className="col-span-3 p-10">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setSteps(Step2)}
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-phover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phover"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={() => setSteps(Step4)}
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-phover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phover"
          >
            Siguiente
          </button>
        </div>
      </div>
    )
  }

  const step4 = () => {
    return (
      <div className="col-span-3 p-10">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setSteps(Step3)}
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-phover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phover"
          >
            Anterior
          </button>
        </div>
      </div>
    )
  }

  const current_col_span_3 = () => {
    let elem = steps.filter((step) => step.status == 'current')
    switch (elem[0].id) {
      case "1":
        return step1()
      case "2":
        return step2()
      case "3":
        return step3()
      case "4":
        return step4()
      default:
        return <></>
    }
  }

  return (
    <>
      <TermCond open={open} setOpen={setOpen} />
      <div className='grid grid-cols-4 gap-4'>
        <div className="col-span-1 p-10"><Steps steps={steps}/></div>
        {current_col_span_3()}
      </div>
    </>

  )
};

export default Fao
