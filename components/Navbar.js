import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaCog, FaBell, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <nav className="fixed top-0 z-10 w-full shadow-lg shadow-background/5 bg-softWhite">
      <div className="flex flex-wrap items-center justify-between p-6 mx-auto sm:px-10 sm:py-6">
        <div className="flex items-center gap-x-12">
          <Link href={"/"}>
            <div className="flex items-center text-2xl font-bold uppercase cursor-pointer text-background">
              encrease
            </div>
          </Link>

          <div className="flex items-center bg-gray-100 rounded-sm w-60">
            <div className="py-2.5 pl-4 text-background/50 text-sm">
              <FaSearch />
            </div>
            <input
              type="text"
              className="w-full py-2.5 px-3 bg-gray-100 focus:outline-none text-background/60 text-sm"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="flex items-center gap-x-6">
            <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full cursor-pointer">
              <FaCog className="flex items-center justify-center w-4 h-6 text-background/50" />
            </div>
            <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full cursor-pointer">
              <FaBell className="flex items-center justify-center w-4 h-6 text-background/50" />
            </div>
          </div>
          <div className="flex items-center cursor-pointer gap-x-4">
            <div className="p-5 rounded-full bg-softGray"></div>
            <div className="text-sm font-medium text-background">Admin</div>
          </div>
        </div>
      </div>
      <hr className="mx-10 border-gray-200" />
      <div className="flex flex-col gap-4 p-2 mx-16 text-sm font-medium text-gray-500 md:p-0 md:flex-row md:gap-10">
        <Link href={"/"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/"
                ? "border-b-2 border-background/80 transition duration-300"
                : ""
            }`}
          >
            Dashboard
          </div>
        </Link>
        <Link href={"/product"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/product" || currentRoute === "/product/[id]"
                ? "border-b-2 border-background/80 transition duration-300"
                : ""
            }`}
          >
            Product
          </div>
        </Link>
        <Link href={"#"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/rating"
                ? "border-b-2 border-background/80 transition duration-300"
                : ""
            }`}
          >
            Review & Rating
          </div>
        </Link>
        <Link href={"/page"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/page"
                ? "border-b-2 border-background/80 transition duration-300"
                : ""
            }`}
          >
            Page
          </div>
        </Link>
        <Link href={"/user"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/user" || currentRoute === "/user/[id]"
                ? "border-b-2 border-background/80 transition duration-300"
                : ""
            }`}
          >
            User Admin
          </div>
        </Link>
        <Link href={"#"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/forum"
                ? "border-b-2 border-background/80 transition duration-300"
                : ""
            }`}
          >
            Forum
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
