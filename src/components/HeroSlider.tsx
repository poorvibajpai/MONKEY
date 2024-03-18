// import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

type HeroProps = {
  items: string[];
}
const HeroSlider = ({ items }: HeroProps) => {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
      >
        {
          items.map((img,i) =>
            <div key={i}>
              <img src={img} className="w-full h-full object-cover"/>
              {/* <p className="legend">Legend 1</p> */}
            </div>
          )}

      </Carousel>
    </div>
  )
}

export default HeroSlider
