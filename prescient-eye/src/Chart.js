import React from 'react';
import Chart from 'react-apexcharts';

const MyChart = () => {
  const options = {
    chart: {
      id: 'mychart'
    },
    series: [
      {
        name: 'Line',
        type: 'line',
        data: [0.9, 0.9, 0.9, 0.9]
      },
      {
        name: 'Area',
        type: 'area',
        data: [null, null, null, null, 1, 1, 1, null],
      }
    ],
    xaxis: {
      categories: ['0', '250', '500', '750', '1000', '1250', '1500', '1750']
    },
    yaxis: {
      min: 0.0,
      max: 1.0,
      tickAmount: 5,
    }
  };

  return (
    <div className=''>
        <Chart options={options} series={options.series} type="line" height={350} />
    </div>
  );
}

export default MyChart;
