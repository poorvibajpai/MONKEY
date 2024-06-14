import { Navigate, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import Review from "../components/Review";
import Loader from "../components/ui/Loader";
import NoItem from "../components/ui/NoItem";
import useFetch from "../hooks/useFetch";

export default function ProductPage() {
  const { id } = useParams();
  if (id == "undefined") {
    return <Navigate to="/" />
  }
  const { data, error, loading }: { data: {product: ProductType,similarProducts: ProductType[]}, error: any, loading: boolean } = useFetch(`/products/product?id=${id}`);

  if (loading) {
    return <Loader />
  }
  if (error || !data) {
    return <NoItem />
  }

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
      <ProductDetail data={data?.product}/>
      <Review/>
      <h1 className="text-3xl my-3 font-serif border-b-2 border-b-zinc-700 inline-block ">Similar Products</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 my-2">
        {!loading && !error && data?.similarProducts?.length! > 0 ? data?.similarProducts?.map((item, i) => (
            <ProductCard key={i} imgUrl={item.image} data={item} />
        ))
          : <NoItem />
        }
      </div>
      <br /><br /><br />

    </div>
  );
}

