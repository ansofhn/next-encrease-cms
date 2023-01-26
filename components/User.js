import { message, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { userRepository } from "../repository/user";
import { http } from "../utils/http";
import { mutate } from "swr";
import FilterUser from "./FilterUser";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const [dataSource, setDataSource] = useState();
  const [pagePagination, setPagePagination] = useState(1);

  const { data: dataUser } = userRepository.hooks.getUser(pagePagination);

  useEffect(() => {
    setDataSource(dataUser?.data);
  }, [dataUser]);

  console.log(dataSource, ":)");

  const onDeleteUser = (record) => {
    Modal.confirm({
      title: "Are you sure?",
      content: "Delete this user",
      centered: true,
      okText: "Yes",
      okType: "danger",
      onOk: async () => {
        setDataSource((pre) => {
          return pre.filter((user) => user.id !== record.id);
        });
        try {
          await http.del(userRepository.url.detailUser(record?.id));
          mutate(userRepository.url.user());
        } catch (error) {
          console.log(error.message, "error delete");
          message.error("Failed Delete User");
        }
      },
    });
  };

  const columns = [
    {
      title: "Fullname",
      dataIndex: "fullname",
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
              onClick={() =>
                router.push({
                  pathname: "/user/[id]",
                  query: { id: record?.id },
                })
              }
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteUser(record);
              }}
              style={{ color: "maroon", marginLeft: 14 }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="p-10 mx-8 bg-gray-100 mt-36">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-background/80">
            User & Admin
          </div>
          <button
            onClick={() =>
              router.push({
                pathname: "/user/[id]",
                query: { id: "create" },
              })
            }
            className="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite"
          >
            Add New
          </button>
        </div>
        <hr className="border-gray-200" />
        <div className="flex items-center justify-end space-x-4">
          <div>
            <input
              type="text"
              className="text-sm bg-white focus:outline-none py-2.5 px-4 rounded-sm shadow-sm"
              placeholder="Search"
            />
          </div>
          <FilterUser />
        </div>

        <div className="rounded-sm shadow-sm bg-softWhite">
          <Table
            bordered={true}
            columns={columns}
            dataSource={dataSource}
            pagination={{
              current: pagePagination,
              className: "px-4",
              pageSize: dataUser?.meta?.itemsPerPage,
              total: dataUser?.meta?.totalItems,
              onChange(current) {
                setPagePagination(current);
              },
            }}
          ></Table>
        </div>
      </div>
    </div>
  );
};

export default User;
