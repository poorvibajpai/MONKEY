// import React from 'react'
import { Link } from "react-router-dom"
import productImg from "../assets/all-Categories/monkey_allCategories4.jpeg"
const sizes = [
  "XS", "S", "M", "L", "XL", "XXL"
]


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
          {/* <div className="mt-3 flex items-center space-x-2">
            {sizes.map((size) =>
              <span key={size} className="flex-1 text-center cursor-pointer rounded-sm border border-gray-400 p-1 px-2 text-base font-medium hover:bg-[#e6e6e6] hover:border-black">
                {size}
              </span>
            )}
          </div> */}
        </div>
      </Link>
    </div >
  )
}
export default ProductCard
