import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const data = {
  labels: ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'],
  datasets: [
    {
      label: 'Activity',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [6500, 5900, 8000, 8100, 5600, 5500, 4000, 6400, 8000, 8100, 5600, 5500, 4000, 6400, 8000, 8100, 5600, 5500, 4000, 6400, 8000, 8100, 5600]
    }
  ]
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const ActivityChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
