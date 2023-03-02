import { message, Pagination } from "antd";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { mutate } from "swr/_internal";
import { transactionRepository } from "../repository/transactions";

const Transaction = () => {
  const [pagePagination, setPagePagination] = useState(1);
  const [totalPage, setTotalPage] = useState();

  const { data: dataTransaction } =
    transactionRepository.hooks.getTransaction(pagePagination);
  const dataTrans = dataTransaction?.data;

  useEffect(() => {
    setTotalPage(dataTransaction?.meta?.totalItems);
  }, [dataTransaction]);

  const status = (status) => {
    if (status === "I") {
      return "bg-purple-50 border-purple-300";
    }
    if (status === "IP") {
      return "bg-orange-50 border-orange-300";
    }
    if (status === "S") {
      return "bg-green-50 border-green-300";
    }
    if (status === "C") {
      return "bg-red-50 border-red-300";
    }
  };

  const handlePayment = async (id) => {
    try {
      await transactionRepository.api
        .updatePayment(id)
        .then((res) =>
          res !== undefined
            ? message.success("Success")
            : message.error("Something went Wrong")
        );
      await mutate(transactionRepository.url.transaction(pagePagination));
    } catch (e) {
      console.log(e.message, "error");
      message.error("Failed");
      return;
    }
  };

  const handleDelivery = async (id) => {
    try {
      await transactionRepository.api
        .updateDelivery(id)
        .then((res) =>
          res !== undefined
            ? message.success("Success")
            : message.error("Something went Wrong")
        );
      await mutate(transactionRepository.url.transaction(pagePagination));
    } catch (e) {
      console.log(e.message, "error");
      message.error("Failed");
      return;
    }
  };

  return (
    <div className="p-10 mx-8 bg-gray-100 mt-44">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-background/80">
            All Transaction
          </div>
        </div>
        <hr className="border-gray-200" />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-poppins">
          {dataTrans?.map((data) => {
            return (
              <div className="p-6 space-y-3 rounded-md shadow-sm bg-softWhite">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-background">
                    Transaction
                  </div>
                  <div
                    className={`px-4 py-2 text-center text-xs font-semibold uppercase border rounded-md ${status(
                      data?.status
                    )}`}
                  >
                    {data?.status == "IP"
                      ? "In Progress"
                      : data?.status == "S"
                      ? "Success"
                      : data?.status == "C"
                      ? "Cancelled"
                      : data?.status == "I"
                      ? "Init"
                      : "Unknown"}
                  </div>
                </div>
                <hr className="border-gray-200" />
                <div className="text-xs font-light text-background/70">
                  {moment(data?.createdAt).format("DD MMM YYYY, HH:mm")}
                </div>
                <div className="flex text-sm font-semibold h-14 text-background">
                  {data?.products?.map((item, index) => {
                    if (data?.products?.length > 1) {
                      return index == data?.products?.length - 1
                        ? item?.name
                        : item?.name + ", ";
                    } else {
                      return item?.name;
                    }
                  })}
                </div>
                <div className="self-end text-xs font-light text-background/70">
                  Buyer:
                  <span className="ml-2 font-semibold text-background">
                    {data?.user?.fullname}
                  </span>
                </div>
                <div className="flex items-center justify-start pt-2 space-x-4">
                  {data?.status === "IP" && data?.paymentStatus === true && data?.deliveryStatus === "Menunggu Konfirmasi Admin" ? (
                    <button
                      onClick={() => handlePayment(data?.id)}
                      className="px-5 py-2.5 w-full text-sm font-medium rounded-sm bg-background text-softWhite"
                    >
                      Confirm Payment
                    </button>
                  ) : data?.status === "IP" && data?.deliveryStatus === "Penjual Sedang Menyiapkan Barang/Jasa" ? (
                    <button
                      onClick={() => handleDelivery(data?.id)}
                      className="px-5 py-2.5 w-full text-sm font-medium rounded-sm bg-gray-200 text-background"
                    >
                      Confirm Delivery
                    </button>
                  ) : (
                    <div className="w-full px-5 py-5 text-sm font-medium rounded-sm">
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <Pagination
            current={pagePagination}
            pageSize={12}
            total={totalPage}
            onChange={(current) => setPagePagination(current)}
          />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
