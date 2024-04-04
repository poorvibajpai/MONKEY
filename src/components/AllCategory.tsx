// import React from 'react'
import img1 from "../assets/category/1688110917303.jpg"
import img2 from "../assets/category/08574402800-e1.jpg"
import img3 from "../assets/category/08062455400-e1.jpg"
import img4 from "../assets/category/07545426401-e1.jpg"
import img5 from "../assets/category/07545350802-e1.jpg"
import img6 from "../assets/category/06318411800-e1.jpg"
import img7 from "../assets/category/04576921102-e1.jpg"
import img8 from "../assets/category/04231426485-e1.jpg"

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

