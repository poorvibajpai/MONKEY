// import React from 'react'
import Video from '../components/Video'

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

const HomePage = () => {
  const { data, error, loading } = useFetch("/products/latest?id=1");
  const { data:latestData2, error:latestError, loading:latestLoading } = useFetch("/products/latest?id=2");

  return (
    <div className="">
      {/* <HeroSlider items={[img1, img2, img3]} /> */}
      <HeroSlider items={[img1, img2, img3]} />

      {/* ------------------ category jacket - sweatshirt - hoodies ------------------- */}

      <Items
        list={["JACKETS", "SWEATSHIRTS", "HOODIES"]}
        data={data || []}
        error={error}
        loading={loading}
        isPassingData={true}
        defaultValue="JACKETS"
      />
<div className='flex justify-center items-center py-4'>
     <img src="https://sanfe.in/cdn/shop/collections/Sanfe-b1g1-banner.gif?v=1662710970"></img>
     </div>
      <HeroSlider items={[img4, img5]} />
      <Items
        list={["JACKETS", "SWEATSHIRTS", "HOODIES"]}
        data={data || []}
        error={error}
        loading={loading}
        isPassingData={true}
        defaultValue="JACKETS"
      />
      <HeroSlider items={[img6, img7]} />

      <Items
        list={["TSHIRTS", "JOGGERS", "SHIRTS"]}
        data={latestData2 || []}
        error={latestError}
        loading={latestLoading}
        isPassingData={true}
        defaultValue="TSHIRTS"
      />

      <AllCategory />
      <Video />
      <Items />
      <BeforeFooter />
    </div>
  )
}

export default HomePage
