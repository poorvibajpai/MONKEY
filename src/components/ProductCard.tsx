// import React from 'react'

import { Link } from "react-router-dom"

const sizes = [
  "XS", "S", "M", "L", "XL", "XXL"
]

const ProductCard = ({ width }: { width?: string }) => {
  return (
    <div className={`rounded-md border w-${width} my-2 h-max`}>
      <Link to={"/product/1"}>
        <img
          src="https://overlays.co/cdn/shop/files/DSC00270copy2.jpg?v=1699162260&width=300"
          alt="Laptop"
          className="aspect-[16/9] w-full rounded-sm md:aspect-auto md:h-[300px] lg:h-[280px]"
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
