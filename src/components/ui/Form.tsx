import React from 'react'

const Form = () => {
  return (
    <div>
        <form>
                  <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                    <div>
                      <h3
                        id="contact-info-heading"
                        className="text-lg font-semibold text-gray-900"
                      >
                        Contact information
                      </h3>
                      <div className="mt-4 w-full">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="name"
                        >
                          Full Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Enter your name"
                          id="name"
                        />
                      </div>
                    </div>
                    <hr className="my-8" />
                    <div className="mt-10">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Payment details
                      </h3>
                      <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                        <div className="col-span-3 sm:col-span-4">
                          <label
                            htmlFor="cardNum"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Card number
                          </label>
                          <div className="mt-1">
                            <input
                              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              type="text"
                              placeholder="4242 4242 4242 4242"
                              id="cardNum"
                            />
                          </div>
                        </div>
                        <div className="col-span-2 sm:col-span-3">
                          <label
                            htmlFor="expiration-date"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Expiration date (MM/YY)
                          </label>
                          <div className="mt-1">
                            <input
                              type="date"
                              name="expiration-date"
                              id="expiration-date"
                              autoComplete="cc-exp"
                              className="block h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="cvc"
                            className="block text-sm font-medium text-gray-700"
                          >
                            CVC
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="cvc"
                              id="cvc"
                              autoComplete="csc"
                              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                      <div>
                        <br></br>
        <h1 className="flex items-center justify-center font-large">or</h1>
        <br></br>
        <div className="flex items-center space-x-6">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFa35_j_0an5VqFj5aYhScHBOv-Cx1CrUmO7nvK2_Jw&s" alt="UPI" className="h-8 w-auto"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8h1fM04EJwtrOLZdZx1wE7_ye3pIwp8T82FWnm8j&s" alt="Credit Card" className="h-8 w-auto"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbQ6m1CMvg3-4eAzXtExE1qmsQqoEEkjblV9XG3xvPQ&s" alt="Mastercard" className="h-8 w-auto"/>
</div>
        </div>
                      </div>
                    </div>
                    <hr className="my-8" />
                    <div className="mt-10">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Shipping address
                      </h3>
                      <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Address
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="address"
                              name="address"
                              autoComplete="street-address"
                              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="city"
                              name="city"
                              autoComplete="address-level2"
                              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State / Province
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="region"
                              name="region"
                              autoComplete="address-level1"
                              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="postal-code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Postal code
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="postal-code"
                              name="postal-code"
                              autoComplete="postal-code"
                              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-8" />
                    <div className="mt-10">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Billing information
                      </h3>
                      <div className="mt-6 flex items-center">
                        <input
                          id="same-as-shipping"
                          name="same-as-shipping"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                        />
                        <div className="ml-2">
                          <label
                            htmlFor="same-as-shipping"
                            className="text-sm font-medium text-gray-900"
                          >
                            Same as shipping information
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                      <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Make payment
                      </button>
                    </div>
                  </div>
                </form>
    </div>
  )
}

export default Form
