import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function PlanList({selectedMailingLists, setSelectedMailingLists, mailingLists}) {
  return (
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
  )
}

export default PlanList
