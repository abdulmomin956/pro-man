import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from '../../images/logo.png'


const HomeNav = () => {
  const user = useSelector((state) => state.user);


  return (
    <div style={{ zIndex: 200 }} className="navbar shadow fixed top-0 w-full bg-white lg:px-12">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link to="/login" className="flex items-center justify-center text-xl  mx-5  hover:text-primary">Log In</Link>
            <button className="bg-blue-600 lg:text-xl lg:px-3 lg:py-2 text-white">
              Get Proman for free
            </button>
          </ul>
        </div>
        <div>
          <div className="lg:px-8 text-primary text-3xl font-bold">
            {user?.email && <button>
              <Link to="/my-board"><img style={{ height: '32px' }} src={logo} alt="" /></Link>
            </button>}
            {!user?.email && <img style={{ height: '32px' }} src={logo} alt="" />}
          </div>

        </div>

      </div>

      <div className="navbar-end ">
        {!user?.email && <div className='hidden lg:flex'>
          <Link to="/login" className="flex items-center justify-center text-xl  mx-5  hover:text-blue-600">Log In</Link>
          <button className="bg-primary lg:text-xl lg:px-3 lg:py-2 text-white">
            Get Proman for free

          </button>
        </div>}
        {user?.email && <button className="bg-blue-600 h-full lg:text-xl lg:px-3 lg:py-2 text-white">
          <Link to="/my-board" className="flex items-center justify-center text-xl  mx-5 ">Go to boards</Link>

        </button>}

      </div>
    </div>
  );
};

export default HomeNav;
