import HeroSection from "../components/HeroSection"
import Example from "../components/Example"
import Type from "../components/ui/Type"

const Custom = () => {
  return (
    <div>
      <HeroSection />
      <div className="py-5 flex items-center justify-center">
        <Type text="Sample T-Shirt Mockup Templates " />
      </div>
      <Example />
      <br></br>
    </div>
  )
}

export default Custom
