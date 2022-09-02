import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from '../../images/logo.png'


const HomeNav = () => {
  const user = useSelector((state) => state.user);


  return (
    <div style={{ zIndex: 200 }} className="navbar shadow-lg fixed top-0 w-full bg-white ">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li> <a href='#Home' className=" hover:text-primary">
              Resources{" "}
            </a></li>
            <li tabIndex="0">
              <a href='#Home' className="justify-between">
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
              <ul className="p-2">
                <li><a href='#Home'>Submenu 1</a></li>
                <li><a href='#Home'>Submenu 2</a></li>
              </ul>
            </li>
            <li><a href='#Home'>Item 3</a></li>
            <Link to="/login" className="flex items-center justify-center text-xl  mx-5  hover:text-primary">Log In</Link>
            <button className="bg-blue-600 lg:text-xl lg:px-3 lg:py-2 text-white">
              Get Proman for free

            </button>
          </ul>
        </div>
        <div>
          <button className="lg:px-8 text-primary text-3xl font-bold">
            <img style={{ height: '32px' }} src={logo} alt="" />

          </button>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <button className="flex items-center justify-center mx-3 py-5 hover:text-primary ">
              Resources{" "}
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </button>
            {/* <li tabIndex="0"> */}
            <button className="flex items-center justify-center mx-3 py-5 hover:text-primary ">
              Solution{" "}
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </button>
            {/* <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul> */}
            {/* </li> */}
            <button className="flex items-center justify-center mx-3 py-5 hover:text-primary ">
              Plans{" "}
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </button>
            <button className="flex items-center justify-center mx-3 py-5 hover:text-primary">
              Pricing{" "}
            </button>
            <button className="flex items-center justify-center mx-3 py-5 hover:text-primary  ">
              Resources{" "}
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </button>
          </ul>
        </div>
      </div>

      <div className="navbar-end ">
      {!user?.email && <div className='hidden lg:flex'>
           <Link to="/login" className="flex items-center justify-center text-xl  mx-5  hover:text-blue-600">Log In</Link>
          <button className="bg-primary lg:text-xl lg:px-3 lg:py-2 text-white">
            Get Proman for free

          </button>
        </div>}
       { user?.email && <button className="bg-blue-600 h-full lg:text-xl lg:px-3 lg:py-2 text-white">
           <Link to="/my-board" className="flex items-center justify-center text-xl  mx-5 ">Go to boards</Link>
            
          </button>}

      </div>
    </div>
  );
};

export default HomeNav;
