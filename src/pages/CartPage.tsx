import { Trash } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddressForm from '../components/AddressForm';
import MyButton from '../components/ui/MyButton';
import MyModal from '../components/ui/MyModal';
import { addItemToCart, removeItemFromCart } from '../redux/slices/cartSlice';

const CartPage = () => {
  const [openModal, setOpenModal] = useState(false)

  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.cart.cartItems) as CartItemType[];
  const totalItemQuantity = cartItems.reduce((acc, curr) => acc = acc + curr.quantity!, 0)
  const totalPriceWithoutDiscount = cartItems.reduce((acc, curr) => acc = acc + ((curr.price + 1500) * curr.quantity!), 0)
  const totalDiscountPrice = totalPriceWithoutDiscount - cartItems.reduce((acc, curr) => acc = acc + (curr.price * curr.quantity!), 0)
  const finalPrice = totalPriceWithoutDiscount - totalDiscountPrice

  const addQyantity = (product: CartItemType) => {
    if (product.quantity! >= 10) {
      toast.error("Maximum 10 item per order");
      return
    }
    dispatch(addItemToCart({ ...product, quantity: product.quantity! + 1 }))
  }
  const subQuantity = (product: CartItemType) => {
    if (product.quantity! > 1) {
      dispatch(addItemToCart({ ...product, quantity: product.quantity! - 1 }))
    }

  }

  const checkoutHandler = () => {
    if(cartItems.length == 0){
      toast.error("Cart is empty please add some items");
      return;
    }
    setOpenModal(true)
  }

  const closeModal = () => {
    setOpenModal(false)
  }
  return (

    <div className="max-w-7xl px-2 lg:px-0 mx-2 lg:mx-10 ">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul role="list" className="divide-y divide-gray-200">
              {cartItems.length != 0 ? cartItems.map((product) => (
                <div key={product._id} className="">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-base">
                              <Link to={`/product/${product._id}`} className="font-semibold text-black">
                                {product.name}
                              </Link>
                            </h3>
                          </div>
                          {/* <div className="mt-1 flex text-sm">
                            <p className="text-sm text-gray-500">{product.color}</p>
                            {product.sizes ? (
                              <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                {product.size}
                              </p>
                            ) : null}
                          </div> */}
                          <div className="mt-1 flex items-end py-2">
                            <p className="text-sm font-medium text-gray-500 line-through">
                              {product.price + 1500}
                            </p>
                            <p className="text-base font-medium text-gray-900">
                              &nbsp;&nbsp;{product.price}
                            </p>
                            &nbsp;&nbsp;
                            <p className="text-base font-medium text-green-500">{Math.ceil((product.price + 1500 - product.price) / (product.price + 1500) * 100)}% Off</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="flex justify-between">
                    <div className='flex mb-2 items-center'>
                      <div className="min-w-24 flex">
                        <button onClick={() => subQuantity(product)} type="button" className="h-7 w-7">
                          -
                        </button>
                        <input
                          type="text"
                          className="mx-1 h-7 w-9 rounded-md border text-center"
                          value={product.quantity!}
                          readOnly
                        />
                        <button onClick={() => addQyantity(product)} type="button" className="flex h-7 w-7 items-center justify-center">
                          +
                        </button>
                      </div>
                      <div className="ml-6 flex text-sm">
                        <button onClick={() => dispatch(removeItemFromCart(product._id))} type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                          <Trash size={14} className="text-red-500" />
                          <span className="text-base font-medium text-red-500">Remove</span>
                        </button>
                      </div>
                    </div>

                    <p className="text-base font-medium text-gray-900">Total Price : <span className='text-red-500'> ₹{product.price * product.quantity!}</span></p>
                  </div>
                </div>
              )) :
                <div className="text-center">
                  <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" className='w-5/6 object-contain' alt="" />
                  <Link className='bg-blue-500 text-white px-4 py-2 font-semibold rounded-sm hover:bg-blue-500/90 drop-shadow-lg' to={"/"}>Continue Shopping</Link>
                </div>}
            </ul>
          </section>
          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 py-3 text-2xl font-semibold text-gray-900 px-2"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price ({totalItemQuantity} item)</dt>
                  <dd className="text-sm font-medium text-gray-900">₹ {totalPriceWithoutDiscount}</dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">- ₹ {totalDiscountPrice}</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                  <dd className="text-base font-medium text-gray-900">₹ {finalPrice}</dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save ₹ {totalDiscountPrice} on this order
              </div>

              <MyButton onClick={checkoutHandler}>Checkout ₹ {finalPrice} </MyButton>
              <MyModal open={openModal} onClose={closeModal}>
                <AddressForm closeModal={closeModal} totalPrice={finalPrice} totalQuantity={totalItemQuantity}/>
              </MyModal>
            </div>
          </section>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="mx-auto my-4 max-w-4xl md:my-6">
    //     <div className="overflow-hidden  rounded-xl shadow">
    //       <div className="grid grid-cols-1 md:grid-cols-2">
    //         <div className="px-5 py-6 text-gray-900 md:px-8">
    //           <div className="flow-root">
    //             <div className="-my-6 divide-y divide-gray-200">
    //               <div className="py-6">
    //                 <Form />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="bg-gray-100 px-5 py-6 md:px-8">
    //           <div className="flow-root">
    //             <ul className="-my-7 divide-y divide-gray-200">
    //               <li className="flex items-stretch justify-between space-x-5 py-7">
    //                 <div className="flex flex-1 items-stretch">
    //                   <div className="flex-shrink-0">
    //                     <img
    //                       className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain"
    //                       src=""
    //                     />
    //                   </div>
    //                   <div className="ml-5 flex flex-col justify-between">
    //                     <div className="flex-1">
    //                       <p className="text-sm font-bold">Nike Air Force 1 07 LV8</p>
    //                       <p className="mt-1.5 text-sm font-medium text-gray-500">
    //                         Orange
    //                       </p>
    //                     </div>
    //                     <p className="mt-4 text-xs font-medium ">x 1</p>
    //                   </div>
    //                 </div>
    //                 <div className="ml-auto flex flex-col items-end justify-between">
    //                   <p className="text-right text-sm font-bold text-gray-900">
    //                     ₹47,199
    //                   </p>
    //                   <button
    //                     type="button"
    //                     className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
    //                   >
    //                     <span className="sr-only">Remove</span>
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="h-5 w-5"
    //                     >
    //                       <line x1="18" y1="6" x2="6" y2="18"></line>
    //                       <line x1="6" y1="6" x2="18" y2="18"></line>
    //                     </svg>
    //                   </button>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //           <hr className="mt-6 border-gray-200" />
    //           <form action="#" className="mt-6">
    //             <div className="sm:flex sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5">
    //               <div className="flex-grow">
    //                 <input
    //                   className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    //                   type="text"
    //                   placeholder="Enter coupon code"
    //                 />
    //               </div>
    //               <div className="mt-4 sm:mt-0 md:mt-4 lg:mt-0">
    //                 <button
    //                   type="button"
    //                   className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    //                 >
    //                   Apply Coupon
    //                 </button>
    //               </div>
    //             </div>
    //           </form>
    //           <ul className="mt-6 space-y-3">
    //             <li className="flex items-center justify-between text-gray-600">
    //               <p className="text-sm font-medium">Sub total</p>
    //               <p className="text-sm font-medium">₹1,14,399</p>
    //             </li>
    //             <li className="flex items-center justify-between text-gray-900">
    //               <p className="text-sm font-medium ">Total</p>
    //               <p className="text-sm font-bold ">₹1,14,399</p>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <br></br><br></br>
    // </div>
  )
}

export default CartPage
