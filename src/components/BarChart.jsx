// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import sourceData from '../atoms/sourceData.json';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const BarChart = () => {
  return (
    <Bar
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
            borderRadius: 5,
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Revenue Source",
          },
        },
      }}
    />
  );
};

export default BarChart;