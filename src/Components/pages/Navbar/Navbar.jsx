import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import carLogo from "../../../assets/logo.jpg";
import userPicture from "../../../assets/user.png";
import { AuthContext } from "../AuthProvider/AuthProvider";


const activeLink = "text-red-500 px-2 font-bold border border-red-500";
const normalLink = "text-black dark:text-white";

const navLink = (
  
  <>
    <span className="flex justify-center items-center p-2 text-lg">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        Home
      </NavLink>
    </span>
    <span className="flex justify-center items-center p-2 text-lg mx-2">
    <NavLink to="/addproduct" className={({isActive}) => isActive ? activeLink:normalLink} >Add Product</NavLink>
    </span>
    <span className="flex justify-center items-center p-2 text-lg">
    <NavLink to="/mycart" className={({isActive}) => isActive ? activeLink:normalLink}>My Cart</NavLink>
    </span>
  </>
);



const Navbar = () => {


const [theme, setTheme] = useState('light')

useEffect(() =>{
  if(theme === "dark"){
    document.documentElement.classList.add('dark');
  }else{
    document.documentElement.classList.remove('dark');
  }
},[theme]) 

const handleToggletheme = () =>{
  setTheme(theme === "dark" ? "light" : "dark")
}




  const { user, logOut } = useContext(AuthContext);

  const handlelogOut = () => {
    logOut().then().catch();
  };

  return (
    <div>
    <div className="navbar px-5 dark:bg-black dark:text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <img className="w-14 h-12" src={carLogo} alt="logo" />
        <Link
          to="/"
          className="px-2 font-semibold text-xl md:text-4xl text-red-500"
        >
          DriveWave
        </Link>

      <label className="swap swap-rotate md:p-3 md:mt-2">
          <input onChange={handleToggletheme} type="checkbox" />
          <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        </label>
        
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <p className="invisible md:visible">{user.email}</p>
            <label className="mr-2">
              <div className="w-10 rounded-full mx-auto md:mr-2 md:ml-2">
                <img src={userPicture} />
              </div>
            </label>
            <button
              className="btn btn-sm bg-red-500 text-white hover:"
              onClick={handlelogOut}
            >
              logout
            </button>
          </>
        ) : (
          <Link to="login">
            <button className="btn btn-sm bg-red-500 text-white hover:">
              login
            </button>
          </Link>
        )}

      </div>
    </div>
  </div>
  );
};

export default Navbar;