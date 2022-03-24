import React from 'react';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Filler,
    Legend,
    Title,
    Tooltip
  } from 'chart.js';
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Filler,
    Legend,
    Title,
    Tooltip
  );
import styles from './linechart.module.css';

const getLinearGradientFill = (chart, color1, color2) => {
    const x0 = 0;
    const x1 = 0;

    const y0 = chart.scales.yAxes.top;
    const y1 = chart.scales.yAxes.bottom;

    const linearGradientPattern = chart.ctx.createLinearGradient(x0, y0, x1, y1);
    linearGradientPattern.addColorStop(0, color1);
    linearGradientPattern.addColorStop(1, color2);

    return linearGradientPattern;
}

const LineChart = (props) => {
    const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    const thisWeekPerformance = [20, 40, 50, 25, 10, 25, 50, 30, 10, 50, 90, 40];
    const lastWeekPerformance = [0, 50, 80, 45, 0, 25, 50, 40, 10, 50, 75, 60];

    React.useEffect(() => {
        const dataObj = {
            labels: months,
            datasets: [
                {
                    label: "Performance",
                    data: thisWeekPerformance,
                    borderColor: 'rgba(251, 125, 91, 1)',
                    borderWidth: 6,
                    pointStyle: 'circle',
                    pointRadius: 8,
                    pointBackgroundColor: "rgba(255, 255, 255, 1)",
                    data: [null, null, null, null, null, null, 50, null, null, null, null, null],
                },
                {
                    label: "Performance",
                    data: thisWeekPerformance,
                    borderColor: 'rgba(251, 125, 91, 1)',
                    borderWidth: 6,
                    pointStyle: 'circle',
                    pointRadius: 0,
                    fill: true
                },
                {
                    label: "Performance",
                    data: lastWeekPerformance,
                    borderColor: 'rgba(252, 196, 62, 1)',
                    borderWidth: 6,
                    pointRadius: 0,
                    fill: true
                },
            ]
        };

        const chartObj = {
            type: "line",
            data: dataObj,
            options: {
                maintainAspectRatio: false,
                elements: {
                    line: {
                        tension: 0.3
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                },                            
                scales: {
                    yAxes: {
                        grid: {
                            tickLength: 31,
                            tickColor: "red",
                            display: false
                        },
                        ticks: {
                            color: 'rgba(160, 152, 174, 1)',
                            stepSize: 25,
                            font: {
                                size: 18,
                            },
                        },
                    },
                    xAxes: {
                        ticks: {
                            font: {
                                size: 18,
                            },
                            color: [
                                'rgba(160, 152, 174, 1)',
                                'rgba(160, 152, 174, 1)',
                                'rgba(160, 152, 174, 1)',
                                'rgba(160, 152, 174, 1)',
                                'rgba(160, 152, 174, 1)',
                                'rgba(160, 152, 174, 1)',
                                'rgba(48, 57, 114, 1)',
                                'rgba(160, 152, 174, 1)',
                                'rgba(160, 152, 174, 1)',
                                'rgba(160, 152, 174, 1)',
                                'rgba(160, 152, 174, 1)',
                                'rgba(160, 152, 174, 1)',
                            ],
                        },
                        grid: {
                            drawBorder: false,
                            tickLength: 27.83,
                            tickColor: "transparent"
                        }
                    },
                },
            }
        };
        
        const chart = new Chart('theLineChart', chartObj);
        chart.data.datasets[1].backgroundColor = getLinearGradientFill(chart, 'rgba(251, 125, 91, 0.3)', 'rgba(251, 125, 91, 0)');
        chart.data.datasets[2].backgroundColor = getLinearGradientFill(chart, 'rgba(252, 196, 62, 0.3)', 'rgba(252, 196, 62, 0)');
        chart.update();
    });

    return (
        <figure className={styles.figure}>
            <canvas id="theLineChart"></canvas>
        </figure>
    );
};

export default LineChart;