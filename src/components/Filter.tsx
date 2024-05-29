// import React from 'react'

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: ["jackets","sweatshirts","hoodies","tshirts","joggers","shirts"],
  },
  // {
  //   id: 'sizes',
  //   name: 'Sizes',
  //   options: [
  //     { value: 'xs', label: 'XS' },
  //     { value: 's', label: 'S' },
  //     { value: 'm', label: 'M' },
  //     { value: 'l', label: 'L' },
  //     { value: 'xl', label: 'XL' },
  //     { value: '2xl', label: '2XL' },
  //   ],
  // },
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
    <section className="w-full px-10 border border-gray-200">
      {filters.map((filter) => (
        <div key={filter.id} className="pt-6">
          <h3 className="text-lg font-semibold text-gray-900">{filter.name}</h3>
          <ul className="mt-2">
            {filter.options.map((value) => (
              <li key={value} className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <input
                    id={`${filter.id}-${value}`}
                    name={value}
                    type="checkbox"
                    value={value}
                    onChange={handleOnchange}
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <label
                    htmlFor={`${filter.id}-${value}`}
                    className="ml-3 text-sm font-medium text-gray-900 capitalize"
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
