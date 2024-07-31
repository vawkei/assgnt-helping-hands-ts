import classes from "./PieChart.module.css";
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  const data = {
    labels: ['Inviter\'s Benefit', 'Community Rewards', 'Matrix Expansion', 'Sustained Innovation'],
    datasets: [
      {
        label: '# of Votes',
        data: [25, 23, 50, 2],
        backgroundColor: [
          'blue',
          'purple',
          'green',
          'red'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        // position: 'right' as const,
        position: "bottom" as const 
      },
        title: {
      display: true,
      text: "Helping Hands",
    },
    },
  };

  return (
    <div className={classes.chart}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
