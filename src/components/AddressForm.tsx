import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SESSION_ID_GENERATE_URL } from '../utils/constants';
import MyInput from './ui/MyInput';
import toast from "react-hot-toast";
const stripePromise = loadStripe('pk_test_51PFLVeSCb04hw5xSVk7GnEoAz1aFh4UjHmSvUVoVh50vJCnQNr2q9gW3EbahVdx9aW1fUPPOMqTw3jvbIrnYsvG100W7qOzMJK');

type Props = {
  closeModal: () => void
  totalQuantity:number
  totalPrice:number
}


const AddressForm = ({ closeModal,totalPrice,totalQuantity }: Props) => {
  const cartItem = useSelector((state: any) => state.cart.cartItems) as CartItemType[]

  const [formdata, setFormData] = useState({
    address: '',
    city: '',
    pincode: '',
    mobileNo: '',
  })

  let name, value;
  const handlerChange=(e:any)=> {
    name = e.target.name;
    value = e.target.value;

    setFormData({ ...formdata,[name]:value});
  };


  const submitHandler = async (e:any)=>{
    e.preventDefault();
    const {address,city,pincode,mobileNo} = formdata;
    if(address && city && pincode && mobileNo){
    const res = await fetch("/USERDATA/PuuC2bx4URmAQPTh6T9r",
    {
      method : "POST",
      headers :{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        address,city,pincode,mobileNo
      }),
    }
    );
    if (res){
      setFormData({
        address:"",
        pincode:"",
        city:"",
        mobileNo:"",
      })
      toast.success("Done");
  }
    // save user shipping details in data base
    

    // open payment gateway 
    try {
      const response = (await axios.post(SESSION_ID_GENERATE_URL,{items:cartItem})).data
      const sessionId = response.data;

      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error('Stripe checkout error:', error);
        toast.error("Payment Failed please try again");
      }
    } catch (error) {
      toast.error("Payment Failed please try again");
    }



  }
    //close form
    closeModal();
  }

  return (
    <div className="mx-auto w-full max-w-7xl py-2">
      <div className="mx-auto my-4 max-w-2xl md:my-6">
        {/* Form */}
        <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
          <div className="mb-4 flex items-center rounded-lg py-2">
            <div className="mr-2 rounded-full bg-gray-100  p-2 text-black">
              <ShoppingCart size={20} />
            </div>
            <div className="flex flex-1">
              <p className="text-sm font-medium">
                You have <strong>{totalQuantity}</strong> items in cart. Sub total is <strong>₹{totalPrice}</strong>
              </p>
            </div>
          </div>
          <p className="text-sm font-bold text-gray-900">Shipping address</p>
          <form className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">

            <div className="col-span-2 grid">
              <MyInput
                label="Address"
                placeholder="Enter your address"
                name="address"
                value={formdata.address}
                onChange={handlerChange}
                required
              />
            </div>

            <div className="w-full">
              <MyInput
                label="City"
                placeholder="Enter your city name"
                name="city"
                value={formdata.city}
                onChange={handlerChange}
                required
              />
            </div>

            <div className="w-full">
              <MyInput
                label="Pincode"
                placeholder="Enter your pincode"
                name="pincode"
                value={formdata.pincode}
                onChange={handlerChange}
                required
              />
            </div>

            <div className="col-span-2 grid">
              <MyInput
                label="Mobile No"
                placeholder="Enter your mobile no"
                name="mobileNo"
                value={formdata.mobileNo}
                onChange={handlerChange}
                required
              />
            </div>

            <div className="col-span-2 grid">
              <button
              onClick={submitHandler}
                type="submit"
                className="w-full rounded-md bg-rose-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddressForm
