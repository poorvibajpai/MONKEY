// import React from 'react'
import { Carousel } from "react-responsive-carousel"
import Banner from '../components/Banner'
//import Carasoul from "../components/Carasoul"
import CategoryList from "../components/CategoryList"
import HeroSlider from "../components/HeroSlider"
import AllCategory from "../components/AllCategory"
import img1 from "../assets/monkey_home_1.jpeg"
import img2 from "../assets/monkey_home_2.jpeg"
import img3 from "../assets/mankey_home_3.jpeg"
import BeforeFooter from "../components/BeforeFooter"


const img4 = "https://overlays.co/cdn/shop/files/3b_dekstop.png?v=1704951198&width=1400"
const img5 = "https://overlays.co/cdn/shop/files/3a_dekstop.png?v=1704951202&width=1400"
const img6 = "https://overlays.co/cdn/shop/files/4a_dekstop.png?v=1704951207&width=1400"
const img7 = "https://overlays.co/cdn/shop/files/4b_dekstop.png?v=1704951201&width=1400"
const HomePage = () => {
  return (
    <div className="">
      {/* <HeroSlider items={[img1, img2, img3]} /> */}
      <HeroSlider items={[img1, img2,img3]} />

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
      <Banner />
      <BeforeFooter/>
    </div>
  )
}

export default HomePage
