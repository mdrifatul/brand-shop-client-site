import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import carLogo from "../../../assets/logo.jpg";
import userPicture from "../../../assets/user.png";
import { AuthContext } from "../AuthProvider/AuthProvider";


const activeLink = "text-red-500 px-2 font-bold border border-red-500";
const normalLink = "text-black";

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
  const { user, logOut } = useContext(AuthContext);

  const handlelogOut = () => {
    logOut().then().catch();
  };

  return (
    <div>
    <div className="navbar bg-white px-5">
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