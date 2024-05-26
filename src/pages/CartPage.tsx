import Form from "../components/ui/Form"

const CartPage = () => {
  return (
    <div>
      <div className="mx-auto my-4 max-w-4xl md:my-6">
  <div className="overflow-hidden  rounded-xl shadow">
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-5 py-6 text-gray-900 md:px-8">
        <div className="flow-root">
          <div className="-my-6 divide-y divide-gray-200">
            <div className="py-6">
            <Form />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-5 py-6 md:px-8">
        <div className="flow-root">
          <ul className="-my-7 divide-y divide-gray-200">
            <li className="flex items-stretch justify-between space-x-5 py-7">
              <div className="flex flex-1 items-stretch">
                <div className="flex-shrink-0">
                  <img
                    className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain"
                    src=""
                  />
                </div>
                <div className="ml-5 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-bold">Nike Air Force 1 07 LV8</p>
                    <p className="mt-1.5 text-sm font-medium text-gray-500">
                      Orange
                    </p>
                  </div>
                  <p className="mt-4 text-xs font-medium ">x 1</p>
                </div>
              </div>
              <div className="ml-auto flex flex-col items-end justify-between">
                <p className="text-right text-sm font-bold text-gray-900">
                  ₹47,199
                </p>
                <button
                  type="button"
                  className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <span className="sr-only">Remove</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-5 w-5"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <hr className="mt-6 border-gray-200" />
        <form action="#" className="mt-6">
          <div className="sm:flex sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5">
            <div className="flex-grow">
              <input
                className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter coupon code"
              />
            </div>
            <div className="mt-4 sm:mt-0 md:mt-4 lg:mt-0">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Apply Coupon
              </button>
            </div>
          </div>
        </form>
        <ul className="mt-6 space-y-3">
          <li className="flex items-center justify-between text-gray-600">
            <p className="text-sm font-medium">Sub total</p>
            <p className="text-sm font-medium">₹1,14,399</p>
          </li>
          <li className="flex items-center justify-between text-gray-900">
            <p className="text-sm font-medium ">Total</p>
            <p className="text-sm font-bold ">₹1,14,399</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

      <br></br><br></br>
    </div>
  )
}

export default CartPage
