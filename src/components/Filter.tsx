// import React from 'react'

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
    <section className="w-full h-[8vh] border border-gray-200">
      {filters.map((filter) => (
        <div key={filter.id} className="flex justify-center items-center">
          <br/>
        <ul className="inline-flex items-center space-x-10 py-2">
            {filter.options.map((value) => (
              <li key={value} className="p-2">
                <div className="flex items-center">
                  <input
                    id={`${filter.id}-${value}`}
                    name={value}
                    type="checkbox"
                    value={value}
                    onChange={handleOnchange}
                    className="h-5 w-5 rounded font-2xl border-gray-300 accent-teal-600 text-red-500"
                  />
                  <label
                    htmlFor={`${filter.id}-${value}`}
                    className="ml-3 text-sm font-medium text-red-500 capitalize"
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
