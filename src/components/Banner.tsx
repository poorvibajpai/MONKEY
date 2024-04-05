//import image from '../assets/abc.png'
const Banner = () => {
  return (
  <>
  <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="grid items-center grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
      Monkey X Series
        </h2>
        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="mt-4 text-xl text-gray-600 md:mt-8">
          <div className="flex space-x-4">
          <button className="mt-8 inline-flex items-center justify-center rounded-xl bg-pink-500 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-pink-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"> Add to Cart </button>
          <button className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-blue-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
          alt=""
        />
        <img
          className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
          alt=""
        />
      </div>
    </div>
  </div>
</section>

  </>
  )
}

export default Banner

