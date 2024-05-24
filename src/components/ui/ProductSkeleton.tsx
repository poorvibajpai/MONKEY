
const ProductSkeleton = () => {
  return (
    <div className="p-4 bg-white rounded shadow w-[90%] md:w-[45%] lg:w-[25%]">
      <div className="animate-pulse flex space-x-4 flex-col">
        <div className="bg-gray-300 h-[250px] w-full"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-8 bg-gray-300 rounded w-3/6"></div>
          <div className="space-y-2 flex flex-col items-center">
            <div className="h-8 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSkeleton
