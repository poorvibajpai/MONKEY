
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.jpeg";
import userLogo from "../assets/user.png"
import { removeUser } from "../redux/slices/userSlice";
import toast from "react-hot-toast";
import { Menu } from "lucide-react";
type NavItems = {
  to: string
  name: string
}

const NavBar = ({ navItems }: { navItems: NavItems[] }) => {
  const cart = useSelector((state: any) => state.cart.cartItems)
  const user = useSelector((state: any) => state.user.user) as UserInfo
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch();

  const isUser = Object.keys(user).length != 0;

  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0)
    setOpen(false)
  }, [location])

  const logoutHandler = () => {
    const sure = confirm("Are you Sure want to logout ?");
    if (!sure) return

    dispatch(removeUser())
    setOpen(false)
    toast.success("Logout Successfully.")

  }
  return (
    <div className="relative w-full bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="w-[150px] flex items-center justify-center lg:w-[15%]">
          <Link to={"/"}><img src={logo} alt="" className="w-full h-full" /></Link>
        </div>

        <ul className="lg:inline-flex hidden space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={`menu-links text-base font-semibold ${item.name == "Custom Design" ? "text-rose-600 hover:text-cyan-500" : "text-white hover:text-white"} `}
              // className={`text-base font-semibold ${item.name == "Sale" ? "text-red-500 hover:text-red-600" : "text-white hover:text-yellow-500"}  `}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex gap-5 items-center">
          {
            isUser ?
              <div className="flex gap-2 items-center">
                <img src={user.photoUrl || userLogo} className="w-8 h-8 cursor-pointer rounded-full" alt="user-icon" />
                <button onClick={logoutHandler} className="border-2 border-white px-4 py-1 rounded-full hover:bg-white hover:text-black hover:border-black hover:font-semibold transition-all ease-out duration-300">Logout</button>
              </div>
              : <Link to={"/signin"} className="user-icon border-2 border-white px-6 py-1 rounded-full hover:bg-white hover:text-black hover:border-black hover:font-semibold transition-all ease-out duration-300">
                Login
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

        <div className="flex gap-5 lg:hidden">
          <Link to={"/cart"} className="cart-icon relative cursor-pointer" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span className="absolute cart-count -top-2 -right-1 bg-white text-black w-5 h-5 rounded-full flex text-xs font-bold items-center justify-center p-2">{cart?.length}</span>
          </Link>
          <Menu onClick={() => setOpen(!open)} width={24} height={24} className="cursor-pointer" />
        </div>


        {/* Responsive navbar start  */}
        {
          open &&
          <div className="bg-[#1b1b1b] w-full h-screen fixed top-[70px] left-0 z-10 lg:hidden">
            <ul className="flex flex-col items-center gap-5 p-5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className={`text-base menu-links font-semibold ${item.name == "Custom Design" ? "text-rose-600 hover:text-cyan-500" : "text-white hover:text-white"} `}
                  // className={`text-base font-semibold ${item.name == "Sale" ? "text-red-500 hover:text-red-600" : "text-white hover:text-yellow-500"}  `}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex justify-center gap-5 pb-5">
              {
                isUser ?
                  <div className="flex gap-2 items-center">
                    <img src={user.photoUrl || userLogo} className="w-8 h-8 cursor-pointer rounded-full" alt="user-icon" />
                    <button onClick={logoutHandler} className="border-2 border-white px-4 py-1 rounded-full hover:bg-white hover:text-black hover:border-black hover:font-semibold transition-all ease-out duration-300">Logout</button>
                  </div>
                  : <Link to={"/signin"} className="user-icon border-2 border-white px-6 py-1 rounded-full hover:bg-white hover:text-black hover:border-black hover:font-semibold transition-all ease-out duration-300">
                    Login
                  </Link>
              }
            </div>
          </div>
        }


        {/* Responsive navbar end  */}
      </div>
    </div>
  )
}

export default NavBar
