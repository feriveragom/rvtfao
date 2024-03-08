import { Link } from 'react-router-dom';
import { UserCircleIcon  } from '@heroicons/react/24/outline'

function Header() {
  return (
    <nav class="border-b-4 border-primary shadow-md shadow-fdox-gray-light/70">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="flex flex-shrink-0 items-center">
            <img className='h-8' src="./firmadox.png" alt="Mi imagen" />
            </div>
            <div class="sr-only hidden sm:-my-px sm:ml-6 sm:flex">
              <a href="/firmadox" data-phx-link="redirect" data-phx-link-state="push" class="text-gray-900 inline-flex items-center px-4 pt-1 text-sm font-medium" data-phx-id="m2-phx-F7rT1wh1dkPYB0py">
                Link1
              </a>
              <a href="/firmadox" data-phx-link="redirect" data-phx-link-state="push" class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-4 pt-1 text-sm font-medium" data-phx-id="m3-phx-F7rT1wh1dkPYB0py">
                Link2
              </a>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center sm:justify-end ">
            <div class="flex items-center justify-end">
              <a href="https://canary-web.albertcs.com/auth?redirect=https://canary-plataforma.firmadox.cl/firmadox" class="text-fdox-gray-dark/80 hover:text-fdox-gray-dark inline-flex items-center justify-center px-2.5 py-1.5 text-sm font-medium group border border-primary rounded-lg" data-phx-id="m4-phx-F7rT1wh1dkPYB0py">
                <UserCircleIcon  className="h-6 w-6" />
                <span class="mb-0.5">Acceder</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header
