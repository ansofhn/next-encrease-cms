import { Image, message, Modal, Rate, Table } from "antd";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
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
            <div className="w-12 h-12 bg-gray-200 rounded-full">
              {/* <Image
                src={"https://source.unsplash.com/random/300x300?male"}
                width={48}
                height={48}
                className={"rounded-full"}
                alt="Profile Image"
                preview={false}
              /> */}
            </div>
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
            <div className="w-12 h-12 bg-gray-100 rounded-sm">
              <Image
                src={`http://49.0.2.250:3002/file/${product?.image[0]}`}
                width={48}
                height={48}
                className={"rounded-full"}
                alt="Profile Image"
                preview={false}
              />
            </div>
            <div className="font-semibold">{product?.name}</div>
          </div>
        );
      },
    },
    {
      title: "Rating",
      dataIndex: "rate",
      width: 200,
      render: (rate) => {
        const rating = Number(rate).toFixed(1);
        return (
          <div className="flex items-center gap-3 font-poppins">
            <div className="text-xl font-bold text-background">{rating}</div>
            <Rate
              className="text-sm text-yellow-400"
              disabled
              allowHalf
              defaultValue={Number(rating)}
            />
          </div>
        );
      },
    },
    {
      align: "center",
      title: "Actions",
      width: 150,
      render: (record) => {
        return (
          <div className="flex items-center justify-center">
            <div className="flex items-center px-4 py-2 bg-gray-100 rounded-md cursor-pointer">
              <BsThreeDots
                onClick={() => {
                  onDeleteReview(record);
                }}
                className="text-xl text-gray-400"
              />
            </div>
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
        </div>
        <hr className="border-gray-200" />
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
