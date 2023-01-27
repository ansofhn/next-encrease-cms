import { useRouter } from "next/router";
import React, { useState } from "react";

const FormProduct = () => {
  const router = useRouter();
  const { id } = router.query;

  const [mode, setMode] = useState("create");

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
            <div className="grid grid-cols-2 w-[90%]">
              <div className="p-4"></div>
              <div className="p-4">
                <label className="text-sm font-medium text-gray-500">
                  Category
                </label>
                <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
                  <input
                    //   ref={categoryRef}
                    defaultValue={""}
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
                    defaultValue={""}
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
                    defaultValue={""}
                    type="number"
                    required
                    className="w-full text-xs bg-transparent text-background/80 focus:outline-none"
                  />
                </div>
                <label className="text-sm font-medium text-gray-500">
                  Owner
                </label>
                <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
                  <input
                    //   ref={ownerRef}
                    defaultValue={""}
                    type="text"
                    required
                    className="w-full text-xs bg-transparent text-background/80 focus:outline-none"
                  />
                </div>
                <label className="text-sm font-medium text-gray-500">
                  Stock
                </label>
                <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
                  <input
                    //   ref={stockRef}
                    defaultValue={""}
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
                    defaultValue={""}
                    type="text"
                    required
                    className="w-full h-20 text-xs bg-transparent text-background/80 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end mt-10">
              <button
                type="submit"
                className="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite"
              >
                {`${id === "create" ? "Add New User" : "Save Change"}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormProduct;
