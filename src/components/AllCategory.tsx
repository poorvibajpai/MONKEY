// import React from 'react'

const AllCategory = () => {
  return (
    <div className='my-10'>
      <h1 className='text-3xl text-center my-10'>All Categories</h1>
      <div className='flex mx-auto justify-evenly flex-wrap'>
        {Array.from({ length: 8 }).map((_, i) => (
          <div className='w-[300px]  h-[300px] my-2 relative overflow-hidden' key={i}>
            <img src="https://overlays.co/cdn/shop/files/tshirts.jpg?v=1703314947&width=800" alt="t-shirts" className='w-full h-full transition-transform duration-1000 ease-in-out cursor-pointer hover:transform hover:scale-110' />
            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white'>T-Shirts</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllCategory
