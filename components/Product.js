import React from "react";

const Product = () => {
  return (
    <div class="p-10 mx-8 bg-gray-100 mt-36">
      <div class="space-y-10">
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold text-background/80">Products</div>
          <div class="flex items-center space-x-4">
            <button class="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite">
              Create Product
            </button>
            <div>
              <button
                class="text-background w-40 shadow-sm font-medium text-sm flex items-center justify-between bg-softWhite py-2.5 px-4 rounded-sm"
                type="button"
              >
                All Product
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
                      This Week
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="border-gray-200" />
        <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4 font-poppins">
          <div class="max-w-sm duration-500 rounded-md shadow-lg bg-slate-50 hover:scale-105">
            <div class="bg-softWhite">
              <img
                src="https://source.unsplash.com/random/300x300?laptop"
                class="w-full"
              />
            </div>
            <div class="p-4 text-background space-y-4">
              <div className="text-sm text-softBlue">Technology</div>
              <div className="flex justify-between">
                <h1 class="text-lg font-semibold">Service Laptop</h1>
                <p class="font-light">Rp.500.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
