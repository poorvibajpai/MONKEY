// import React from 'react'
//import productImg from "../assets/monkey_product_1.jpeg"
import ProductCard from "./ProductCard"
import img1 from "../assets/category/00399204064-e1.jpg"
import img2 from "../assets/category/01608500043-e1.jpg"
import img3 from "../assets/category/04198723401-e1.jpg"
import img4 from "../assets/category/00962465300-e1.jpg"
import img5 from "../assets/category/01564521800-e1.jpg"
import img6 from "../assets/category/00761448800-e1.jpg"
import img7 from "../assets/category/00761448800-e1.jpg"
import img8 from "../assets/category/00761451712-e1.jpg"
import img9 from "../assets/category/00765403555-e1.jpg"
import img10 from "../assets/category/05575470802-e1.jpg"
import img11 from "../assets/category/07545426401-e1.jpg"
import img12 from "../assets/category/07545350802-e1.jpg"
import img13 from "../assets/category/06318411800-e1.jpg"
import img14 from "../assets/category/04576921102-e1.jpg"
import img15 from "../assets/category/04231426485-e1.jpg"
import ProductSkeleton from "./ui/ProductSkeleton"
import NoItem from "./ui/NoItem"
import { useEffect, useState } from "react"

const tempData = [
  {
    imgUrl: img1,
    price: "499"
  },
  {
    imgUrl: img2,
    price: "999"
  },
  {
    imgUrl: img3,
    price: "1599"
  },
  {
    imgUrl: img4,
    price: "499"
  },
  {
    imgUrl: img5,
    price: "999"
  },
  {
    imgUrl: img6,
    price: "999"
  },
  {
    imgUrl: img7,
    price: "1199"
  },
  {
    imgUrl: img8,
    price: "499"
  },
  {
    imgUrl: img9,
    price: "899"
  },
  {
    imgUrl: img10,
    price: "999"
  },
  {
    imgUrl: img11,
    price: "499"
  },
  {
    imgUrl: img12,
    price: "999"
  },
  {
    imgUrl: img13,
    price: "1599"
  },
  {
    imgUrl: img14,
    price: "499"
  },
  {
    imgUrl: img15,
    price: "999"
  },
]

interface ItemProps {
  list?: string[];
  data?: ProductType[];
  error?: any;
  loading?: boolean
}
const Items = ({ list, data, error, loading }: ItemProps) => {
  const [listCategory, setlistCategory] = useState("jackets");
  const [filterData, setFilterData] = useState<ProductType[] | null>(null);
  useEffect(() => {
    if (!loading && !error) {
      setFilterData(data?.filter((item) => item.category == listCategory) || null)
    }
  }, [loading, error,listCategory])

  if (loading) {
    return (
      <div className="flex justify-evenly flex-wrap my-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}

      </div>
    )
  }


  return (
    <div className="my-10">
      <ul className="flex w-full my-10 justify-center space-x-5">
        {list?.map((name) =>
          <li key={name} onClick={(e: any) => setlistCategory(e.target.innerText.toLowerCase())} className="cursor-pointer text-lg font-semibold">{name}</li>
        )}
      </ul>
      <div className="flex justify-evenly flex-wrap">
        {!loading && !error && filterData?.length! > 0 ? filterData?.map((item, i) => (
          <ProductCard width={"20%"} key={i} imgUrl={item.image} data={item} />
        ))
          : <NoItem />
        }
      </div>
    </div>
  )
}

export default Items
