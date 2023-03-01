import { message, Modal, Rate, Table } from "antd";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { http } from "../utils/http";
import { mutate } from "swr";
import { useRouter } from "next/router";
import { ratingRepository } from "../repository/rating";
import moment from "moment";

const Rating = () => {
  const router = useRouter();
  const [totalPage, setTotalPage] = useState();
  const [dataSource, setDataSource] = useState();
  const [pagePagination, setPagePagination] = useState(1);

  const { data: dataReview } = ratingRepository.hooks.getReview(pagePagination);

  useEffect(() => {
    setDataSource(dataReview?.data);
    setTotalPage(dataReview?.meta?.totalItems);
  }, [dataReview]);

  const onDeleteReview = (record) => {
    Modal.confirm({
      title: "Are you sure?",
      content: "Delete this review",
      centered: true,
      okText: "Yes",
      okType: "danger",
      onOk: async () => {
        setDataSource((pre) => {
          return pre.filter((rating) => rating.id !== record.id);
        });
        try {
          await http.del(ratingRepository.url.detailReview(record?.id));
          await mutate(ratingRepository.url.review(pagePagination));
        } catch (error) {
          console.log(error.message, "error delete");
          message.error("Failed Delete Review");
        }
      },
    });
  };

  const columns = [
    {
      title: "Review",
      width: 500,
      render: (data) => {
        return (
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
            <div className="flex flex-col space-y-2 font-poppins">
              <div className="flex items-center gap-4">
                <div className="font-semibold capitalize">
                  {data?.user?.fullname}
                </div>
                <div className="text-xs font-medium text-softDark/50">
                  {moment(data?.createdAt).format("DD MMM YYYY, HH:mm")}
                </div>
              </div>
              <div>{data?.message}</div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Product",
      dataIndex: "product",
      width: 300,
      render: (product) => {
        return (
          <div className="flex items-center gap-3 font-poppins">
            <div className="w-12 h-12 bg-gray-100 rounded-sm"></div>
            <div className="font-semibold">Product Name</div>
          </div>
        );
      },
    },
    {
      title: "Rating",
      dataIndex: "rate",
      width: 200,
      render: (rate) => {
        return (
          <div className="flex items-center gap-3 font-poppins">
            <div className="text-xl font-bold text-background">
              {rate.toFixed(1)}
            </div>
            <Rate
              className="text-sm text-yellow-400"
              disabled
              allowHalf
              defaultValue={rate}
            />
          </div>
        );
      },
    },
    // {
    //   title: "Role",
    //   align: "center",
    //   width: 150,
    //   dataIndex: "role",
    //   render: (role) => {
    //     if (role.name == "admin") {
    //       return (
    //         <div className="self-center px-2 py-2 text-xs font-semibold text-center uppercase rounded-md bg-background/90 text-softWhite">
    //           {role.name}
    //         </div>
    //       );
    //     } else {
    //       return (
    //         <div className="self-center px-2 py-2 text-xs font-semibold text-center uppercase rounded-md bg-softGray text-textColor">
    //           {role.name}
    //         </div>
    //       );
    //     }
    //   },
    // },
    {
      align: "center",
      title: "Actions",
      width: 150,
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
                onDeleteReview(record);
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
            Review & Rating
          </div>
          {/* <button
            onClick={() =>
              router.push({
                pathname: "/user/[id]",
                query: { id: "create" },
              })
            }
            className="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite"
          >
            Add New
          </button> */}
        </div>
        <hr className="border-gray-200" />
        {/* <div className="flex items-center justify-end space-x-4">
          <div>
            <input
              type="text"
              className="text-sm bg-white focus:outline-none py-2.5 px-4 rounded-sm shadow-sm"
              placeholder="Search"
              onChange={(data) => {
                setTimeout(() => {
                  setPagePagination(1);
                  setSearch(data.target.value);
                }, 1000);
              }}
            />
          </div>
          <Listbox
            value="selected"
            onChange={(value) => {
              setSelected(value);
              setPagePagination(1);
            }}
          >
            <Listbox.Button
              placeholder="All User"
              className="text-background w-40 shadow-sm font-medium text-sm flex items-center justify-between bg-white py-2.5 px-4 rounded-sm"
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
                        active
                          ? "bg-gray-100 text-background"
                          : "text-backgorund"
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
        </div> */}

        <div className="rounded-sm shadow-sm bg-softWhite">
          <Table
            bordered={true}
            columns={columns}
            dataSource={dataSource}
            pagination={{
              current: pagePagination,
              className: "px-4",
              pageSize: 10,
              total: totalPage,
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

export default Rating;
