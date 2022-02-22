import React from 'react';
import styles from './linechart.module.css';

const LineChart = (props) => {
    React.useEffect(() => {
        const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
        const thisWeekPerformance = [20, 40, 50, 25, 10, 25, 50, 30, 10, 50, 90, 40];
        const lastWeekPerformance = [0, 50, 80, 45, 0, 25, 50, 40, 10, 50, 75, 60];

        function drawGradient(chart) {
            const x0 = 0;
            const y0 = chart.scales["y-axis-0"].top;
            const x1 = 0;
            const y1 = chart.scales["y-axis-0"].bottom;
       
            const gradient1 = chart.ctx.createLinearGradient(x0, y0, x1, y1);
            gradient1.addColorStop(0, 'rgba(251, 125, 91, 0.3)');
            gradient1.addColorStop(1, 'rgba(251, 125, 91, 0)');
       
            const gradient2 = chart.ctx.createLinearGradient(x0, y0, x1, y1);
            gradient2.addColorStop(0, 'rgba(252, 196, 62, 0.3)');
            gradient2.addColorStop(1, 'rgba(252, 196, 62, 0)');
       
            chart.data.datasets[1].backgroundColor = gradient1;
            chart.data.datasets[2].backgroundColor = gradient2;
        }

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
                    data: [null, null, null, null, null, null, 50, null, null, null, null, null]
                },
                {
                    label: "Performance",
                    data: thisWeekPerformance,
                    borderColor: 'rgba(251, 125, 91, 1)',
                    borderWidth: 6,
                    pointStyle: 'circle',
                    pointRadius: 0
                },
                {
                    label: "Performance",
                    data: lastWeekPerformance,
                    borderColor: 'rgba(252, 196, 62, 1)',
                    borderWidth: 6,
                    pointRadius: 0,
                },
            ]
        };

        const fontColorArray = [
            'rgba(160, 152, 174, 1)',
            'rgba(160, 152, 174, 1)',
            'rgba(160, 152, 174, 1)',
            'rgba(160, 152, 174, 1)',
            'rgba(160, 152, 174, 1)',
            'rgba(160, 152, 174, 1)',
            'rgba(252, 196, 62, 1)',
            'rgba(160, 152, 174, 1)',
            'rgba(160, 152, 174, 1)',
            'rgba(160, 152, 174, 1)',
            'rgba(160, 152, 174, 1)',
            'rgba(160, 152, 174, 1)',
        ];

        const chartObj = {
            type: "line",
            data: dataObj,
            options: {
                maintainAspectRatio: false,
                animation: {
                    onComplete: function(context) {
                        drawGradient(context.chart);
                    }
                },
                legend: {
                    display: false
                },                
                scales: {
                    yAxes: [{
                        ticks: {
                            stepSize: 25,
                            fontColor: 'rgba(160, 152, 174, 1)',
                            fontSize: 18,
                            padding: 31
                        },
                        gridLines: {
                            drawBorder: false,
                            display: false
                        },
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: 'rgba(160, 152, 174, 1)',
                            fontSize: 18,
                            padding: 27.83
                        },
                        gridLines: {
                            drawBorder: false,
                            color: '#C1BBEB',
                            lineWidth: 1,
                        }
                    }],
                },
            }
        };
        
        const chart = new Chart('theLineChart', chartObj);

        drawGradient(chart);
        chart.update();
    });

    return (
        <figure className={styles.figure}>
            <canvas id="theLineChart"></canvas>
        </figure>
    );
};

export default LineChart;