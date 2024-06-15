import { Link } from 'react-router-dom';
import image from '../assets/monkey_product_1-removebg-preview.png';

const HeroSection = () => {
  return (
    <div>
      <main className="">
        <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-8 sm:mb-12"></span>
              <h1 className="font-bebas-neue uppercase text-4xl sm:text-6xl lg:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Custom
                <span className="text-3xl sm:text-5xl lg:text-7xl">Design</span>
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-white mt-4 sm:mt-6">
                Dimension of reality that makes change possible and understandable. An
                indefinite and homogeneous environment in which natural events and
                human existence take place.
              </p>
              <div className="flex mt-8 justify-center sm:justify-start">
                <Link
                  to="/custom/create-custom"
                  className="flex justify-center items-center cursor-pointer text-white font-bold relative text-[10px] sm:text-[12px] md:text-[14px] w-[60vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] h-[2.5em] sm:h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-purple-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
                >
                  Create Your Design
                </Link>
              </div>
            </div>
            <div className="sm:w-1/3 lg:w-3/5 flex justify-center mt-8 sm:mt-0 relative">
              <img
                src={image}
                className="w-full max-w-xs md:max-w-sm lg:max-w-md"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
