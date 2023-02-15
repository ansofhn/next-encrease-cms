import React from "react";

const Pages = () => {
  return (
    <div className="h-screen p-10 mx-8 bg-gray-100 mt-36">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-background/80">
            All Pages
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite">
              Add New Page
            </button>
            <div>
              <button
                className="text-background w-40 shadow-sm font-medium text-sm flex items-center justify-between bg-softWhite py-2.5 px-4 rounded-sm"
                type="button"
              >
                All Pages
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-200" />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-poppins">
          <div className="p-4 space-y-3 shadow-sm bg-softWhite">
            <div className="font-semibold text-background">About Us</div>
            <hr className="border-gray-200" />
            <div className="text-sm font-light text-background/70">
              3 Jan 2023
            </div>
            <div className="font-semibold text-background">Publish</div>
            <div className="text-sm font-light text-background/70">
              author:
              <span className="text-sm font-semibold text-background">
                Administrator
              </span>
            </div>
            <div className="flex items-center justify-start pt-10 space-x-4">
              <button className="px-5 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite">
                Preview
              </button>
              <button className="px-3 py-2.5 text-sm font-medium rounded-sm bg-gray-200 text-background">
                Edit Page
              </button>
            </div>
          </div>
          <div className="p-4 space-y-3 shadow-sm bg-softWhite">
            <div className="font-semibold text-background">Contact</div>
            <hr className="border-gray-200" />
            <div className="text-sm font-light text-background/70">
              3 Jan 2023
            </div>
            <div className="font-semibold text-background">Publish</div>
            <div className="text-sm font-light text-background/70">
              author:
              <span className="text-sm font-semibold text-background">
                Administrator
              </span>
            </div>
            <div className="flex items-center justify-start pt-10 space-x-4">
              <button className="px-5 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite">
                Preview
              </button>
              <button className="px-3 py-2.5 text-sm font-medium rounded-sm bg-gray-200 text-background">
                Edit Page
              </button>
            </div>
          </div>
          <div className="p-4 space-y-3 shadow-sm bg-softWhite">
            <div className="font-semibold text-background">Service</div>
            <hr className="border-gray-200" />
            <div className="text-sm font-light text-background/70">
              3 Jan 2023
            </div>
            <div className="font-semibold text-background">Publish</div>
            <div className="text-sm font-light text-background/70">
              author:
              <span className="text-sm font-semibold text-background">
                Administrator
              </span>
            </div>
            <div className="flex items-center justify-start pt-10 space-x-4">
              <button className="px-5 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite">
                Preview
              </button>
              <button className="px-3 py-2.5 text-sm font-medium rounded-sm bg-gray-200 text-background">
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
