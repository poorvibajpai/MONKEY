import Collections from "../pages/Collections";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import { SignInPage } from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

const websiteRoutes = [
  {
    path:"/",
    element:HomePage
  },
  
  {
    path:"/collections/:category",
    element:Collections
  },

  {
    path:"/contact-us",
    element:ContactPage
  },
  {
    path:"/signin",
    element:SignInPage
  },
  {
    path:"/signup",
    element:SignUpPage
  },
  {
    path:"/product/:id",
    element:ProductPage
  },
]

export default websiteRoutes;