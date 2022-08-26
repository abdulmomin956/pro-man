import React from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div style={{ zIndex: 200 }} class="navbar  font-[inherit] shadow-lg fixed top-0 w-full bg-white ">
      <div class="navbar-start">
        <div class="dropdown ">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li> <a className=" hover:text-blue-600 font-[inherit] ">
              Resources{" "}
            </a></li>
            <li tabindex="0">
              <a class="justify-between">
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
            <Link to="/login" className="flex items-center justify-center text-xl  mx-5  hover:text-blue-600 font-[inherit]">Log In</Link>
            <button className="bg-blue-600 lg:text-xl lg:px-3 lg:py-2 text-white">
              Get Proman for free

            </button>
          </ul>
        </div>
        <div>
          <button className="lg:px-8 text-primary text-3xl font-bold">
            ProMan
          </button>

        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <button className="flex items-center justify-center mx-3 py-5 hover:text-blue-600 font-[inherit] ">
              Resources{" "}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </button>
            {/* <li tabindex="0"> */}
            <button className="flex items-center justify-center mx-3 py-5 hover:text-blue-600 font-[inherit] ">
              Solution{" "}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </button>
            {/* <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul> */}
            {/* </li> */}
            <button className="flex items-center justify-center mx-3 py-5 hover:text-blue-600 font-[inherit] ">
              Plans{" "}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </button>
            <button className="flex items-center justify-center mx-3 py-5 hover:text-blue-600 font-[inherit] ">
              Pricing{" "}
            </button>
            <button className="flex items-center justify-center mx-3 py-5 hover:text-blue-600 font-[inherit] ">
              Resources{" "}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </button>
          </ul>
        </div>
      </div>

      <div class="navbar-end ">
        <div className='hidden lg:flex'>
          <Link to="/login" className="flex items-center justify-center text-xl  mx-5  hover:text-blue-600 font-[inherit]">Log In</Link>
          <button className="bg-blue-600 lg:text-xl lg:px-3 lg:py-2 text-white">
            Get Proman for free

          </button>
        </div>

      </div>
    </div>
  );
};

export default HomeNav;
