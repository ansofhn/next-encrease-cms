import { Table } from "antd";
import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const User = () => {
  const columns = [
    {
      title: "Fullname",
      dataIndex: "fullName",
    },
    {
      title: "Username",
      dataIndex: "userName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    // {
    //   title: "Role",
    //   align: "center",
    //   dataIndex: "role",
    //   render: (role) => {
    //     if (role.roleName == "admin") {
    //       return (
    //         <div className="self-center px-2 py-2 text-xs font-semibold text-center uppercase rounded-md text-maroon bg-cream">
    //           {role.roleName}
    //         </div>
    //       );
    //     } else if (role.roleName == "farmer") {
    //       return (
    //         <div className="self-center px-2 py-2 text-xs font-semibold text-center uppercase bg-gray-200 rounded-md text-textColor">
    //           {role.roleName}
    //         </div>
    //       );
    //     } else {
    //       return (
    //         <div className="self-center px-2 py-2 text-xs font-semibold text-center uppercase bg-gray-200 rounded-md text-textColor">
    //           {role.roleName}
    //         </div>
    //       );
    //     }
    //   },
    // },
    {
      align: "center",
      title: "Actions",
      render: (record) => {
        return (
          <div className="text-center">
            <EditOutlined
              onClick={() => {
                // onEditUser(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                // onDeleteUser(record);
              }}
              style={{ color: "maroon", marginLeft: 12 }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div class="p-10 mx-8 bg-gray-100 mt-36">
      <div class="space-y-10">
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold text-background/80">
            User & Admin
          </div>
          <button class="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite">
            Add New
          </button>
        </div>
        <hr class="border-gray-200" />
        <div class="flex items-center justify-end space-x-4">
          <div>
            <input
              type="text"
              class="text-sm bg-softWhite py-2.5 px-4 rounded-sm shadow-sm"
              placeholder="Search"
            />
          </div>
          <div>
            <button
              class="text-background w-40 shadow-sm font-medium text-sm flex items-center justify-between bg-softWhite py-2.5 px-4 rounded-sm"
              type="button"
            >
              All User
              <svg
                class="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44">
              <ul class="py-1 text-sm text-gray-700">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                    Admin
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                    Member
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                    Guest
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rounded-sm shadow-sm bg-softWhite">
          <Table
            bordered={true}
            columns={columns}
            // dataSource={dataSource}
            pagination={{
              pageSize: 10,
              className: "px-4",
              total: 50, //totalDataUser,
              // onChange: (page) => {
              //   getData(page);
              // },
            }}
          ></Table>
        </div>
      </div>
    </div>
  );
};

export default User;
