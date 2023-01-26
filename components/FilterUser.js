import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const userType = [
  { name: "All User", value: "" },
  { name: "Admin", value: "6a3fa3d2-3051-46d0-95bf-e13cc522964f" },
  { name: "User", value: "0171eae9-0968-4ce1-9145-b607a0e1882a" },
];

const FilterUser = () => {
  const [selected, setSelected] = useState(userType[0]);

  return (
    <Listbox value="selected" onChange={setSelected}>
      <Listbox.Button
        placeholder="All User"
        class="text-background w-40 shadow-sm font-medium text-sm flex items-center justify-between bg-white py-2.5 px-4 rounded-sm"
      >
        <span>{selected?.name}</span>
        <FaChevronDown />
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute z-10 w-40 py-1 overflow-auto text-sm origin-top-right bg-white rounded-sm shadow-lg mt-44 shadow-background/10 focus:outline-none sm:text-sm">
          {userType.map((users, usersIdx) => (
            <Listbox.Option
              key={usersIdx}
              className={({ active }) =>
                `relative cursor-default select-none py-2 w-full px-4 ${
                  active ? "bg-gray-100 text-background" : "text-backgorund"
                }`
              }
              value={users}
            >
              {({ selected }) => (
                <span
                  className={`block truncate ${
                    selected ? "font-medium" : "font-normal"
                  }`}
                >
                  {users.name}
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default FilterUser;
