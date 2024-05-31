
import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.jpeg";
import userLogo from "../assets/user.png"
import { removeUser } from "../redux/slices/userSlice";
import toast from "react-hot-toast";
type NavItems = {
  to: string
  name: string
}

const NavBar = ({ navItems }: { navItems: NavItems[] }) => {
  const cart = useSelector((state: any) => state.cart.cartItems)
  const user = useSelector((state: any) => state.user.user) as UserInfo

  const dispatch = useDispatch();

  const isUser = Object.keys(user).length != 0;

  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0)
  }, [location])

  const logoutHandler = ()=>{
    const sure = confirm("Are you Sure want to logout ?");
    if(!sure) return

    dispatch(removeUser())
    toast.success("Logout Successfully.")
    
  }
  return (
    <div className="relative w-full bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="w-[15%]">
          <Link to={"/"}><img src={logo} alt="" className="w-full h-full" /></Link>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={`menu-links text-base font-semibold ${item.name == "Sale" ? "text-red-500 hover:text-lime-500" : "text-white hover:text-white"} `}
                // className={`text-base font-semibold ${item.name == "Sale" ? "text-red-500 hover:text-red-600" : "text-white hover:text-yellow-500"}  `}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          {
            isUser ? 
              <img src={user.photoUrl || userLogo} onClick={logoutHandler} className="w-8 h-8 cursor-pointer rounded-full" alt="" />
              : <Link to={"/signin"} className="user-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </Link>
          }
          <Link to={"/cart"} className="cart-icon relative cursor-pointer" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span className="absolute cart-count -top-2 -right-1 bg-white text-black w-5 h-5 rounded-full flex text-xs font-bold items-center justify-center p-2">{cart?.length}</span>
          </Link>
          {/* <Cart/> */}

        </div>
        <div className="lg:hidden">
        </div>
      </div>
    </div>
  )
}

export default NavBar
