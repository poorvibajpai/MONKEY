// import React from 'react'

import { Link } from "react-router-dom"
import productImg from "../assets/category/00495429800-e1.jpg"



type ProductProps = {
  width?: string;
  imgUrl?: string;
}

const ProductCard = ({ width, imgUrl }: ProductProps) => {
  return (
    <div className={`rounded-md border w-${width} my-2 h-max`}>
      <Link to={"/product/1"} className="block overflow-hidden">
        <div className="max-h-[350px] overflow-hidden">
          <img
            src={imgUrl ? imgUrl : productImg}
            alt="Laptop"
            className="max-h-[350px] w-full rounded-sm hover-effect hover:scale-x-110 transition-transform duration-1000 ease-in-out cursor-pointer hover:transform hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">Monkey X Series</h1>
          <h1 className='my-2 text-orange-600 font-semibold'>From ₹ 999</h1>
          <button className="mt-8 w-full inline-flex items-center justify-center rounded-xl bg-red-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-red-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">Buy Now</button>
          
        </div>
      </Link>
    </div >
  )
}
export default ProductCard
