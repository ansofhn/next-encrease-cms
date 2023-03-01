import React, { useState } from "react";
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
import { reportRepository } from "../repository/report";

const Dashboard = () => {
  const { data: dataReport } = reportRepository.hooks.getReport();
  const report = dataReport?.data;

  const { data: dataRevenue } = reportRepository.hooks.getRevenue();
  const revenue = dataRevenue?.data;

  const transaction = [];
  const sold = [];

  revenue?.map((data) => {
    transaction.push(Number(data?.transaction));
    sold.push(Number(data?.transactionsuccess));
  });

  // Bar Charts
  const datas = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Transaction",
        borderRadius: 4,
        data: transaction,
        backgroundColor: "#23374D",
        barThickness: 24,
      },
      {
        label: "Sold",
        borderRadius: 4,
        data: sold,
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
    backgroundColor: ["#23374D", "#E5E5E5"],
    labels: ["Goods", "Services"],
    datasets: [
      {
        label: "Amount",
        data: [report?.type[0]?.productCount, report?.type[1]?.productCount],
        backgroundColor: ["#23374D", "#E5E5E5"],
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
    <div className="p-10 pb-10 mx-8 bg-gray-100 mt-36">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-background/80">
            Dashboard
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 xl:grid-cols-4">
          <div className="px-8 py-6 space-y-5 font-medium rounded-sm bg-softWhite text-background/80">
            <div className="text-sm">Total User</div>
            <div className="text-3xl font-bold">{report?.user}</div>
          </div>
          <div className="px-8 py-6 space-y-5 font-medium rounded-sm bg-softWhite text-background/80">
            <div className="text-sm">Total Product</div>
            <div className="text-3xl font-bold">{report?.product}</div>
          </div>
          <div className="px-8 py-6 space-y-5 font-medium rounded-sm bg-softWhite text-background/80">
            <div className="text-sm">Total Order</div>
            <div className="text-3xl font-bold">{report?.transaction}</div>
          </div>

          <div className="flex-col justify-between hidden row-span-3 p-6 rounded-sm xl:flex bg-softWhite">
            <div className="text-base font-semibold xl:text-xl text-background/80">
              Category Product
            </div>
            <Doughnut
              data={data}
              className={"w-full h-full"}
              options={option}
            />
            <div className="flex items-center p-3 bg-gray-100 rounded-sm">
              <div className="p-3 rounded-sm bg-softWhite flex items-center w-[50%]">
                <div className="">
                  <div className="text-xl font-semibold text-center text-background/80">
                    {((report?.sold / report?.transaction) * 100).toFixed(1)}%
                  </div>
                  <div className="text-xs font-medium text-background/70">
                    Weekly
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="text-2xl font-semibold text-background/80">
                  {report?.sold}
                </div>
                <div className="text-xs font-medium text-background/70">
                  Total Sold
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
