// import React from 'react'
import img1 from "../assets/all-Categories/monkey_allCategories1.jpeg"
import img2 from "../assets/all-Categories/monkey_allCategories2.jpeg"
import img3 from "../assets/all-Categories/monkey_allCategories3.jpeg"
import img4 from "../assets/all-Categories/monkey_allCategories4.jpeg"
import img5 from "../assets/all-Categories/monkey_allCategories5.jpeg"
import img6 from "../assets/all-Categories/monkey_allCategories6.jpeg"
import img7 from "../assets/all-Categories/monkey_allCategories7.jpeg"
import img8 from "../assets/all-Categories/monkey_allCategories8.jpeg"

const data = [
  {
    imgUrl:img1,
    name:"Combo"
  },
  {
    imgUrl:img2,
    name:"T-Shirts"
  },
  {
    imgUrl:img3,
    name:"T-Shirts"
  },
  {
    imgUrl:img4,
    name:"T-Shirts"
  },
  {
    imgUrl:img5,
    name:"T-Shirts"
  },
  {
    imgUrl:img6,
    name:"T-Shirts"
  },
  {
    imgUrl:img7,
    name:"T-Shirts"
  },
  {
    imgUrl:img8,
    name:"T-Shirts"
  },
]
const AllCategory = () => {
  return (
    <div className='my-10'>
      <h1 className='text-3xl text-center my-10'>All Categories</h1>
      <div className='flex mx-auto justify-evenly flex-wrap'>
        {data.map((item, i) => (
          <div className='w-[300px]  h-[350px] my-2 relative overflow-hidden' key={i}>
            {/* <img src="https://overlays.co/cdn/shop/files/tshirts.jpg?v=1703314947&width=800" alt="t-shirts" className='w-full h-full transition-transform duration-1000 ease-in-out cursor-pointer hover:transform hover:scale-110' /> */}
            <img src={item.imgUrl} alt="t-shirts" className='w-full h-full transition-transform duration-1000 ease-in-out cursor-pointer hover:transform hover:scale-110' />
            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white'></h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllCategory

