<template>
    <button
        data-drawer-target="sidebar-info"
        data-drawer-toggle="sidebar-info"
        aria-controls="sidebar-info"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only"></span>
        <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
    </button>

    <aside
        id="sidebar-info"
        class="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div
            class="overflow-y-auto py-4 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <a
                href="https://wvs-ffm.de"
                class="flex items-center pl-2 mb-5">
                <img
                    src="https://static.wixstatic.com/media/e10970_c893db61e5364168b73c7219eeb68f3a~mv2.png/v1/crop/x_0,y_20,w_180,h_130/fill/w_113,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/werner-von-siemens-schule_19358432_mw640.png"
                    class="mr-3 h-6 sm:h-8"
                    alt="Flowbite Logo" />
                <div class="flex flex-col">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                        >Projektauftrag</span
                    >
                    <span class="self-center text-xs font-light text-gray-500 dark:text-gray-400">Ottimmuth</span>
                </div>
            </a>
            <ul class="space-y-2">
                <li>
                    <div
                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 dark:text-white group bg-gray-100 dark:bg-gray-700">
                        <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                        </svg>
                        <span class="ml-3">Image processing</span>
                    </div>
                </li>
            </ul>
            <div class="my-6 border-t border-gray-200 dark:border-gray-700"></div>
            <div class="mt-8">
                <h3 class="px-3 mb-3 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">Information</h3>
                <div
                    id="alert-update"
                    class="p-4 mb-3 rounded-lg bg-primary-50 dark:bg-primary-900"
                    role="alert">
                    <div class="flex justify-between items-center mb-3">
                        <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                            >Beta</span
                        >
                    </div>
                    <div class="mb-3 text-sm font-light text-primary-700 dark:text-primary-300">
                        Diese Seite befindet sich noch in der Entwicklung. Es können noch Fehler auftreten.
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>
