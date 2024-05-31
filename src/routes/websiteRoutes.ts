import { lazy } from "react";
import CheckoutSuccess from "../pages/CheckoutSuccess";
import Custom from "../pages/Custom";

const Collections = lazy(() => import("../pages/Collections"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const SignInPage = lazy(() => import("../pages/SignInPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const CartPage = lazy(() => import("../pages/CartPage"));
//const CustomProductPage = lazy(() => import("../components/CustomProductPage"));

const websiteRoutes = [
 {
  path: "/",
  element: HomePage,
 },

 {
  path: "/collections/:category",
  element: Collections,
 },

 {
  path: "/contact-us",
  element: ContactPage,
 },
 {
  path: "/signin",
  element: SignInPage,
 },
 {
  path: "/signup",
  element: SignUpPage,
 },
 {
  path: "/product/:id",
  element: ProductPage,
 },
 {
  path: "/cart",
  element: CartPage,
 },
 {
  path: "/custom",
  element: Custom,
 },
 {
  path: "/success-payment/:sessionId",
  element: CheckoutSuccess,
 },
];

export default websiteRoutes;
