// import React from 'react'

import ProductCard from "./ProductCard"

const CategoryList = ({ list }: { list?: string[] }) => {
  return (
    <div className="my-10">
      <ul className="flex w-full my-10 justify-center space-x-5">
        {list?.map((name) =>
          <li key={name} className="cursor-pointer text-lg font-semibold">{name}</li>
        )}
      </ul>
      <div className="flex justify-evenly flex-wrap">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductCard width={"25%"} key={i} />
        ))}

      </div>
    </div>
  )
}

export default CategoryList
