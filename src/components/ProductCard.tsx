import { Link } from "react-router-dom"
import productImg from "../assets/category/00495429800-e1.jpg"
type ProductProps = {
  imgUrl?: string;
  data?: ProductType
}

const ProductCard = ({ imgUrl, data }: ProductProps) => {
  return (
    <div className={`rounded-md border w-[19.5%] h-max my-2`}>
      <Link to={`/product/${data?._id}`} className="block overflow-hidden">
        <div className="max-h-[350px] overflow-hidden">
          <img
            src={data?.image || imgUrl ? imgUrl : productImg}
            alt={data?.name || "product image"}
            className="h-[300px] w-full object-cover rounded-sm hover-effect hover:scale-x-110 transition-transform duration-1000 ease-in-out cursor-pointer hover:transform hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h1 className="text-base font-semibold line-clamp-1">
            {data?.name || "Monkey X Series"}
          </h1>
          <div className="mt-4 flex gap-2">
            <span className="mb-2 inline-block rounded-full bg-cyan-500 px-3 py-1 text-[10px] font-light text-white">
              #Monkey
            </span>
            <span className="mb-2 inline-block rounded-full bg-cyan-500 px-3 py-1 text-[10px] font-semibold text-white">
              #70%off
            </span>
            <span className="mb-2 inline-block rounded-full bg-cyan-400 px-3 py-1 text-[10px] font-semibold text-white">
              #MonkeyX
            </span>
          </div>
          <div className="mt-3 flex items-center space-x-2">
            <span className="block text-sm font-semibold">Size : </span>
            <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
              M
            </span>
            <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
              L
            </span>
            <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
              Xl
            </span>
          </div>
          <div className="flex py-2">
            <h1 className='text-black md:text-base lg:text-lg xl:text-xl font-light'>₹ {data?.price || "999"}</h1>
          </div>
          <button className="mt-2 w-full inline-flex items-center justify-center rounded-xl bg-red-500 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-red-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">Add To Cart</button>
        </div>
      </Link>
    </div >
  )
}
export default ProductCard
