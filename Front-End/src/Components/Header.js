import React from "react";
import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-slate-50 ">
      <div className="h-full container max-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to={"/"}> 
          <Logo w={90} h={50} />
          </Link>

        </div>

        <div className=" hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2 ">
          <input
            type="text"
            placeholder="Search Product...."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <FaSearch />
          </div>
        </div>

        <div className="flex items-center gap-7  ">
          <div className="text-3xl cursor-pointer">
            <FaUserAlt />
          </div>

          <div className=" text-2xl relative">
            <span>
              <FaCartPlus />
            </span>

            <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1.5 flex items-center justify-between absolute -top-2 -right-3">
              <p className="text-sm items-center">0</p>
            </div>
            
          </div>
          <div>
            <Link to={"/login"}className="bg-red-600 text-white px-2 py-2 rounded-full items-center hover:bg-red-800">Login </Link>

          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
