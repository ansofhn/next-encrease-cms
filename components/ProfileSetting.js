import { Menu, Transition } from "@headlessui/react";
import { Avatar } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { userRepository } from "../repository/user";
import jwtDecode from "jwt-decode";

const ProfileSetting = ({ handleLogout }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [user, setUser] = useState();

  const decodeToken = () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const token = jwtDecode(access_token);
      return token?.id;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(decodeToken(), ":)")

  const { data: userDetail } = userRepository.hooks.getDetailUser(
    decodeToken()
  );

  useEffect(() => {
    setUser(userDetail?.data);
  }, [userDetail]);

  return (
    <Menu as={"div"} className="relative inline-block px-3 py-2 text-left border border-gray-200 rounded-md">
      <Menu.Button className={"flex items-center gap-3"}>
        <div className="p-1 bg-gray-200 rounded-full">
          <div className="overflow-hidden bg-gray-200 rounded-full w-9 h-9">
            <Avatar
              src={`http://49.0.2.250:3002/file/${user?.image}`}
              size={37}
              alt="Profile Image"
            />
          </div>
        </div>

        <div className="hidden md:block md:text-left">
          <h2 className="text-sm font-medium text-background">
            {user?.fullname}
          </h2>
          <p className="text-xs text-background/50">{user?.email}</p>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-400"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-56 mt-7 -mr-[60px] lg:-mr-1 origin-top-right rounded-md shadow-lg shadow-background/10 bg-softWhite focus:outline-none">
          <div className="py-2">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  type="submit"
                  className={classNames(
                    active
                      ? "bg-white text-background hover:bg-gray-100"
                      : "text-gray-700",
                    " px-5 py-2 w-full flex items-center gap-5 text-sm text-left"
                  )}
                >
                  <BiLogOut className="text-lg text-background/90" />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileSetting;
