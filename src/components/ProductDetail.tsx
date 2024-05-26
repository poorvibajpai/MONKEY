import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Loader from "../components/ui/Loader";
import useFetch from "../hooks/useFetch";
import { addToCart } from "../utils/service";
import NoItem from "./ui/NoItem";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateCart } from "../redux/slices/cartSlice";

const product = {
  productId: "1",
  name: "nike",
  unitPrice: 40,
  quantity: 2,
  totalQuantity: 10
}
export default function ProductDetail() {
  const [quantity , setQyantity] = useState(1);
  const dispatch = useDispatch();

  const { id } = useParams();
  if (id == "undefined") {
    return <Navigate to="/" />
  }
  const { data, error, loading }: { data: ProductType, error: any, loading: boolean } = useFetch(`/products/product?id=${id}`);
  if (loading) {
    return <Loader />
  }
  if (error || !data) {
    return <NoItem />

  }

  const addQyantity = () => {
    if(quantity >= 10 ){
      toast.error("Maximum 10 item per order");
      return
    }
    setQyantity(quantity + 1);
  }
  const subQuantity = () => {
    if(quantity > 1){
      setQyantity(quantity - 1);
    }

  }

  const handleCart = ()=>{
    addToCart({...data,quantity});
    dispatch(updateCart())
  }
  return (
    <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
      <div className="col-span-5 grid grid-cols-2 gap-2.5">
        <div
          className="col-span-2 transition duration-150 ease-in hover:opacity-90"
        >
          <img
            src={data?.image}
            alt={data.name}
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="col-span-4 pt-8 lg:pt-0">
        <div className="mb-7 border-b border-gray-300 pb-7">
          <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
            {data?.name}
          </h2>
          <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
            {data?.description}
          </p>
          <div className="mt-5 flex items-center ">
            <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
              {data?.price}
            </div>
            <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
              {data?.oldPrice || data.price + 2500}
            </span>
          </div>
        </div>
        <div className="border-b border-gray-300 pb-3  ">
          <div className="mb-4">
            <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
              size
            </h3>
            <ul className="colors -mr-3 flex flex-wrap">
              {["S", "M", "L", "XL"].map((size) => (
                <li
                  key={size}
                  className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm "
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4 ">
            <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
              color
            </h3>
            <ul className="colors -mr-3 flex flex-wrap">
              {[
                "bg-orange-400",
                "bg-pink-400",
                "bg-violet-600",
                "bg-red-500",
              ].map((color) => (
                <li
                  key={color}
                  className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm"
                >
                  <span className={`block h-full w-full rounded ${color}`} />
                </li>
              ))}
              {data.subCategory == "customized" && <li>
                <Link to={"/custom"}
                  className="block w-full rounded-md  bg-blue-500 py-3 px-6 font-dm text-base font-semibold text-white shadow-xl shadow-blue-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.0]">
                  Customize Your Own
                </Link>
              </li>
              }
            </ul>
          </div>
        </div>
        <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
          <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
            <button
              className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
              disabled = {quantity == 1}
              onClick={subQuantity}
            >
              -
            </button>
            <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
              {quantity}
            </span>
            <button onClick={addQyantity} className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
              +
            </button>
          </div>
          <button
            onClick={handleCart}
            type="button"
            className="h-11 w-full rounded-md  bg-red-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-red-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">
            Add to cart
          </button>
        </div>
        <div className="shadow-sm ">
          <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
            <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
              Product Details
            </h2>
            <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
              <div className="bg-heading h-0.5 w-full rounded-sm" />
              <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out" />
            </div>
          </header>
          <div>
            <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
              Our Customer Experience Team is available 7 days a week and we
              offer 2 ways to get in contact.Email and Chat . We try to reply
              quickly, so you need not to wait too long for a response!.
            </div>
          </div>
        </div>
        <div className="">
          <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
            <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
              Additional Information
            </h2>
          </header>
        </div>
      </div>
    </div>
  );
}