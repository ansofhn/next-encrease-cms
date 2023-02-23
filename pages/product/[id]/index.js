import { message, Select } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { mutate } from "swr";
import UploadImage from "../../../components/UploadImage";
import { appConfig } from "../../../config/app";
import CMSLayout from "../../../layouts/CMSLayout";
import { productRepository } from "../../../repository/product";

const SuperAgent = require("superagent");
const { Option } = Select;

const types = [
  { name: "Goods", value: "barang" },
  { name: "Services", value: "jasa" },
];

const FormProduct = () => {
  const router = useRouter();
  const { id } = router.query;

  const [mode, setMode] = useState("create");
  const [image, setImage] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [type, setType] = useState();

  const { data: detailproduct } = productRepository.hooks.getDetailproduct(id);
  const product = detailproduct?.data;

  const { data: categoryProduct } = productRepository.hooks.getCategory();
  const category = categoryProduct?.data;

  console.log(product, ":))");

  const result = [];
  image.map((data) => {
    result.push(data?.response?.data?.filename);
  });

  useEffect(() => {
    detailproduct ? setMode("edit") : setMode("create");
  }, [detailproduct]);

  // Form Control
  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const stockRef = useRef();

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const oldData = product;
    try {
      if (mode === "create") {
        const data = {
          name: nameRef.current.value,
          price: Number(priceRef.current.value),
          description: descriptionRef.current.value,
          stok: Number(stockRef.current.value),
          image: result,
          categoryId: categoryId,
          type: type,
        };
        console.log(data, ":))");
        await SuperAgent.post(appConfig.apiUrl + "/products")
          .send(data)
          .set(
            "Authorization",
            "Bearer " + localStorage.getItem("access_token")
          )
          .then((res) => console.log(res));
        await mutate(productRepository.url.product());
      } else {
        const data = {
          name: nameRef.current.value ? nameRef.current.value : oldData.name,
          price: Number(
            priceRef.current.value ? priceRef.current.value : oldData.price
          ),
          description: descriptionRef.current.value
            ? descriptionRef.current.value
            : oldData.description,
          stok: Number(
            stockRef.current.value ? stockRef.current.value : oldData.stok
          ),
          // image: image ? image : oldData.image,
          type: type ? type : oldData?.type,
          categoryId: categoryId ? categoryId : oldData?.category?.id,
        };
        await SuperAgent.put(appConfig.apiUrl + `/products/${id}`)
          .send(data)
          .set(
            "Authorization",
            "Bearer " + localStorage.getItem("access_token")
          )
          .then((res) => console.log(res));
        await mutate(productRepository.url.product());
      }
      message
        .success(
          `Successfully ${mode === "create" ? "Created" : "Updated"} Product`
        )
        .then(router.push("/product"));
    } catch (e) {
      message.error("Failed to Create Product");
      console.log(e.message);
    }
  };

  return (
    <div className="p-10 mx-8 bg-gray-100 mt-36">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-background/80">
            {`${id === "create" ? "Create" : "Edit"} Products`}
          </div>
          <button
            onClick={() => router.back()}
            className="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite"
          >
            Back
          </button>
        </div>
        <hr className="border-gray-200" />
        <div className="p-10 bg-white/80">
          <form onSubmit={onSubmitForm}>
            <div className="grid grid-cols-2 2xl:w-[90%]">
              <div className="flex items-start justify-end p-4">
                <div
                  className={`w-full h-full ${
                    mode === "edit"
                      ? "xl:w-[98%] 2xl:w-[77%] h-auto"
                      : "xl:w-[98%] 2xl:w-[77%] h-auto"
                  } p-4 bg-gray-100 lg:p-6 xl:p-8`}
                >
                  {mode === "edit" ? (
                    <div className="w-full overflow-hidden rounded-sm">
                      <div className="flex flex-col-reverse gap-5 md:flex-row">
                        <div className="flex flex-row items-center md:flex-col">
                          <div
                            className="flex flex-row items-center gap-2 p-2 overflow-scroll max-w-screen max-h-[460px] md:flex-col bg-gray-100 scroll-smooth scrollbar-hide"
                            id="slider"
                          >
                            <div className="md:w-[80px] md:h-[80px] lg:w-[77px] lg:h-[77px] xl:w-[100px] xl:h-[100px]">
                              <Image
                                src={`http://49.0.2.250:3002/file/${product?.image[1]}`}
                                preview={false}
                                width={500}
                                height={500}
                                className="w-full h-full"
                                alt="Product Image"
                              />
                            </div>

                            <div className="md:w-[80px] md:h-[80px] lg:w-[77px] lg:h-[77px] xl:w-[100px] xl:h-[100px]">
                              <Image
                                src={`http://49.0.2.250:3002/file/${product?.image[2]}`}
                                preview={false}
                                width={500}
                                height={500}
                                className="w-full h-full"
                                alt="Product Image"
                              />
                            </div>

                            <div className="md:w-[80px] md:h-[80px] lg:w-[77px] lg:h-[77px] xl:w-[100px] xl:h-[100px]">
                              <Image
                                src={`http://49.0.2.250:3002/file/${product?.image[3]}`}
                                preview={false}
                                width={500}
                                height={500}
                                className="w-full h-full"
                                alt="Product Image"
                              />
                            </div>

                            <div className="md:w-[80px] md:h-[80px] lg:w-[77px] lg:h-[77px] xl:w-[100px] xl:h-[100px]">
                              <Image
                                src={`http://49.0.2.250:3002/file/${product?.image[4]}`}
                                preview={false}
                                width={500}
                                height={500}
                                className="w-full h-full"
                                alt="Product Image"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-full">
                          <Image
                            src={`http://49.0.2.250:3002/file/${product?.image[0]}`}
                            preview={false}
                            width={500}
                            height={500}
                            className="w-full max-h-[475px]"
                            alt="Product Image"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <UploadImage setImage={setImage} />
                  )}
                </div>
              </div>
              <div className="p-4">
                <label className="text-sm font-medium text-gray-500">
                  Category
                </label>
                <div>
                  <Select
                    className="w-full py-1.5a mb-5 text-xs border rounded-md border-textColor hover:border-textColor"
                    placeholder={`${
                      detailproduct
                        ? product?.category?.name
                        : "Choose Category"
                    }`}
                    onSelect={(value) => {
                      setCategoryId(value);
                    }}
                    bordered={false}
                  >
                    {category?.map((data) => (
                      <Option
                        className="text-xs hover:bg-softGray hover:text-background/80 focus:bg-softGray focus:text-background/80"
                        value={data.id}
                      >
                        {data.name}
                      </Option>
                    ))}
                  </Select>
                </div>

                <label className="text-sm font-medium text-gray-500">
                  Type
                </label>
                <div>
                  <Select
                    className="w-full py-1.5a mb-5 text-xs border rounded-md border-textColor hover:border-textColor"
                    placeholder={`${
                      detailproduct ? product?.type : "Choose Product Type"
                    }`}
                    onSelect={(value) => {
                      setType(value);
                    }}
                    bordered={false}
                  >
                    {types?.map((data) => (
                      <Option
                        className="text-xs hover:bg-softGray hover:text-background/80 focus:bg-softGray focus:text-background/80"
                        value={data.name}
                      >
                        {data.name}
                      </Option>
                    ))}
                  </Select>
                </div>

                <label className="text-sm font-medium text-gray-500">
                  Name
                </label>
                <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
                  <input
                    ref={nameRef}
                    defaultValue={product?.name}
                    type="text"
                    required
                    className="w-full text-xs bg-transparent text-background/80 focus:outline-none"
                  />
                </div>
                <label className="text-sm font-medium text-gray-500">
                  Price
                </label>
                <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
                  <input
                    ref={priceRef}
                    defaultValue={product?.price}
                    type="number"
                    required
                    className="w-full text-xs bg-transparent text-background/80 focus:outline-none"
                  />
                </div>
                <label className="text-sm font-medium text-gray-500">
                  Stock
                </label>
                <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
                  <input
                    ref={stockRef}
                    defaultValue={product?.stok}
                    type="number"
                    required
                    className="w-full text-xs bg-transparent text-background/80 focus:outline-none"
                  />
                </div>
                <label className="text-sm font-medium text-gray-500">
                  Description
                </label>
                <div className="w-full px-4 py-2.5 mb-14 bg-gray-100 rounded-md">
                  <textarea
                    ref={descriptionRef}
                    defaultValue={product?.description}
                    type="text"
                    required
                    className="w-full h-20 text-xs bg-transparent text-background/80 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end mt-4">
              <button
                type="submit"
                className="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite"
              >
                {`${id === "create" ? "Add New Product" : "Save Change"}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormProduct;

FormProduct.getLayout = (page) => <CMSLayout children={page} />;
