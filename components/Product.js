import { Listbox, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { productRepository } from "../repository/product";

const productType = [
  { name: "All Products", value: "" },
  { name: "Service", value: "service" },
  { name: "Technology", value: "technology" },
  { name: "Peripheral", value: "peripheral" },
];

const Product = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(productType[0]);

  const { data: dataProduct } = productRepository.hooks.getProduct();
  const products = dataProduct?.data;

  console.log(dataProduct, "test");

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

  return (
    <div class="p-10 mx-8 bg-gray-100 mt-36">
      <div class="space-y-10">
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold text-background/80">Products</div>
          <div class="flex items-center space-x-4">
            <button
              onClick={() =>
                router.push({
                  pathname: "/product/[id]",
                  query: { id: "create" },
                })
              }
              class="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite"
            >
              Create Product
            </button>
            <Listbox
              value="selected"
              onChange={(value) => {
                setSelected(value);
                // setPagePagination(1);
              }}
            >
              <Listbox.Button
                placeholder="All Products"
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
                <Listbox.Options className="absolute z-10 w-40 py-1 overflow-auto text-sm origin-top-right bg-white rounded-sm shadow-lg right-[72px] mt-52 shadow-background/10 focus:outline-none sm:text-sm">
                  {productType.map((products, productsIdx) => (
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
        <hr class="border-gray-200" />

        <div class="grid gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 font-poppins">
          {products?.map((data) => {
            return (
              <div
                class="max-w-sm duration-500 rounded-md shadow-lg bg-slate-50 hover:scale-105"
                onClick={() => handleDetailProduct(data?.id)}
                key={data?.id}
              >
                <div class="bg-gray-300 p-6">
                  <img
                    src={`http://49.0.2.250:3002/file/${data?.image}`}
                    class="w-full"
                  />
                </div>
                <div class="p-4 text-background space-y-4">
                  <div className="text-sm font-semibold uppercase text-softBlue">
                    {data?.category?.name}
                  </div>
                  <div className="grid grid-cols-3">
                    <h1 class="text-base font-semibold col-span-2">{truncateText(data?.name)}</h1>
                    <p class="font-medium text-sm flex items-start justify-center">Rp. {data?.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
