import React, { useEffect, useRef, useState } from 'react'
// import MyButton from '../components/ui/MyButton'
import { ColorResult, SketchPicker } from 'react-color'

import HeroSection from './HeroSection';


const galleryImg = "https://mockey.ai/assets/image-add-black.60f3b7ff.svg"
const colorImg = "https://mockey.ai//assets/color.837f7442.svg"
const customImg = "https://res.cloudinary.com/dhz7thzvq/image/upload/v1713011169/monkey/customize/custom-model-1.png";

const CustomProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const [showPicker, setShowPicker] = useState(false)
  const [imageUrl, setImageUrl] = useState<string | null>(customImg);
  // const [imageSrc, setImageSrc] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const [isDragging, setIsDragging] = useState<boolean>(false);
  // const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (imageUrl && canvas && ctx) {
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width; // Set canvas width to match image width
        canvas.height = img.height; // Set canvas height to match image height
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = imageUrl;
    }
  }, []);

  const isDarkColor = (color: string) => {
    color = color.substring(1);
    // Convert hex color to RGB
    const r = parseInt(color.substring(0, 2), 16) / 255;
    const g = parseInt(color.substring(2, 4), 16) / 255;
    const b = parseInt(color.substring(4, 6), 16) / 255;
    // Calculate luminance using the relative luminance formula
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    // Return true if luminance is less than a threshold, indicating a dark color
    return luminance < 0.5;
  };
  function handleColorChange(e: ColorResult) {
    setSelectedColor(e.hex)
  }
  return (
   <div>
     <HeroSection />
     <section className='grid grid-cols-4 space-x-6'>
      <div className="left col-span-1 h-[750px] border rounded-lg drop-shadow-lg bg-white shadow-xl">
        <div className='border-b-2 p-5'>
          <div className='flex items-center gap-1'>
            <img src={galleryImg} alt="gallery-img" className='w-[20px] aspect-square object-contain' />
            <h1 className='text-lg font-medium'>Choose Your Desgine</h1>
          </div>
          <div className='my-5'>
            <label htmlFor="desgine" className='flex w-full items-center gap-2 justify-center rounded bg-pink-500 hover:opacity-85 cursor-pointer p-3 font-medium text-gray text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
              </svg>
              Add Desgine
            </label>
            <input type="file" className='hidden' id='desgine' onChange={handleFileChange} />
          </div>
        </div>
        <div className='border-b-2 p-5'>
          <div className='flex items-center gap-1'>
            <img src={colorImg} alt="gallery-img" className='w-[20px] aspect-square object-contain' />
            <h1 className='text-lg font-medium'>Choose Your Colour</h1>
          </div>
          <div className='my-5 flex flex-col items-center' onClick={() => setShowPicker(!showPicker)}>
            <div className={`border mb-2 flex w-full items-center gap-2 justify-center rounded hover:opacity-85 cursor-pointer p-3 font-medium text-gray text-${isDarkColor(selectedColor) ? "white" : "black"}`} style={{ backgroundColor: selectedColor }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
              </svg>
              Change Colour
            </div>
            {showPicker && <SketchPicker color={selectedColor} onChange={handleColorChange} />}
          </div>
        </div>

        {/* <div className='w-full p-5'>
          <MyButton>Add to Cart</MyButton>
        </div> */}
      </div>
      <div className="right col-span-2 h-[750px] flex justify-center items-center">
        {/* <img  src={customImg} alt="custom-img" className='w-full hidden h-full' style={{ backgroundColor: selectedColor }} /> */}
        <canvas ref={canvasRef} className='w-full h-full border-2' style={{ backgroundColor: selectedColor }} >
        </canvas>
      </div>
    </section>
    <br></br>
   
   </div>
  )
}

export default CustomProductPage
