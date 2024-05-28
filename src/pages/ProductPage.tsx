import Items from "../components/Items";
import ProductDetail from "../components/ProductDetail";
import Review from "../components/Review";



export default function ProductPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
      <ProductDetail/>
      <Review/>
      <h1 className="text-3xl my-3 font-serif border-b-2 border-b-zinc-700 inline-block ">Similar Products</h1>
      <Items />
      <br /><br /><br />

    </div>
  );
}

