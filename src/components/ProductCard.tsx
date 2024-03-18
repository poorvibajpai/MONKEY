// import React from 'react'

import { Link } from "react-router-dom"
import productImg from "../assets/monkey_product_1.jpeg"
const sizes = [
  "XS", "S", "M", "L", "XL", "XXL"
]


type ProductProps = {
  width?: string;
  imgUrl?:string;
}

const ProductCard = ({ width,imgUrl }: ProductProps) => {
  return (
    <div className={`rounded-md border w-${width} my-2 h-max`}>
      <Link to={"/product/1"} className="block overflow-hidden">
        <img
          // src="https://overlays.co/cdn/shop/files/DSC00270copy2.jpg?v=1699162260&width=300"
          src={imgUrl}
          alt="Laptop"
          className="max-h-[350px] w-full rounded-sm hover-effect hover:scale-x-110 transition-transform duration-1000 ease-in-out cursor-pointer hover:transform hover:scale-110"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">Nike Airmax v2</h1>
          <h1 className='my-2 text-orange-600 font-semibold'>From ₹ 2,899.00</h1>
          <div className="mt-3 flex items-center space-x-2">
            {sizes.map((size) =>
              <span key={size} className="flex-1 text-center cursor-pointer rounded-sm border border-gray-400 p-1 px-2 text-base font-medium hover:bg-[#e6e6e6] hover:border-black">
                {size}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div >
  )
}
export default ProductCard
