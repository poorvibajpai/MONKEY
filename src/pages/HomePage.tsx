// import React from 'react'
import { Carousel } from "react-responsive-carousel"
import CategoryList from "../components/CategoryList"
import HeroSlider from "../components/HeroSlider"
import AllCategory from "../components/AllCategory"


const img1 = "https://overlays.co/cdn/shop/files/Banner-_10_2.jpg?v=1706198611&width=1400"
const img2 = "https://overlays.co/cdn/shop/files/2a_dekstop.png?v=1704949886&width=1400"
const img3 = "https://overlays.co/cdn/shop/files/2b_dekstop.png?v=1704949886&width=1400"
const img4 = "https://overlays.co/cdn/shop/files/3b_dekstop.png?v=1704951198&width=1400"
const img5 = "https://overlays.co/cdn/shop/files/3a_dekstop.png?v=1704951202&width=1400"
const img6 = "https://overlays.co/cdn/shop/files/4a_dekstop.png?v=1704951207&width=1400"
const img7 = "https://overlays.co/cdn/shop/files/4b_dekstop.png?v=1704951201&width=1400"

const HomePage = () => {
  return (
    <div className="">
      <HeroSlider items={[img1, img2, img3]} />

      {/* ------------------ category jacket - sweatshirt - hoodies ------------------- */}

      <CategoryList list={["JACKETS", "SWEATSHIRTS", "HOODIES"]} />

      <HeroSlider items={[img4, img5]} />

      <Carousel
        showThumbs={false}
        showStatus={false}
      >
        <div><CategoryList /></div>
        <div><CategoryList /></div>
      </Carousel>

      <HeroSlider items={[img6, img7]} />

      <CategoryList list={["TSHIRT", "JOGGERS", "SHIRTS"]} />

      <AllCategory/>
    </div>
  )
}

export default HomePage
