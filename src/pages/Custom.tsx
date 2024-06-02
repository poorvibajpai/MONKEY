import HeroSection from "../components/HeroSection"
import Example from "../components/Example"
import Type from "../components/ui/Type"
import Load from "../components/ui/Load"

const Custom = () => {
  return (
    <div>
      <HeroSection />
      <div>
          <img src="https://images.bewakoof.com/uploads/grid/app/CustomisationCampaignPage-desktop-01-1687842231.jpg"></img>
        </div>
        <br></br>
        <div className="flex w-full items-center justify-center">
        <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-teal-500 via-teal-500 to-teal-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
          Upload Your Design 
        </span>
        <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-teal-500 via-teal-500 to-teal-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
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
