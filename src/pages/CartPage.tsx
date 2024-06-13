import { Trash } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AddressForm from '../components/AddressForm';
import MyButton from '../components/ui/MyButton';
import MyModal from '../components/ui/MyModal';
import { addItemToCart, removeItemFromCart } from '../redux/slices/cartSlice';

const CartPage = () => {
  const [openModal, setOpenModal] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state:any)=>state.user.user) as UserInfo;
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
    if(Object.keys(user).length == 0){
      navigate("/signin")
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
  )
}

export default CartPage
