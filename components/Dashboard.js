import React from "react";

const Dashboard = () => {
  return (
    <div class="p-10 mx-8 bg-gray-100 mt-36">
      <div class="space-y-10">
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold text-background/80">Dashboard</div>
          <div>
            <button
              class="text-background w-40 shadow-sm font-medium text-sm flex items-center justify-between bg-softWhite py-2.5 px-4 rounded-sm"
              type="button"
            >
              This Month
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

        <div class="grid grid-cols-4 gap-6">
          <div class="rounded-sm h-60 bg-softWhite"></div>
          <div class="rounded-sm h-60 bg-softWhite"></div>
          <div class="rounded-sm h-60 bg-softWhite"></div>
          <div class="row-span-3 rounded-sm bg-softWhite"></div>
          <div class="col-span-3 row-span-2 rounded-sm bg-softWhite h-96"></div>
          <div class="col-span-3 row-span-2 rounded-sm bg-softWhite h-96"></div>
          <div class="row-span-3 rounded-sm bg-softWhite"></div>
          <div class="rounded-sm h-60 bg-softWhite"></div>
          <div class="rounded-sm h-60 bg-softWhite"></div>
          <div class="rounded-sm h-60 bg-softWhite"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
