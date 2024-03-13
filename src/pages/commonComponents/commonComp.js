import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";
import { useState } from "react";


export const DarkButton = ({ btn, type, classbtn, onClick }) => {
  return (
    <>
      <button onClick={onClick} type={type} className={classbtn}>
        {btn}
      </button>
    </>
  );
};

export const DonutChart = () => {
  const [donut, setDonut] = useState({
    options: {
      dataLabels: {
        enabled: false,
      },
      colors: ["#FFB200", "#01B529", "#5500DF"],
      plotOptions: {
        pie: {
          donut: {
            size: "50%",
          },
        },
      },
    },
    series: [40, 40, 80],
    style: {
      // colors: ["#FFB200", "#01B529", "#5500DF"],
    },
  });
  return (
    <>
      <div>
        <Chart
          options={donut.options}
          series={donut.series}
          s
          type="donut"
          // width="280"
          height="250"
        />
      </div>
    </>
  );
};


