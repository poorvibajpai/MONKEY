import toast from "react-hot-toast";

export function addToCart(product: CartItemType) {

 const cartItem = localStorage.getItem("cartItem") || "";

 if (!cartItem) {
  localStorage.setItem("cartItem", JSON.stringify([product]));
 } else {
  const cartItems = JSON.parse(cartItem) as CartItemType[];
  const index = cartItems.findIndex((item) => item._id == product._id);
  if (index == -1) {
   cartItems.push(product);
  } else {
   cartItems[index].quantity! += 1;
  }
  localStorage.setItem("cartItem", JSON.stringify(cartItems));
 }
 toast.success("Item added to cart");
 return true;
}
