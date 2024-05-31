import img2 from "../assets/all-Categories/monkey_allCategories1.jpeg"
import img3 from "../assets/all-Categories/monkey_allCategories2.jpeg"
import img4 from "../assets/all-Categories/monkey_allCategories3.jpeg"
import img1 from "../assets/all-Categories/monkey_allCategories4.jpeg"
//import Load from "../components/ui/Load"
import Search from "../components/ui/Search"
import Sponsor from "../components/ui/Sponsor"



const ContactPage = () => {
  return (
    <div>
        <div>
          <img src="https://images.bewakoof.com/uploads/grid/app/CustomisationCampaignPage-desktop-01-1687842231.jpg"></img>
        </div>
        <br></br>
      <div className="flex w-full items-center justify-center">
        <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-teal-500 via-teal-500 to-teal-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
          Create Your Own Desgin Using AI
        </span>
        <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-teal-500 via-teal-500 to-teal-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
          Create Your Own Desgin Using AI
        </h1>
      </div>
      <section className="overflow-hidden">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row mx-auto">
            {/*- Starts component */}{" "}
            <a href="#_">
              {" "}
              <img
                src={img1}
                className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a href="#_">
              {" "}
              <img
                src={img2}
                className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a href="#_">
              {" "}
              <img
                src={img3}
                className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a href="#_">
              {" "}
              <img
                src={img4}
                className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            {/*- Ends component */}
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center text-xl p-5 font-light text-balance text-center text-opacity-40">
        <span>"Revolutionize your wardrobe with our AI-powered tool! Seamlessly merge cutting-edge text with captivating imagery to create stunning T-shirt designs that reflect the latest fashion trends.
          Effortlessly express your unique style with personalized creations that stand out in any crowd. Elevate your fashion game with ease!"</span>
      </div>
      <br></br>
      <div className="py-5">
        <Search />
      </div>
      <br></br>
      <br></br>
      <Sponsor />
      <br></br>
      <section className="text-gray-700 body-font">
        <div className="flex justify-center mt-10 text-4xl font-regular">Why Monkey?</div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/007/100/305/non_2x/cart-icon-sign-symbol-logo-vector.jpg"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Easy to Shop
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://t4.ftcdn.net/jpg/03/19/36/27/360_F_319362751_gAgkW6OFIoxLpEV7OljBSF4xNQtuGa6n.jpg"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Budget Friendly
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://thumbs.dreamstime.com/b/print-164210090.jpg"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Delivery On Time
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/90/63/76/360_F_390637619_gmmtMv9E7p1vo0fF03HovJODj14F6Hcd.jpg"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Easy Return Policy
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <div className="flex justify-items-center items-center space-x-10">

        <div
          className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-blue-500 hover:-translate-y-2 hover:shadow-xl shadow-blue-600"
        >
          <div
            className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-cyan-500"

          ></div>
          <h2 className="text-2xl font-bold mb-2 text-white">Our Vision</h2>
          <p className="text-gray-200 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis
            magna quis lectus fermentum, quis scelerisque orci pellentesque. Duis id
            porta justo. Sed ac enim id justo tincidunt hendrerit id ac lectus.
            Pellentesque maximus posuere tortor vitae consequat.
          </p>

        </div>
        <div
          className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-blue-500 hover:-translate-y-2 hover:shadow-xl shadow-blue-600"
        >
          <div
            className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-cyan-500"

          ></div>
          <h2 className="text-2xl font-bold mb-2 text-white">Our Vision</h2>
          <p className="text-gray-200 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis
            magna quis lectus fermentum, quis scelerisque orci pellentesque. Duis id
            porta justo. Sed ac enim id justo tincidunt hendrerit id ac lectus.
            Pellentesque maximus posuere tortor vitae consequat.
          </p>

        </div>
        <div
          className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-blue-500 hover:-translate-y-2 hover:shadow-xl shadow-blue-600"
        >
          <div
            className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-cyan-500"

          ></div>
          <h2 className="text-2xl font-bold mb-2 text-white">Our Target</h2>
          <p className="text-gray-200 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis
            magna quis lectus fermentum, quis scelerisque orci pellentesque. Duis id
            porta justo. Sed ac enim id justo tincidunt hendrerit id ac lectus.
            Pellentesque maximus posuere tortor vitae consequat.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  )
}

export default ContactPage
