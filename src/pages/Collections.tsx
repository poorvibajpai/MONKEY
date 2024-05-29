// import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Filter from "../components/Filter"
import ProductCard from "../components/ProductCard"
import NoItem from "../components/ui/NoItem"
import ProductSkeleton from "../components/ui/ProductSkeleton"
import useFetch from "../hooks/useFetch"

const Collections = () => {
  const { category } = useParams()

  let heading = category
  let url = "/products/filterdProducts?subCategory=";
  
  switch (category) {
    case "mens":
      heading = "Monkey Man"
      url += "men";
      break
    case "womens":
      heading = "Monkey Women"
      url += "women";
      break
    case "rich-collection":
      heading = "Rich Collection"
      url += "customized";
      break
    default:
      heading = "All Products"
      url = "/products"
      break
  }



  
  const { data, error, loading }: { data: ProductType[], error: any, loading: boolean } = useFetch(url);
  const [filterCategory, setFilterCategory] = useState<string[] | null>(null)
  const [filterData, setFilterData] = useState(data)
  if (error) {
    return <NoItem />
  }
  useEffect(() => {
    if (loading) return;

    if (!error && !loading && !filterCategory || filterCategory?.length == 0) {
      setFilterData(data)
      return;
    }

    if (!error && filterCategory != null) {
      let finalData = data.filter((product)=>(
        filterCategory.includes(product.category)
      ))
      setFilterData(finalData)

    }

  }, [loading, filterCategory, category, data])

  return (
    <div className="mb-28">
      <h1 className="text-4xl text-center my-10">
        {heading}
      </h1>
      <section className="flex gap-3">
        <aside className="w-1/4">
          <Filter setFilterCategory={setFilterCategory} filterCategory={filterCategory} />
        </aside>
        <main className="w-3/4 border border-gray-200 flex justify-evenly flex-wrap">
          {loading && Array.from({ length: 8 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
          {
            !loading && !error && filterData?.length > 0 && filterData?.map((item, i) => (
              <ProductCard width={"20%"} key={i} imgUrl={item.image} data={item} />
            ))
          }
          {
            !loading && error && <NoItem />
          }

        </main>
      </section>
    </div>
  )
}

export default Collections
