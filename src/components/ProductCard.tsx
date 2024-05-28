// import React from 'react'
import { Link } from "react-router-dom"
// import productImg from "../assets/all-Categories/monkey_allCategories4.jpeg"
// const sizes = [
//   "XS", "S", "M", "L", "XL", "XXL"
// ]
import productImg from "../assets/category/00495429800-e1.jpg"



type ProductProps = {
  width?: string;
  imgUrl?: string;
  data?: ProductType
}

const ProductCard = ({ width, imgUrl, data, }: ProductProps) => {
  return (
    <div className={`rounded-md border w-[${width}] my-2 h-max w-max-[23%]`}>
      <Link to={`/product/${data?._id}`} className="block overflow-hidden">
        <div className="max-h-[350px] overflow-hidden">
          <img
            src={data?.image || imgUrl ? imgUrl : productImg}
            alt={data?.name || "product image"}
            className="h-[320px] w-full rounded-sm hover-effect hover:scale-x-110 transition-transform duration-1000 ease-in-out cursor-pointer hover:transform hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {data?.name || "Monkey X Series"}
          </h1>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-cyan-500 px-3 py-1 text-[10px] font-light text-white">
              #Monkey
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-cyan-500 px-3 py-1 text-[10px] font-semibold text-white">
              #70%off
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-cyan-400 px-3 py-1 text-[10px] font-semibold text-white">
              #MonkeyX
            </span>
          </div>
          <div className="mt-5 flex items-center space-x-2">
            <span className="block text-sm font-semibold">Size : </span>
            <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
              M
            </span>
            <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
              L
            </span>
            <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
              Xl
            </span>
          </div>
          <div className="flex py-2">
            <h1 className='text-black md:text-base lg:text-lg xl:text-xl font-light'>₹ {data?.price || "999"}</h1>
            <h1 className="font-segoe pl-2 text-sm text-red-400 line-through md:text-base lg:text-lg xl:text-xl">
              ₹ 1999
            </h1>

          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-3"
          >
            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
          </svg>
          <button className="mt-8 w-full inline-flex items-center justify-center rounded-xl bg-yellow-800 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-yellow-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">Add To Cart</button>
        </div>
      </Link>
    </div >
  )
}
export default ProductCard
