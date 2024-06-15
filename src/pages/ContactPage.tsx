import ContactHero from "../components/ContactHero"
import Sponsor from "../components/ui/Sponsor"
const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <Sponsor />
      <br></br><br></br><br></br><br></br><br></br>
      <div>
      <section className="text-gray-700 body-font">
  <div className="flex justify-center mt-10 text-4xl font-medium">Why Monkey?</div>
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap text-center justify-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/007/100/305/non_2x/cart-icon-sign-symbol-logo-vector.jpg"
              className="w-32 mb-3"
            />
          </div>
          <h2 className="title-font font-medium text-2xl text-gray-900">
            Easy to Shop
          </h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://t4.ftcdn.net/jpg/03/19/36/27/360_F_319362751_gAgkW6OFIoxLpEV7OljBSF4xNQtuGa6n.jpg"
              className="w-32 mb-3"
            />
          </div>
          <h2 className="title-font font-medium text-2xl text-gray-900">
            Budget Friendly
          </h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://thumbs.dreamstime.com/b/print-164210090.jpg"
              className="w-32 mb-3"
            />
          </div>
          <h2 className="title-font font-medium text-2xl text-gray-900">
            Delivery On Time
          </h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://t3.ftcdn.net/jpg/03/90/63/76/360_F_390637619_gmmtMv9E7p1vo0fF03HovJODj14F6Hcd.jpg"
              className="w-32 mb-3"
            />
          </div>
          <h2 className="title-font font-medium text-2xl text-gray-900">
            Easy Return Policy
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
     
      <br></br>
      <br></br>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 my-2">

        <div
          className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-green-500 hover:-translate-y-2 hover:shadow-xl shadow-green-600"
        >
          <div
            className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-green-500"

          ></div>
          <h2 className="text-2xl font-bold mb-2 text-white">Our Vision</h2>
          <p className="text-gray-200 line-clamp-3">
          Our target is to connect diverse, quality-focused shoppers with top-tier products, ensuring exceptional value, satisfaction, and a seamless buying experience.
          </p>

        </div>
        <div
          className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-teal-500 hover:-translate-y-2 hover:shadow-xl shadow-teal-600"
        >
          <div
            className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-teal-500"

          ></div>
          <h2 className="text-2xl font-bold mb-2 text-white">Our Sale</h2>
          <p className="text-gray-200 line-clamp-3">
          Unmissable deals await! Enjoy exclusive discounts, limited-time offers, and incredible savings on your favorite products during our mega sale.
          </p>

        </div>
        <div
          className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-purple-500 hover:-translate-y-2 hover:shadow-xl shadow-purple-600"
        >
          <div
            className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-purple-500"

          ></div>
          <h2 className="text-2xl font-bold mb-2 text-white">Our Target</h2>
          <p className="text-gray-200 line-clamp-3">
          Empowering every shopper with seamless, secure, and innovative online experiences, transforming dreams into reality with every click.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  )
}

export default ContactPage
