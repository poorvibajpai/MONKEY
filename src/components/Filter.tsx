
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: ["jackets","sweatshirts","hoodies","tshirts","joggers","shirts"],
  },
]
type Props = {
  filterCategory:string[] | null;
  setFilterCategory:React.Dispatch<React.SetStateAction<string[] | null>>;
}
export default function Filter({setFilterCategory , filterCategory}:Props) {
  const handleOnchange = (e:any)=>{
    if(filterCategory == null){
      setFilterCategory([e.target.value])
      return
    }
    if(!filterCategory?.includes(e.target.value)){
      setFilterCategory([...filterCategory , e.target.value])
    }else{
      setFilterCategory(filterCategory?.filter((item)=>item != e.target.value))
    }
  }

  return (
    <section className="flex justify-center item-center w-full h-auto border border-gray-200 p-2 sm:p-4">
    {filters.map((filter) => (
      <div key={filter.id} className="flex justify-center space-x-6 items-center">
        <ul className="grid grid-cols-3 lg:grid-cols-6 sm:grid-cols-3 ">
          {filter.options.map((value) => (
            <li key={value} className="p-1">
              <div className="flex items-center">
                <input
                  id={`${filter.id}-${value}`}
                  name={value}
                  type="checkbox"
                  value={value}
                  onChange={handleOnchange}
                  className="h-5 w-5 sm:h-5 border rounded-md sm:w-5 hover:bg-gray-100  accent-cyan-400"
                />
                <label
                  htmlFor={`${filter.id}-${value}`}
                  className="ml-3 text-sm font-medium text-black capitalize"
                >
                  {value}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </section>
  
  )
}
