import React from 'react';
import styles from './schoolperformance.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import LineChart from '../linechart/LineChart.js';
import ChartMetric from '../chartmetric/ChartMetric.js';

const SchoolPerformance = (props) => {
    return (
        <section className={styles.schoolPerformance}>
            <div>
                <header>
                    <SectionTitle title="School Performance"/>
                    <div>
                        <ChartMetric title="This Week" stat="1.245" style="one"/>
                        <ChartMetric title="Last Week" stat="1.356" style="two"/>
                    </div>
                </header>
                <LineChart/>
            </div>
        </section>
    );
};

export default SchoolPerformance;