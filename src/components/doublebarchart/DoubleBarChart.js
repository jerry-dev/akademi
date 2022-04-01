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
import styles from './doublebarchart.module.css';

const DoubleBarChart = () => {
    const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    const thisWeekIncome = [75, 55, 30, 39, 20, 81, 52];
    const lastWeekIncome = [95, 41, 39, 45, 30, 64, 75];
    
    React.useEffect(() => {
        const dataObj = {
            labels: days,
            datasets: [
                {
                    label: "Income",
                    data: thisWeekIncome,
                    backgroundColor: "rgba(251, 125, 91, 1)",
                    borderRadius: 6,
                    barPercentage: 0.7,
                },
                {
                    label: "Income",
                    data: lastWeekIncome,
                    backgroundColor: "rgba(252, 196, 62, 1)",
                    borderRadius: 6,
                    barPercentage: 0.7,
                },
            ],
        };
    
        const chartObj = {
            type: "bar",
            data: dataObj,
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(77, 68, 181, 1)',
                        displayColors: false,
                        padding: 10,
                        titleAlign: 'center',
                        yAlign: 'bottom',
                        titleColor: 'rgba(255, 255, 255, 1)',
                        callbacks: {
                            title: function(context) {
                                const title = `${context[0].formattedValue}%`;
                                return title;
                            },
                            label: function() {
                                const label = `Income`;
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    yAxes: {
                        beginAtZero: true,
                        ticks: {
                            padding: 0,
                            stepSize: 20,
                            color: 'rgba(160, 152, 174, 1)',
                            font: {
                                size: 18,
                            },
                        },
                        grid: {
                            color: 'rgba(193, 187, 235, 1)',
                            tickLength: 20,
                            tickColor: "transparent"
                        }
                    },
                    xAxes: {
                        ticks: {
                            color: [
                                'rgba(160, 152, 174, 1)',
                                'rgba(160, 152, 174, 1)',
                                'rgba(48, 57, 114, 1)',
                                'rgba(160, 152, 174, 1)',
                                'rgba(160, 152, 174, 1)',
                                'rgba(160, 152, 174, 1)',
                                'rgba(160, 152, 174, 1)'
                            ],
                            font: {
                                size: 18
                            },
                        },
                        grid: {
                            color: 'rgba(193, 187, 235, 1)',
                            tickLength: 25.95,
                            tickColor: "transparent"
                        }
                    },
                },
            }
        };
        
        new Chart("theDoubleBarChart", chartObj);
    }, []);
    

    return (
        <figure className={styles.figure}>
            <canvas id="theDoubleBarChart"></canvas>
        </figure>
    );
};

export default DoubleBarChart;