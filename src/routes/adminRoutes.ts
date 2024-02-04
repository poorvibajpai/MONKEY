import CreateProduct from "../pages/admin/CreateProduct";
import Dashboard from "../pages/admin/Dashboard";
import ViewProducts from "../pages/admin/ViewProducts";

const adminRoutes = [
  {
    path:"/admin",
    element:Dashboard
  },
  {
    path:"/admin/create-product",
    element:CreateProduct
  },
  {
    path:"/admin/view-products",
    element:ViewProducts
  },
  
]

export default adminRoutes;