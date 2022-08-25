import React from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className="flex justify-between font-[inherit] shadow-lg">
      <div className="flex pl-5 items-center">
        <div>
            <button className="uppercase text-blue-900 text-3xl font-bold">
                Pro-man
            </button>
        </div>
        <div>
          <button className="flex items-center justify-center mx-3 py-5 hover:text-blue-600 font-[inherit] font-bold">
            Features{" "}
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </button>
        </div>
        <div>
        <button className="flex items-center justify-center mx-3 py-5 hover:text-blue-600 font-[inherit] font-bold">
            Solutions
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </button>
        </div>
        <div>
        <button className="flex items-center justify-center mx-3 py-5 hover:text-blue-600 font-[inherit] font-bold">
            Plan{" "}
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </button>
        </div>
        <div>
        <button className="flex items-center justify-center mx-3 py-5 hover:text-blue-600 font-[inherit] font-bold">
            Pricing{" "}
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </button>
        </div>
        <div>
        <button className="flex items-center justify-center mx-3 py-5 hover:text-blue-600 font-[inherit] font-bold">
            Resources{" "}
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex">
            
        <Link to="/login" className="flex items-center justify-center text-xl font-bold mx-5 py-5 hover:text-blue-600 font-[inherit]">Log In</Link>

        <button className="bg-blue-600 text-xl px-3 py-5 text-white">
            Get Proman for free

        </button>
      </div>
    </div>
  );
};

export default HomeNav;
