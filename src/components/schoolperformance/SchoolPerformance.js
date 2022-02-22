import React from 'react';
import styles from './schoolperformance.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import LineChart from '../linechart/LineChart.js';

const SchoolPerformance = (props) => {
    return (
        <section className={styles.schoolPerformance}>
            <div>
                <header>
                    {/* <LineChartLegends/> */}
                    <SectionTitle title="School Performance"/>
                </header>
                <LineChart/>
            </div>
        </section>
    );
};

export default SchoolPerformance;