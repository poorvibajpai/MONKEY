// import React from 'react'
//import productImg from "../assets/monkey_product_1.jpeg"
import ProductCard from "./ProductCard"
import img1 from "../assets/monkey_product_2.jpeg"
import img2 from "../assets/monkey_product_3.jpeg"
import img3 from "../assets/monkey_product_4.jpeg"
import img4 from "../assets/monkey_product_5.jpeg"
const data = [
  {
    imgUrl:img1
  },
  {
    imgUrl:img2
  },
  {
    imgUrl:img3
  },
  {
    imgUrl:img4
  },
]

const CategoryList = ({ list }: { list?: string[] }) => {
  return (
    <div className="my-10">
      <ul className="flex w-full my-10 justify-center space-x-5">
        {list?.map((name) =>
          <li key={name} className="cursor-pointer text-lg font-semibold">{name}</li>
        )}
      </ul>
      <div className="flex justify-evenly flex-wrap">
        {data.map((item, i) => (
          <ProductCard width={"25%"} key={i} imgUrl={item.imgUrl}/>
        ))}

      </div>
    </div>
  )
}

export default CategoryList
