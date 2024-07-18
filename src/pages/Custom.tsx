import HeroSection from "../components/HeroSection"
import Example from "../components/Example"
import Type from "../components/ui/Type"
import Load from "../components/ui/Load"

const Custom = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <div>
          <img src="https://images.bewakoof.com/uploads/grid/app/CustomisationCampaignPage-desktop-01-1687842231.jpg"></img>
        </div>
        <br></br>
        <div className="flex items-center justify-center w-full ">
        <h1 className=" top-0 w-fit h-auto py-4 flex  bg-gradient-to-r from-black via-black to-black bg-clip-text text-6xl font-bold text-transparent text-center select-auto">
        Upload Your Design 
        </h1>
      </div>
      <br></br>
 
      <br></br>
      <Load />
      <div className="py-5 flex items-center justify-center">
        <Type text="Sample Accessories Mockup Templates " />
      </div>
      <Example />
      <br></br>
    </div>
  )
}

export default Custom
