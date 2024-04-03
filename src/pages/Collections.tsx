// import React from 'react'
import { useParams } from "react-router-dom"
import Filter from "../components/Filter"
import ProductCard from "../components/ProductCard"

const Collections = () => {
  const { category } = useParams()
  let heading = category
  switch(category){
    case "mens":
      heading = "Monkey Man"
      break
    case "womens":
      heading = "Monkey Women"
      break
    case "sale":
      heading = "Sale ends in 5 days"
      break
    case "rich-collection":
      heading = "Rich Collection"
      break
    default:
      heading = "All Products"
      break
  }
  return (
    <div className="mb-28">
      <h1 className="text-4xl text-center my-10">
        {heading}
      </h1>
      <section className="flex gap-3">
        <aside className="w-1/4">
          <Filter />
        </aside>
        <main className="w-3/4 border border-gray-200 flex justify-evenly flex-wrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCard width={"25%"} key={i} />
          ))}

        </main>
      </section>
    </div>
  )
}

export default Collections
