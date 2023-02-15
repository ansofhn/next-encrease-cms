import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  BarElement,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

import { Doughnut, Bar } from "react-chartjs-2";

const Dashboard = () => {
  // Bar Charts

  const datas = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Product",
        borderRadius: 4,
        data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6],
        backgroundColor: "#23374D",
        barThickness: 24,
      },
      {
        label: "Order",
        borderRadius: 4,
        data: [0.07, 0.3, 0.15, 0.2, 0.6, 0.5, 0.3],
        backgroundColor: "#E5E5E5",
        barThickness: 24,
      },
    ],
  };

  const options = {
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
    element: {
      bar: {
        barPercentage: 0.3,
        categoryPercentage: 1,
      },
    },
    responsive: true,
  };

  // Doughnut Charts

  const data = {
    backgroundColor: ["#23374D", "#E5E5E5", "#1089FF"],
    labels: ["SIJA", "TKJ", "RPL"],
    datasets: [
      {
        label: "Total User",
        data: [50, 40, 30],
        backgroundColor: ["#23374D", "#E5E5E5", "#1089FF"],
        hoverOffset: 4,
      },
    ],
  };

  const option = {
    element: {
      arc: {
        weight: 0.5,
        borderWidth: 10,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="p-10 mx-8 bg-gray-100 pb-28 mt-36">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-background/80">
            Dashboard
          </div>
          <div>
            <button
              className="text-background/80 w-40 shadow-sm font-medium text-sm flex items-center justify-between bg-softWhite py-2.5 px-4 rounded-sm"
              type="button"
            >
              This Month
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

            <div className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44">
              <ul className="py-1 text-sm text-gray-700">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    This Week
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    This Year
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="px-8 py-6 space-y-5 font-medium rounded-sm bg-softWhite text-background/80">
            <div className="text-sm">Total User</div>
            <div className="text-3xl font-bold">120</div>
          </div>
          <div className="px-8 py-6 space-y-5 font-medium rounded-sm bg-softWhite text-background/80">
            <div className="text-sm">Total Product</div>
            <div className="text-3xl font-bold">75</div>
          </div>
          <div className="px-8 py-6 space-y-5 font-medium rounded-sm bg-softWhite text-background/80">
            <div className="text-sm">Total Order</div>
            <div className="text-3xl font-bold">100</div>
          </div>

          <div className="flex flex-col justify-between row-span-3 p-6 rounded-sm bg-softWhite">
            <div className="text-xl font-semibold text-background/80">
              New User
            </div>
            <Doughnut
              data={data}
              className={"w-full h-full"}
              options={option}
            />
            <div className="flex items-center p-3 bg-gray-100 rounded-sm">
              <div className="p-3 rounded-sm bg-softWhite flex items-center w-[50%]">
                <div className="w-[50%] bg-background/50"></div>
                <div>
                  <div className="text-xl font-semibold text-background/80">
                    30%
                  </div>
                  <div className="text-xs font-medium text-background/70">
                    Weekly
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="text-2xl font-semibold text-background/80">
                  40
                </div>
                <div className="text-xs font-medium text-background/70">
                  Total New User
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 row-span-2 p-8 space-y-8 rounded-sm bg-softWhite">
            <div className="text-xl font-semibold text-background/80">
              Revenue
            </div>
            <Bar data={datas} height={102} options={options} />
          </div>
          {/* <div className="col-span-3 row-span-2 rounded-sm bg-softWhite h-96"></div>
          <div className="row-span-3 rounded-sm bg-softWhite"></div>
          <div className="rounded-sm h-60 bg-softWhite"></div>
          <div className="rounded-sm h-60 bg-softWhite"></div>
          <div className="rounded-sm h-60 bg-softWhite"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
