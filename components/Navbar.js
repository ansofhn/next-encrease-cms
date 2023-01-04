import Link from "next/link";
import React from "react";
import { FaCog, FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 w-full shadow-lg shadow-gray-100 bg-softWhite">
      <div className="flex flex-wrap items-center justify-between p-6 mx-auto sm:px-10 sm:py-6">
        <div className="flex items-center gap-x-12">
          <Link href={"/"}>
            <div className="flex items-center text-2xl font-bold uppercase cursor-pointer text-background">
              encrease
            </div>
          </Link>

          <div className="w-60">
            <input
              type="text"
              className="w-full py-2.5 px-3 bg-gray-100 rounded-sm text-sm"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-10">
          <div>
            <button className="w-full py-2.5 px-12 bg-background rounded-sm text-sm font-medium text-softWhite">
              Create Product
            </button>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
              <FaCog className="flex items-center justify-center w-4 h-6 text-background/50" />
            </div>
            <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
              <FaBell className="flex items-center justify-center w-4 h-6 text-background/50" />
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="p-5 rounded-full bg-softGray"></div>
            <div className="text-sm font-medium text-background">Admin</div>
          </div>
        </div>
      </div>
      <hr className="mx-10 border-gray-200" />
      <div className="flex flex-col gap-4 p-2 mx-16 text-sm font-medium text-gray-500 lg:p-0 lg:flex-row lg:gap-10">
        <Link href={"/"}>
          <div className="p-2 py-5 cursor-pointer">Dashboard</div>
        </Link>
        <Link href={"/product"}>
          <div className="p-2 py-5 cursor-pointer">Product</div>
        </Link>
        <Link href={"/page"}>
          <div className="p-2 py-5 cursor-pointer">Page</div>
        </Link>
        <Link href={"/user"}>
          <div className="p-2 py-5 cursor-pointer">User Admin</div>
        </Link>
        <Link href={"/forum"}>
          <div className="p-2 py-5 cursor-pointer">Forum</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
