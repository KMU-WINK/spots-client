import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import * as styles from './styles';
import { useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart(props) {
  useEffect(() => {
    if (props?.data) {
      setChartData({
        ...chartData,
        datasets: [
          {
            ...chartData.datasets[0],
            data: [props.data.mCount, props.data.wCount],
          },
        ],
      });
    }
  }, [props.chartData]);

  const options = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const [chartData, setChartData] = useState({
    labels: ['남자', '여자'],
    datasets: [
      {
        data: [5, 5],
        backgroundColor: ['#FB1E53', '#D9D9D9'],
        borderWidth: 0,
      },
    ],
  });
  return (
    <styles.ChartContainer size={props.size}>
      <Pie data={chartData} options={options} />
    </styles.ChartContainer>
  );
}
