import React from "react";

const Pages = () => {
  return (
    <div class="h-screen p-10 mx-8 bg-gray-100 mt-36">
      <div class="space-y-10">
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold text-background/80">All Pages</div>
          <div class="flex items-center space-x-4">
            <button class="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite">
              Add New Page
            </button>
            <div>
              <button
                class="text-background w-40 shadow-sm font-medium text-sm flex items-center justify-between bg-softWhite py-2.5 px-4 rounded-sm"
                type="button"
              >
                All Pages
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
              {/* <!-- Dropdown menu -->
          <!-- <div
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44"
          >
            <ul class="py-1 text-sm text-gray-700">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                  >This Week</a
                >
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                  >This Year</a
                >
              </li>
            </ul>
          </div> --> */}
            </div>
          </div>
        </div>
        <hr class="border-gray-200" />
        <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4 font-poppins">
          <div class="p-4 space-y-3 shadow-sm bg-softWhite">
            <div class="font-semibold text-background">About Us</div>
            <hr class="border-gray-200" />
            <div class="text-sm font-light text-background/70">3 Jan 2023</div>
            <div class="font-semibold text-background">Publish</div>
            <div class="text-sm font-light text-background/70">
              author:
              <span class="text-sm font-semibold text-background">
                Administrator
              </span>
            </div>
            <div class="flex items-center justify-start pt-10 space-x-4">
              <button class="px-5 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite">
                Preview
              </button>
              <button class="px-3 py-2.5 text-sm font-medium rounded-sm bg-gray-200 text-background">
                Edit Page
              </button>
            </div>
          </div>
          <div class="p-4 space-y-3 shadow-sm bg-softWhite">
            <div class="font-semibold text-background">Contact</div>
            <hr class="border-gray-200" />
            <div class="text-sm font-light text-background/70">3 Jan 2023</div>
            <div class="font-semibold text-background">Publish</div>
            <div class="text-sm font-light text-background/70">
              author:
              <span class="text-sm font-semibold text-background">
                Administrator
              </span>
            </div>
            <div class="flex items-center justify-start pt-10 space-x-4">
              <button class="px-5 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite">
                Preview
              </button>
              <button class="px-3 py-2.5 text-sm font-medium rounded-sm bg-gray-200 text-background">
                Edit Page
              </button>
            </div>
          </div>
          <div class="p-4 space-y-3 shadow-sm bg-softWhite">
            <div class="font-semibold text-background">Service</div>
            <hr class="border-gray-200" />
            <div class="text-sm font-light text-background/70">3 Jan 2023</div>
            <div class="font-semibold text-background">Publish</div>
            <div class="text-sm font-light text-background/70">
              author:
              <span class="text-sm font-semibold text-background">
                Administrator
              </span>
            </div>
            <div class="flex items-center justify-start pt-10 space-x-4">
              <button class="px-5 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite">
                Preview
              </button>
              <button class="px-3 py-2.5 text-sm font-medium rounded-sm bg-gray-200 text-background">
                Edit Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
