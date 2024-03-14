const steps = [
  { name: 'Step 1', href: '#', status: 'complete' },
  { name: 'Step 2', href: '#', status: 'current' },
  { name: 'Step 3', href: '#', status: 'upcoming' },
  { name: 'Step 4', href: '#', status: 'upcoming' },
]

export default function UnderConstruction({title}) {
  return (
    <div>
      <div className="p-10">
        <divflex className="flex items-center justify-center text-gray-500 font-semibold text-xl p-5">{title}        </divflex>
        <div className="flex items-center justify-center text-primary font-semibold text-base">... página en construcción</div>
      </div>
      <nav className="flex items-center justify-center" aria-label="Progress">
        <p className="text-sm font-medium">
          <svg width="30" height="18" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 0c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C17.08 7.271 18.782 9 22.5 9c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C20.42 1.728 18.718 0 15 0ZM7.5 9C3.5 9 1 11 0 15c1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C9.58 16.271 11.282 18 15 18c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C12.92 10.729 11.218 9 7.5 9Z" fill="#38BDF8"></path></svg>
        </p>
        <ol role="list" className="ml-8 flex items-center space-x-5">
          {steps.map((step) => (
            <li key={step.name}>
              {step.status === 'complete' ? (
                <a className="block h-2.5 w-2.5 rounded-full bg-primary hover:bg-phover">
                  <span className="sr-only">{step.name}</span>
                </a>
              ) : step.status === 'current' ? (
                <a href={step.href} className="relative flex items-center justify-center" aria-current="step">
                  <span className="absolute flex h-5 w-5 p-px" aria-hidden="true">
                    <span className="h-full w-full rounded-full bg-indigo-200" />
                  </span>
                  <span className="relative block h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                  <span className="sr-only">{step.name}</span>
                </a>
              ) : (
                <a href={step.href} className="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
                  <span className="sr-only">{step.name}</span>
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
