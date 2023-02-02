import { Upload } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import CMSLayout from "../../../layouts/CMSLayout";
import { productRepository } from "../../../repository/product";

const FormProduct = () => {
  const router = useRouter();
  const { id } = router.query;

  const [mode, setMode] = useState("create");
  const [image, setImage] = useState();

  const { data: detailproduct } = productRepository.hooks.getDetailproduct(id);
  const product = detailproduct?.data;

  const { data: categoryProduct } = productRepository.hooks.getCategory()
  const category = categoryProduct?.data

  useEffect(() => {
    detailproduct ? setMode("edit") : setMode("create");
  }, [detailproduct]);

  const handleImage = (args) => {
    setImage(args.file);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
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
                <div className="w-full h-full md:h-[50%] lg:h-[63%] p-4 bg-gray-100 xl:w-[98%] xl:h-[97%] 2xl:w-[77%] 2xl:h-[96%] lg:p-6 xl:p-8">
                  {mode === "edit" ? (
                    <Image
                      src={`http://49.0.2.250:3002/file/${product?.image}`}
                      width={500}
                      height={500}
                      alt={"Product Image"}
                    />
                  ) : (
                    <Upload.Dragger
                      multiple={false}
                      showUploadList={false}
                      customRequest={handleImage}
                    >
                      <div className="flex items-center justify-center w-full h-full font-poppins">
                        <div className="flex flex-col space-y-2">
                          <div className="mx-auto">
                            <AiOutlineCloudUpload className="text-7xl text-softDark/40" />
                          </div>
                          <div className="text-base font-medium text-center text-softDark/40">
                            Select Image to Upload
                          </div>
                          <div className="text-xs text-center text-softDark/30">
                            or Drag and Drop, Copy or Paste here
                          </div>
                        </div>
                      </div>
                    </Upload.Dragger>
                  )}
                </div>
              </div>
              <div className="p-4">
                <label className="text-sm font-medium text-gray-500">
                  Category
                </label>
                <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
                  <input
                    //   ref={categoryRef}
                    defaultValue={product?.category?.name.toUpperCase()}
                    type="text"
                    required
                    className="w-full text-xs bg-transparent text-background/80 focus:outline-none"
                  />
                </div>
                <label className="text-sm font-medium text-gray-500">
                  Name
                </label>
                <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
                  <input
                    //   ref={nameRef}
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
                    //   ref={priceRef}
                    defaultValue={product?.price}
                    type="number"
                    required
                    className="w-full text-xs bg-transparent text-background/80 focus:outline-none"
                  />
                </div>
                {mode === "edit" && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Owner
                    </label>
                    <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
                      <input
                        //   ref={ownerRef}
                        defaultValue={product?.owner || "NAMA OWNER"}
                        type="text"
                        required
                        className="w-full text-xs bg-transparent text-background/80 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                <label className="text-sm font-medium text-gray-500">
                  Stock
                </label>
                <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
                  <input
                    //   ref={stockRef}
                    defaultValue={product?.stok}
                    type="number"
                    required
                    className="w-full text-xs bg-transparent text-background/80 focus:outline-none"
                  />
                </div>
                <label className="text-sm font-medium text-gray-500">
                  Description
                </label>
                <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
                  <textarea
                    //   ref={descriptionRef}
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
