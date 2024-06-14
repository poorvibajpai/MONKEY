import img1 from "../assets/all-Categories/WhatsApp Image 2024-06-02 at 2.42.08 PM.jpeg"
import img2 from "../assets/all-Categories/WhatsApp Image 2024-06-02 at 2.42.09 PM (2).jpeg"
import img3 from "../assets/all-Categories/monkey_allCategories7.jpeg"
import img4 from "../assets/all-Categories/WhatsApp Image 2024-06-02 at 2.42.10 PM (1).jpeg"
import img5 from "../assets/all-Categories/WhatsApp Image 2024-06-02 at 2.42.10 PM.jpeg"
import img6 from "../assets/all-Categories/monkey_allCategories3.jpeg"
import img7 from "../assets/all-Categories/WhatsApp Image 2024-06-02 at 2.42.11 PM.jpeg"
import img8 from "../assets/all-Categories/i.jpeg"

const Example = () => {
  return (
      <div>
     <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 xl:gap-8">
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
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 xl:gap-8">
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
