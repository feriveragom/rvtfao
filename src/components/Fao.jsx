
import { useState } from 'react'
import Steps from "./Steps"
import TermCond from './TermCond'

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

  const onSubmit = (data) => {
    setSubmitted(true)
    console.log(data);

    if (enabled) {
      // TODO
      setSteps(stepc2)
    }
  };

  const onSubmit2 = (data) => {
    console.log(data);
    setCodigo(data.codigo)
  };

  const desc = "Disponible para todos los clientes en cualquier parte del país"

  const step2 = () => {
    return (
      <div className="col-span-3 p-10 space-y-10">
        <Informacion codigo={codigo} onSubmit2={onSubmit2} selectedMailingLists={selectedMailingLists} />
        <div className='flex space-x-20 px-10 justify-center'>
          <Secciones title="Transferencia" subtitle="(Khipu)" description={desc} includedFeatures={includedFeatures1} />
          <Secciones title="Tarjetas de crédito y débito" subtitle="(FLOW)" description={desc} includedFeatures={includedFeatures2} />
        </div>
        <div className="flex justify-between">
          {/* <div></div> */}
          {/* <button
            type="button"
            onClick={() => setSteps(stepc1)}
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-phover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phover"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={() => setSteps(stepc3)}
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-phover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phover"
          >
            Siguiente
          </button> */}
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
            onClick={() => setSteps(stepc2)}
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
        <div className="col-span-1 p-10 pr-0"><Steps steps={steps}/></div>
        {current_col_span_3()}
      </div>
    </>

  )
};

export default Fao
