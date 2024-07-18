import { useEffect, useState } from 'react';
import { Download, DownloadIcon } from 'lucide-react';
import { ColorResult, SketchPicker } from 'react-color';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import defaultImg from "../assets/custom-models/model.png"
import model2 from "../assets/custom-models/model-2.png"
import model3 from "../assets/custom-models/model-3.png"
import model4 from "../assets/custom-models/model-4.png"
import model5 from "../assets/custom-models/model-5.png"

const galleryImg = "https://mockey.ai/assets/image-add-black.60f3b7ff.svg";
const colorImg = "https://mockey.ai//assets/color.837f7442.svg";

const modelsData = [
  {
    id: 1,
    img: defaultImg
  },
  {
    id: 2,
    img: model2
  },
  {
    id: 3,
    img: model3
  },
  {
    id: 4,
    img: model4
  },
  {
    id: 5,
    img: model5
  }
]
const CustomProductPage = () => {
  const user = useSelector((state: any) => state.user.user) as UserInfo;
  const navigate = useNavigate();

  const [model,setModel] = useState({id:1,img:defaultImg})
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const [showPicker, setShowPicker] = useState(false);
  const [file, setFile] = useState<File | null>(null)

  const img = new Image();
  const backgroundImg = new Image();

  let isDragging = false;
  let isResizing = false;
  let imgX = 100;
  let imgY = 380;
  let imgWidth = 150;
  let imgHeight = 150;
  const handleSize = 10;
  let currentHandle: any = null;

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  function setCanvasBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = selectedColor; // Set the background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    backgroundImg.src = model.img;
    backgroundImg.onload = () => {
      ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height); // Draw the image on canvas
    };
  }


  useEffect(() => {
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    setCanvasBackground()
    if (file) { drawImage() }

    function handleMouseDown(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const handle = getHandle(x, y);
      console.log(handle)
      if (handle) {
        isResizing = true;
        currentHandle = handle;
      } else if (
        x >= imgX &&
        x <= imgX + imgWidth &&
        y >= imgY &&
        y <= imgY + imgHeight
      ) {
        isDragging = true;
        canvas.style.cursor = "grabbing";
      }
    }

    function handleMouseUp() {
      isDragging = false;
      isResizing = false;
      currentHandle = null;
      canvas.style.cursor = "default";
    }
    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const handle = getHandle(x, y);

      if (isDragging) {
        imgX = x - imgWidth / 2; // Center the image under the mouse pointer
        imgY = y - imgHeight / 2;
        drawImage();
      } else if (isResizing) {
        switch (currentHandle) {
          case "tl":
            imgWidth += imgX - x;
            imgHeight += imgY - y;
            imgX = x;
            imgY = y;
            break;
          case "tr":
            imgWidth = x - imgX;
            imgHeight += imgY - y;
            imgY = y;
            break;
          case "bl":
            imgWidth += imgX - x;
            imgX = x;
            imgHeight = y - imgY;
            break;
          case "br":
            imgWidth = x - imgX;
            imgHeight = y - imgY;
            break;
        }
        drawImage();
      } else if (handle) {
        switch (handle) {
          case "tl":
          case "br":
            canvas.style.cursor = "nwse-resize";
            break;
          case "tr":
          case "bl":
            canvas.style.cursor = "nesw-resize";
            break;
        }
      } else if (
        x >= imgX &&
        x <= imgX + imgWidth &&
        y >= imgY &&
        y <= imgY + imgHeight
      ) {
        canvas.style.cursor = "grab";
      } else {
        canvas.style.cursor = "default";
      }
    }

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);



    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
    }
  }, [selectedColor, file,model])

  function getHandle(mouseX: number, mouseY: number) {
    if (
      mouseX >= imgX - handleSize / 2 &&
      mouseX <= imgX + handleSize / 2 &&
      mouseY >= imgY - handleSize / 2 &&
      mouseY <= imgY + handleSize / 2
    ) {
      return "tl";
    } else if (
      mouseX >= imgX + imgWidth - handleSize / 2 &&
      mouseX <= imgX + imgWidth + handleSize / 2 &&
      mouseY >= imgY - handleSize / 2 &&
      mouseY <= imgY + handleSize / 2
    ) {
      return "tr";
    } else if (
      mouseX >= imgX - handleSize / 2 &&
      mouseX <= imgX + handleSize / 2 &&
      mouseY >= imgY + imgHeight - handleSize / 2 &&
      mouseY <= imgY + imgHeight + handleSize / 2
    ) {
      return "bl";
    } else if (
      mouseX >= imgX + imgWidth - handleSize / 2 &&
      mouseX <= imgX + imgWidth + handleSize / 2 &&
      mouseY >= imgY + imgHeight - handleSize / 2 &&
      mouseY <= imgY + imgHeight + handleSize / 2
    ) {
      return "br";
    }
    return null;
  }

  function drawImage() {
    const reader = new FileReader();
    reader.onload = function (e) {
      img.onload = function () {
        setCanvasBackground();
        ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
      };
      img.src = e.target?.result as string;
    };

    reader.readAsDataURL(file!);

  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files![0]);
  }

  function handleDownload() {
    if(Object.keys(user).length == 0){
      alert("Please Sign In to download")
      navigate("/signin");
      return;
    }
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const link = document.createElement("a");
    link.download = "canvas-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  const isDarkColor = (color: string) => {
    color = color.substring(1);
    const r = parseInt(color.substring(0, 2), 16) / 255;
    const g = parseInt(color.substring(2, 4), 16) / 255;
    const b = parseInt(color.substring(4, 6), 16) / 255;
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance < 0.5;
  };

  function handleColorChange(e: ColorResult) {
    setSelectedColor(e.hex);
  }

  const handleSetModel = (model: {id:number,img:string}) => {
    setModel(model);
  }

  return (
    <>
      <section className='grid grid-cols-1 lg:grid-cols-4 space-x-6 h-full lg:h-[700px]'>
        <div className="left col-span-1 h-[750px] border rounded-lg drop-shadow-lg bg-white shadow-xl">
          <div className='border-b-2 p-5'>
            <div className='flex items-center gap-1'>
              {/* <img src={galleryImg} alt="gallery-img" className='w-[20px] aspect-square object-contain' /> */}
              <h1 className='text-lg font-semibold'>Choose Your Desgine</h1>
            </div>
            <div className='my-5'>
              <label htmlFor="imageUpload" className='flex w-full items-center gap-2 justify-center rounded bg-pink-500 hover:opacity-85 cursor-pointer p-3 font-medium text-gray text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                </svg>
                Add Desgine
              </label>
              <input type="file" onChange={handleChange} className='hidden' id='imageUpload' accept="image/*" />
            </div>
          </div>

          <div className='border-b-2 p-5'>
            <div className='flex items-center gap-1'>
              {/* <img src={colorImg} alt="gallery-img" className='w-[20px] aspect-square object-contain' /> */}
              <h1 className='text-lg font-semibold'>Choose Your Colour</h1>
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

          <div className='border-b-2 p-5'>
            <div className='flex items-center gap-1'>
              <DownloadIcon width={18} height={18} />
              <h1 className='text-lg font-semibold'>Download Your Desgine</h1>
            </div>
            <div className='my-5'>
              <button onClick={handleDownload} className='flex w-full items-center gap-2 justify-center rounded bg-blue-500 hover:opacity-85 cursor-pointer p-3 font-medium text-gray text-white'>
                <Download width={20} height={20} /> Download
              </button>
            </div>
          </div>
        </div>
        <div className="right relative col-span-2 h-[700px] flex justify-center items-center">
          <canvas id='canvas' className='border-2' width={550} height={700} style={{ backgroundColor: selectedColor }}>
          </canvas>
        </div>
        <div className='col-span-1 flex lg:flex-col gap-5 overflow-x-scroll lg:overflow-x-hidden lg:overflow-y-scroll my-5 '> 
          {
            modelsData.map((item, i) => (
              item.id != model.id && <img key={i} onClick={()=>handleSetModel(item)} src={item.img} alt="model" className='w-full object-contain cursor-pointer hover:opacity-85' />
            ))
          }
        </div>
      </section>
      <br></br>
    </>
  );
};

export default CustomProductPage;