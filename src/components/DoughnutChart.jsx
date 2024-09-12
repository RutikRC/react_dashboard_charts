// DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import sourceData from '../atoms/sourceData.json';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const DoughnutChart = () => {
  return (
    <Doughnut
      data={{
        labels: sourceData.map((data) => data.label),
        datasets: [
          {
            label: "Count",
            data: sourceData.map((data) => data.value),
            backgroundColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
            ],
            borderColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
            ],
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Revenue Sources",
          },
        },
      }}
    />
  );
};

export default DoughnutChart;