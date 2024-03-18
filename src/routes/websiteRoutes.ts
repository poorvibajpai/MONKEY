import { lazy } from "react";

const Collections = lazy(() => import("../pages/Collections"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const SignInPage = lazy(() => import("../pages/SignInPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const CartPage = lazy(() => import("../pages/CartPage"));

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
];

export default websiteRoutes;
