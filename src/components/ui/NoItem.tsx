import imgurl from "../../assets/no_data_found.jpg"
const NoItem = () => {
  return (
    <div className='w-full h-[450px] flex justify-center items-center'>
      <div className='w-[80%] h-[90%]'>
        <img src={imgurl} alt="" className='w-full h-full object-contain' />
      </div>
    </div>
  )
}

export default NoItem
