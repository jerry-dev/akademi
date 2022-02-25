import React from 'react';
import styles from './schoolfinance.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import ChartMetric from '../chartmetric/ChartMetric.js';
import DoubleBarChart from '../doublebarchart/DoubleBarChart.js';

const SchoolFinance = (props) => {
    return (
        <section className={styles.schoolFinance}>
            <div>
                <header>
                    <SectionTitle title="School Finance"/>
                    <div>
                        <ChartMetric title="This Week" stat="1.245" style="one"/>
                        <ChartMetric title="Last Week" stat="1.356" style="two"/>
                    </div>
                </header>
                <DoubleBarChart/>
            </div>
        </section>
    );
}

export default SchoolFinance;