import {lazy} from "react"

const CreateProduct = lazy(()=>import("../pages/admin/CreateProduct"))
const Dashboard = lazy(()=>import("../pages/admin/Dashboard"))
const ViewProducts = lazy(()=>import("../pages/admin/ViewProducts"))

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