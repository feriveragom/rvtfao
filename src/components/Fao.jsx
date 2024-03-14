
import { useState, useEffect } from 'react'
import Steps from "./Steps"
import TermCond from './TermCond'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

import { stepc1, stepc2, stepc3, stepc4, includedFeatures1, includedFeatures2 } from './DataUtils';
import Maqueta1 from './Maqueta1';
import Informacion from './Informacion';
import Secciones from './Secciones';

const mailingLists = [
  { id: 1, title: 'Un uso', description: '', price: '$8.000' },
  { id: 2, title: '1 año', description: '', price: '$11.000' },
  { id: 3, title: '2 años', description: '', price: '$15.500' },
  { id: 4, title: '3 años', description: '', price: '$20.150' },
]

function Fao() {

  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])
  const [open, setOpen] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [codigo, setCodigo] = useState("")
  const [steps, setSteps] = useState(stepc2)
  const [payState, setPayState] = useState('');

  const pagadoPayState = () => {
    const timeout = setTimeout(() => {
      setPayState('PAGADO');
    }, 3000);
    return () => clearTimeout(timeout);
  }

  const onSubmit = (data) => {
    setSubmitted(true)
    console.log(data);

    if (enabled) {
      // TODO
      setSteps(stepc2)
    }
  };

  const onSubmit2 = (data) => {
    setCodigo(data.codigo)
  };

  const handleClickPay = (e) => {
    switch (e.target.name) {
      case "KHIPU":
        const timeoutKHIPU = setTimeout(() => {
          setPayState('KHIPU');
          pagadoPayState()
        }, 100);
        return () => clearTimeout(timeoutKHIPU);
      case "FLOW":
        const timeoutFLOW = setTimeout(() => {
          setPayState('FLOW');
          pagadoPayState()
        }, 100);
        return () => clearTimeout(timeoutFLOW);
      default:
        break;
    }
  };

  const desc = "Disponible para todos los clientes en cualquier parte del país"

  const step2First = () => {
    return (
      <div className="col-span-3 p-10 space-y-10">
        <Informacion codigo={codigo} onSubmit2={onSubmit2} selectedMailingLists={selectedMailingLists} />
        <div className='flex space-x-20 px-10 justify-start'>
          <Secciones title="Transferencia" subtitle="KHIPU" description={desc} includedFeatures={includedFeatures1} handleClickPay={handleClickPay} />
          <Secciones title="Tarjetas de crédito y débito" subtitle="FLOW" description={desc} includedFeatures={includedFeatures2} handleClickPay={handleClickPay} />
        </div>
      </div>
    )
  }

  const step2Waiting = () => {
    return (
      <div className="col-span-3 pr-10">
        <div className='flex justify-center items-center pt-10'>
            <svg aria-hidden="true" class="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
        </div>
        <div className='flex justify-center items-center h-48'>
          <button
            type="button"
            className=" block w-2/3 rounded-lg border-2 border-dashed border-gray-300 p-5 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span className="mt-2 block text-xl font-semibold text-gray-600">{ payState}</span>
            <span className="mt-2 block text-xl font-semibold text-gray-600">Estamos esperando la notificación del pago</span>
            <span className="mt-2 block text-sm font-base text-gray-900">En instantes podrás continuar con el proceso de compra</span>
            <span className="mt-2 block text-sm font-base text-gray-900">Espere unos minutos por favor</span>
          </button>
        </div>
      </div>
    )
  }

  const step2Pagado = () => {
    return (
      <div className="col-span-3 pr-10">
        <div className='flex justify-center items-center pt-10'>
          <CheckIcon className="h-20 w-20 flex-none text-primary" aria-hidden="true" />
        </div>
        <div className='flex justify-center items-center h-48'>
          <button
            type="button"
            className=" block w-2/3 rounded-lg border-2 border-dashed border-gray-300 p-5 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span className="mt-2 block text-xl font-semibold text-gray-600">{ payState}</span>
            <span className="mt-2 block text-xl font-semibold text-gray-600">Tu pago ha sido exitodso y hemos validado tu identidad</span>
          </button>
        </div>
        <div className="flex justify-between pb-5">
          <div></div>
          <button
            type="button"
            onClick={() => setSteps(stepc3)}
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
            onClick={() => {
              setSteps(stepc2)
              setPayState("")
            }}
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-phover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phover"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={() => setSteps(stepc4)}
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
            onClick={() => setSteps(stepc3)}
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
        return <Maqueta1
          selectedMailingLists={selectedMailingLists}
          setSelectedMailingLists={setSelectedMailingLists}
          mailingLists={mailingLists}
          run={"99999999-9"}
          nombres={"nombres"}
          apellidos={"apellidos"}
          onSubmit={onSubmit}
          enabled={enabled}
          setEnabled={setEnabled}
          submitted={submitted}
          setOpen={setOpen} />
      case "2":
        switch (payState) {
          case "":
            return step2First()
          case "PAGADO":
            return step2Pagado()
          default:
            return step2Waiting()
        }
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
        <div className="col-span-1 p-10 pr-0"><Steps steps={steps}/></div>
        {current_col_span_3()}
      </div>
    </>

  )
};

export default Fao
