import React, { useContext } from 'react';
import Chart from 'react-apexcharts';
import { ThemeContext } from './Context';

const MyChart = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)

  const labelColors = {
    light: ['#000'],
    dark: ['#fff'],
  };

  const options = {
    chart: {
      id: 'mychart'
    },
    legend: {
      labels: {
        colors: labelColors[isDark ? 'dark' : 'light'],
      }
    },
    series: [
      {
        name: '',
        type: 'line',
        data: [0.9, 0.9, 0.9, 0.9]
      },
      {
        name: '',
        type: 'area',
        data: [null, null, null, null, 1, 1, 1, null],
      }
    ],
    xaxis: {
      categories: ['0', '250', '500', '750', '1000', '1250', '1500', '1750'],
      labels: {
        style: {
          colors: labelColors[isDark ? 'dark' : 'light'][0],
        },
      },
    },
    yaxis: {
      min: 0.0,
      max: 1.0,
      tickAmount: 5,
      title: {
        text: 'Anomaly Score',
        style: {
          color: labelColors[isDark ? 'dark' : 'light'][0],
        }
      },
      labels: {
        style: {
          colors: labelColors[isDark ? 'dark' : 'light'],
        },
      },
    }
  };

  return (
    <div className=''>
        <Chart options={options} series={options.series} type="line" height={350} />
    </div>
  );
}

export default MyChart;
