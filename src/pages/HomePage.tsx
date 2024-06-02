// import React from 'react'
import Video from '../components/Video'
import Type from '../components/ui/Type'
import HeroSlider from "../components/HeroSlider"
import AllCategory from "../components/AllCategory"
import img1 from "../assets/monkey_home_1.jpeg"
import img2 from "../assets/monkey_home_2.jpeg"
import img3 from "../assets/mankey_home_3.jpeg"
import BeforeFooter from "../components/BeforeFooter"
import img4 from "../assets/Banner01.jpeg"
import img5 from "../assets/Banner02.jpeg"
import img6 from "../assets/Banner04.jpeg"
import img7 from "../assets/Banner05.jpeg"
import Items from "../components/Items"
import useFetch from "../hooks/useFetch"
import Card from '../components/Card'

const HomePage = () => {
  const { data, error, loading } = useFetch("/products/latest?id=1");
  const { data: latestData2, error: latestError, loading: latestLoading } = useFetch("/products/latest?id=2");

  return (
    <div className="">
      {/* <HeroSlider items={[img1, img2, img3]} /> */}
      <HeroSlider items={[img1, img2, img3]} />

      {/* ------------------ category jacket - sweatshirt - hoodies ------------------- */}
      <Items
        list={["TSHIRTS", "JOGGERS", "SHIRTS"]}
        data={latestData2 || []}
        error={latestError}
        loading={latestLoading}
        isPassingData={true}
        defaultValue="TSHIRTS"
      />
     
      <Card />
      <br></br>
      <div className='flex justify-center items-center py-4'>
        <img src="https://sanfe.in/cdn/shop/collections/Sanfe-b1g1-banner.gif?v=1662710970"></img>
      </div>
      <HeroSlider items={[img4, img5]} />
     
      <br></br>
      <div>
        <img src="https://i.pinimg.com/originals/96/97/d5/9697d5435dca7c12b2a714ca16c50cf9.gif  "></img>
      </div>
      <br></br>
      <Items
        list={["JACKETS", "SWEATSHIRTS", "HOODIES"]}
        data={data || []}
        error={error}
        loading={loading}
        isPassingData={true}
        defaultValue="JACKETS"
      />
      <HeroSlider items={[img6, img7]} />

      <AllCategory />
      <div>
        <img src="https://images.bewakoof.com/uploads/grid/app/CustomisationCampaignPage-desktop-01-1687842231.jpg"></img>
      </div>
      <br></br>
      <Video />
      <br></br>
      <div> <div className="py-5 flex items-center justify-center">
        <Type text="Summer Sale Collection 50% off just @999" />
        <div className="px-4">
        </div></div>
        <br></br>
        <Items />
        <BeforeFooter />
      </div>
    </div>
  )
}

export default HomePage
