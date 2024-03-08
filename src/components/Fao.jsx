
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { IdentificationIcon } from '@heroicons/react/24/outline'

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
  return (
    <>
    <div class="mt-5 px-10 w-full">
      <div className="col-span-1"></div>
      <RadioGroup className="col-span-4" value={selectedMailingLists} onChange={setSelectedMailingLists}>
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
        <div class="flex space-x-3 mb-2">
          <IdentificationIcon class="h-6 w-6 flex-shrink-0 text-current" />
          <h3 class="text-base font-semibold leading-7 text-gray-900">Información Personal</h3>
        </div>
        <div class="grid grid-cols-3 gap-4">

            <div class="col-span-1">
              <p class="text-sm font-medium leading-6 text-gray-900">Email</p>
              <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">feriveragom@gmail.com</p>
            </div>

            <div class="col-span-1">
              <p class="text-sm font-medium leading-6 text-gray-900">Nombre(s)</p>
              <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fernando</p>
            </div>

            <div class="col-span-1">
              <p class="text-sm font-medium leading-6 text-gray-900">Apellido Paterno</p>
              <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Rivera</p>
            </div>

            <div class="col-span-1">
              <p class="text-sm font-medium leading-6 text-gray-900">Apellido Materno</p>
              <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Gómez</p>
            </div>

            <div class="col-span-1">
              <p class="text-sm font-medium leading-6 text-gray-900">RUN</p>
              <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">99999999-9</p>
            </div>

            <div class="col-span-1">
              <p class="text-sm font-medium leading-6 text-gray-900">Teléfono</p>
              <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">999999999</p>
            </div>

            <div class="col-span-1">

            </div>

            <div class="col-span-1">

            </div>

        </div>
      </div>
    </div>
    </>
  )
};

export default Fao
