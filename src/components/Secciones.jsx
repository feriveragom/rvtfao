import { CheckIcon } from '@heroicons/react/20/solid'

export default function Example({title, subtitle, description, includedFeatures, handleClickPay}) {
  return (
    <div className="rounded-3xl ring-1 ring-primary hover:ring-phover w-96">
      <div className="p-10">
        <h3 className="text-xl font-bold tracking-tight text-gray-600">{title}</h3>

        <p className="mt-6 text-base leading-7 text-gray-600">
          {description}
        </p>
        <div className="mt-5 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-primary">Características</h4>
          <div className="h-px flex-auto bg-gray-100" />
        </div>
        <ul
          role="list"
          className="mt-5 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 "
        >
          {includedFeatures.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col'>
        <button
          type="button"
          name={subtitle}
          onClick={(e) => handleClickPay(e)}
          className="uppercase rounded-md bg-primary mx-20 mb-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-phover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-phover"
        >
          {subtitle}
        </button>
      </div>

    </div>
  )
}
