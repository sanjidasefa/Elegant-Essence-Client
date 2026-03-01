import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../Extra/Logo";
import { IoPersonCircleOutline } from "react-icons/io5";
import Header from "./Header";
import { useAuth } from "../../hooks/useAuth";
import profile from '../../assets/profile.png'
import { BsSunFill } from "react-icons/bs";
import { GoMoon } from "react-icons/go";
const Navber = () => {
  const { user } = useAuth();
  
   const handleThemes = (checked) => {
  const html = document.documentElement;
  if (checked) {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
};

  return (
    <>
      <div className="navbar bg-white shadow-xl px-12 py-4 md:px-20 md:py-5">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-cyan-500 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className=" dropdown-content  rounded-box z-1 mt-3  shadow"
            >
              <Header></Header>
            </ul>
          </div> */}
          <Link to='/'><h1 className=''>
            <Logo></Logo>
          </h1></Link>
        </div>
        <div className="navbar-end">

       <label className="toggle mr-2 text-base-content ">
  <input  type="checkbox"    onChange={(e)=> handleThemes(e.target.checked)}  defaultChecked={localStorage.getItem('theme') === "dark"}/>
  <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
   <BsSunFill />
  </svg>
  <GoMoon />
</label>
          {
            !user ? <NavLink to='/login' className="btn ">Login</NavLink> : ''
          }
          {user ? (
            <NavLink to="/My-Profile" className="text-cyan-500">
              {" "}
              <img
                src={user?.photoURL || profile}
                className="rounded-full w-10 mr-3 h-10"
                alt=""
              />
            </NavLink>
          ) : (
            <NavLink to="/" className="text-cyan-500">
              <IoPersonCircleOutline className="w-20 h-10"></IoPersonCircleOutline>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navber;
