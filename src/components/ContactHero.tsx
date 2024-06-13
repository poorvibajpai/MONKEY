import img from "../assets/all-Categories/i.jpeg"
const ContactHero = () => {
  return (
    <div>
      <section className="relatve">
  {/* Container */}
  <div className="mx-auto w-full max-w-4xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* Heading Div */}
    <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
      <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
      Exclusive sale on Monkey-themed products shop now{" "}
        <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center px-4 text-white">
          70%OFF
        </span>
        .
      </h1>
      <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">
      Discover our exclusive monkey-themed product sale! Shop now for limited-time discounts and unbeatable deals. Don't miss out, save big today!
      </p>
      {/* Button Wrap */}
      <div className="flex justify-center">
      <button className="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 duration-300  focus:bg-transparent">
    SHOP NOW
</button>

      </div>
    </div>
    {/* Image Div */}
    <div className="relative mx-auto h-[512px]">
      <img
        src={img}
        alt=""
        className="inline-block h-full w-full rounded-xl object-cover sm:rounded-2xl"
      />
      <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black" />
    </div>
  </div>
  {/* BG Images */}
  <img
    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
    alt=""
    className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto"
  />
  <img
    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
    alt=""
    className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block"
  />
</section>

    </div>
  )
}

export default ContactHero
