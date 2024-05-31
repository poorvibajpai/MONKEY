import img1 from "../assets/all-Categories/monkey_allCategories1.jpeg"
import img2 from "../assets/all-Categories/monkey_allCategories2.jpeg"
import img3 from "../assets/all-Categories/monkey_allCategories3.jpeg"
import img4 from "../assets/all-Categories/monkey_allCategories4.jpeg"
import img5 from "../assets/all-Categories/monkey_allCategories5.jpeg"
import img6 from "../assets/all-Categories/monkey_allCategories6.jpeg"
import img7 from "../assets/all-Categories/monkey_allCategories7.jpeg"
import img8 from "../assets/all-Categories/monkey_allCategories8.jpeg"

const Example = () => {
  return (
    <div>
     <div className="flex justify-center space-x-5">
        <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={img1}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
    </div>
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={img2}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
    
    </div>
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={img3}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
    </div>
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={img4}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
    </div>
    </div>
    <br></br>
    <div className="flex justify-center space-x-5">
        <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={img5}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
    </div>
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={img6}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
    
    </div>
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={img7}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
    </div>
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={img8}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
    </div>
    </div>
    </div>
  )
}

export default Example
