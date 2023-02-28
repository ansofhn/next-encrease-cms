import { Listbox, Transition } from "@headlessui/react";
import { message, Modal, Pagination } from "antd";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { mutate } from "swr";
import { productRepository } from "../repository/product";
import { http } from "../utils/http";

const productType = [{ name: "All Products", value: "" }];

const Product = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(productType[0]);
  const [pagePagination, setPagePagination] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [id, setId] = useState();
  const [open, setOpen] = useState(false);

  const { data: dataProduct } = productRepository.hooks.getProduct(
    pagePagination,
    selected?.name === "All Products" ? "" : selected?.id
  );
  const { data: detailProduct } = productRepository.hooks.getDetailproduct(id);
  const products = dataProduct?.data;
  const detail = detailProduct?.data;

  useEffect(() => {
    setTotalPage(dataProduct?.meta?.totalItems);
  }, [dataProduct]);

  const { data: categoryProduct } = productRepository.hooks.getCategory();
  const category = categoryProduct?.data;

  const handleDetailProduct = (id) => {
    router.push({ pathname: `/product/[id]`, query: { id: id } });
  };

  // Truncate Manual Formatter
  const truncateText = (text) => {
    if (text.split(" ").length > 10) {
      return text.substring(0, 40) + "...";
    } else {
      return text;
    }
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: "Are you sure?",
      content: "Delete this Product",
      centered: true,
      okText: "Yes",
      okType: "danger",
      onOk: async () => {
        try {
          await http.del(productRepository.url.detailproduct(record));
          await mutate(
            productRepository.url.product(
              pagePagination,
              selected?.name === "All Products" ? "" : selected?.name
            )
          );
        } catch (error) {
          console.log(error.message, "error delete");
          message.error("Failed Delete Product");
        }
      },
    });
  };

  return (
    <div className="p-10 mx-8 bg-gray-100 mt-36">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-background/80">
            Products
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                router.push({
                  pathname: "/product/[id]",
                  query: { id: "create" },
                })
              }
              className="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite"
            >
              Create Product
            </button>
            <Listbox
              value="selected"
              onChange={(value) => {
                setSelected(value);
                setPagePagination(1);
              }}
            >
              <Listbox.Button
                placeholder="All Products"
                className="text-background w-60 shadow-sm font-medium text-sm flex items-center justify-between bg-white py-2.5 px-4 rounded-sm"
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
                <Listbox.Options className="absolute z-10 w-60 py-1 overflow-auto text-sm bg-white rounded-sm shadow-lg right-[72px] top-[235px] shadow-background/10 focus:outline-none sm:text-sm">
                  {productType?.map((products, productsIdx) => (
                    <Listbox.Option
                      key={productsIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 w-full px-4 ${
                          active
                            ? "bg-gray-100 text-background"
                            : "text-backgorund"
                        }`
                      }
                      value={products}
                    >
                      {({ selected }) => (
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {products.name}
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
                  {category?.map((products, productsIdx) => (
                    <Listbox.Option
                      key={productsIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 w-full px-4 ${
                          active
                            ? "bg-gray-100 text-background"
                            : "text-backgorund"
                        }`
                      }
                      value={products}
                    >
                      {({ selected }) => (
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {products.name}
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </Listbox>
          </div>
        </div>
        <hr className="border-gray-200" />
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 font-poppins">
          {products?.map((data) => {
            return (
              <div
                className="max-w-sm duration-500 rounded-md shadow-lg bg-slate-50 hover:scale-105"
                onClick={() => {
                  setId(data?.id);
                  setOpen(true);
                }}
                key={data?.id}
              >
                <div className="p-6 bg-gray-300">
                  <img
                    src={`http://49.0.2.250:3002/file/${data?.image[0]}`}
                    className="w-full"
                  />
                </div>
                <div className="p-4 space-y-4 text-background">
                  <div className="text-sm font-semibold uppercase text-softBlue">
                    {data?.category?.name}
                  </div>
                  <div className="grid grid-cols-3">
                    <h1 className="col-span-2 text-base font-semibold">
                      {truncateText(data?.name)}
                    </h1>
                    <p className="flex items-start justify-center text-sm font-medium">
                      Rp. {data?.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <Pagination
            current={pagePagination}
            pageSize={6}
            total={totalPage}
            onChange={(current) => setPagePagination(current)}
          />
        </div>

        <Modal
          open={open}
          centered={true}
          onCancel={() => setOpen(false)}
          footer={[
            <button
              onClick={() => setOpen(false)}
              className="px-5 py-2 text-sm font-medium bg-gray-200 rounded-sm text-background"
            >
              Cancel
            </button>,
            <button
              onClick={() => {
                setOpen(false);
                handleDetailProduct(detail?.id);
              }}
              className="px-6 py-2 ml-3 text-sm font-medium rounded-sm bg-background text-softWhite"
            >
              Edit
            </button>,
            <button
              onClick={() => {
                setOpen(false);
                handleDelete(detail?.id);
              }}
              className="px-4 py-2 ml-3 mr-5 text-sm font-medium rounded-sm bg-softBlue text-softWhite"
            >
              Delete
            </button>,
          ]}
        >
          <div className="px-6 pt-8 pb-2.5 space-y-6 font-poppins">
            <div className="flex items-center justify-center p-4 bg-gray-300">
              <img
                src={`http://49.0.2.250:3002/file/${detail?.image[0]}`}
                className="w-full"
              />
            </div>
            <div className="text-sm font-semibold uppercase text-softBlue">
              {detail?.category?.name}
            </div>
            <div className="grid grid-cols-3">
              <h1 className="col-span-2 text-lg font-semibold">
                {detail?.name}
              </h1>
              <p className="flex items-start justify-center text-sm font-semibold">
                Rp. {detail?.price}
              </p>
            </div>
            <div>{detail?.description}</div>
            <hr className="border-gray-200" />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Product;
