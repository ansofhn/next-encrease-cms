import { message } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdOutlineLogout } from "react-icons/md";
import { authentication } from "../utils/authentication";
import { TokenUtil } from "../utils/token";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const handleLogout = () => {
    message.success("Success Logout");
    authentication.clearAccesToken();
  };
  return (
    <nav className="fixed top-0 z-20 w-full shadow-lg shadow-background/5 bg-softWhite">
      <div className="flex flex-wrap items-center justify-between p-6 mx-auto sm:px-10 sm:py-6">
        <div className="flex items-center gap-x-12">
          <Link href={"/"}>
            <div className="flex items-center text-2xl font-bold uppercase cursor-pointer text-background">
              encrease
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-x-10">
          {TokenUtil.access_token ? (
            <div className="flex items-center px-6 py-2.5 border rounded-lg cursor-pointer border-softGray gap-x-4 ">
              <div className="text-sm font-medium text-background">Admin</div>
              <button
                className="text-lg text-background font-extralight"
                onClick={handleLogout}
              >
                <MdOutlineLogout />
              </button>
            </div>
          ) : (
            <Link href={"/auth/login"}>
              <button className="px-3 py-1.5 font-bold uppercase transition duration-300 border-2 rounded-md cursor-pointer text-background border-background">
                sign in
              </button>
            </Link>
          )}
        </div>
      </div>
      <hr className="mx-10 border-gray-200" />
      <div className="flex flex-col gap-4 p-2 mx-16 text-sm font-medium text-gray-500 md:p-0 md:flex-row md:gap-10">
        <Link href={"/dashboard"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/dashboard"
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
        <Link href={"/rating"}>
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
        <Link href={"/transaction"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/transaction"
                ? "border-b-2 border-background/80 transition duration-300"
                : ""
            }`}
          >
            Transaction
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
        {/* <Link href={"#"}>
          <div
            className={`p-2 py-5 cursor-pointer ${
              currentRoute === "/forum"
                ? "border-b-2 border-background/80 transition duration-300"
                : ""
            }`}
          >
            Forum
          </div>
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
