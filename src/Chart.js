import React, { useState, useEffect, useContext } from 'react';
import Chart from 'react-apexcharts';
import { ThemeContext } from './Context';

const MyChart = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)

  const [seriesData, setSeriesData] = useState([0.9, 0.9, 0.9, 0.9]);
  const [areaData, setAreaData] = useState([null, null, null, null, 1, 1, 1, null]);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (elapsedTime >= 10) {
      return;
    }

    const interval = setInterval(() => {
      if (document.querySelector('#chart-video').currentTime > 1 && (!document.querySelector('#chart-video').paused)) {
        
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
  
        setSeriesData((prevSeriesData) => {
          const newSeriesData = [...prevSeriesData];
          newSeriesData[newSeriesData.length - 1] += Math.random() / 10;
          return newSeriesData;
        });
  
        setAreaData((prevAreaData) => {
          const newAreaData = [...prevAreaData.slice(1), null];
          return newAreaData;
        });

      }
    }, 3000);

    return () => clearInterval(interval);
  }, [elapsedTime]);

  const labelColors = {
    light: ['#000'],
    dark: ['#fff'],
  };

  const options = {
    chart: {
      id: 'mychart',
      toolbar: false
    },
    grid: {
      strokeDashArray: 4,
      borderColor: labelColors[isDark ? 'dark' : 'light'][0],
      xaxis: {
        lines: {
          show: false
        }
      },   
      yaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        left: 20,
        right: 20
      }
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
        data: seriesData
      },
      {
        name: '',
        type: 'area',
        data: areaData,
      }
    ],
    xaxis: {
      categories: [
        '02:00', '02:05', '02:10', '02:15', '02:20', '02:25', '02:30', '02:35'
      ],
      labels: {
        style: {
          fontSize: '16px',
          fontFamily: '',
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
          fontSize: '15px'
        }
      },
      labels: {
        formatter: (value) => value?.toFixed(1),
        style: {
          colors: labelColors[isDark ? 'dark' : 'light'],
          fontSize: '16px',
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
