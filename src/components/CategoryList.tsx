import ProductCard from "./ProductCard"
import img1 from "../assets/category/model-74-thumb.png"
import img2 from "../assets/category/model-179-thumb (1).png"
import img3 from "../assets/category/model-190-thumb.png"
import img4 from "../assets/category/model-271-thumb.png"
import img5 from "../assets/category/model-270-thumb.png"
import img6 from "../assets/category/model-66-thumb.png"
import img7 from "../assets/category/model-69-thumb.png"
import img8 from "../assets/category/model-273-thumb.png"
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
  {
    imgUrl:img5
  },
  {
    imgUrl:img6
  },
  {
    imgUrl:img7
  },
  {
    imgUrl:img8
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
          <ProductCard width={"20%"} key={i} imgUrl={item.imgUrl}/>
        ))}

      </div>
    </div>
  )
}

export default CategoryList
