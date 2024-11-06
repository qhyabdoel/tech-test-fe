"use client";

import CustomDatePicker from "@/components/DatePicker";
import EChartsReact from "echarts-for-react";

const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

const DashboardPage = () => {
  return (
    <div>
      <div className="text-lg font-semibold mb-6">Dashboard</div>
      <div className="flex">
        <CustomDatePicker />
        <button className="bg-blue-400 text-white mx-4 p-2 w-20 rounded-md font-semibold text-lg">
          Filter
        </button>
      </div>
      <div>
        <EChartsReact option={option} />
      </div>
    </div>
  );
};

export default DashboardPage;
