// import React from 'react'

import { Link } from "react-router-dom"
import productImg from "../assets/all-Categories/monkey_allCategories4.jpeg"



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
          <button className="w-full bg-black hover:bg-yellow-500 text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
  Buy Now
</button>
          
        </div>
      </Link>
    </div >
  )
}
export default ProductCard
