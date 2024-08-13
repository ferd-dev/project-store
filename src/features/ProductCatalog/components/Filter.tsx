const Filter = () => {
    return (
        <div className="w-full sm:w-auto">
            <button
                id="sortDropdownButton1"
                data-dropdown-toggle="dropdownSort1"
                type="button"
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
            >
                Filter
                <svg className="ml-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" d="m19 9-7 7-7-7" />
                </svg>
            </button>
            <div
                id="dropdownSort1"
                className="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                data-popper-placement="bottom"
            >
                <ul
                    className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                    aria-labelledby="sortDropdownButton1"
                >
                    <li>
                        <a
                            href="#"
                            className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Category 1
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Category 2
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Filter;