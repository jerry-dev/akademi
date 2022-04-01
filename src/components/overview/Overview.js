import React from 'react';
import styles from './overview.module.css';
import OverviewMetric from '../overviewmetric/OverviewMetric.js';
import students from '../../assets/icons/shared/Student.svg';
import teachers from '../../assets/icons/shared/Teacher.svg';
import events from '../../assets/icons/shared/Calendar.svg';
import foods from '../../assets/icons/shared/Food.svg';

const Overview = (props) => {

    const iconManager = (name) => {
        return {
            'students': students,
            'teachers': teachers,
            'events': events,
            'foods': foods,
        }[name]
    }

    return (
        <section className={styles.sectionCanvas}>
            <div>{
                    props.metricsData.map((metric) => {
                        return <OverviewMetric
                        key={Math.floor(Math.random() * 99999)}
                        icon={iconManager(metric.title)}
                        statTitle={metric.title.replace(metric.title[0], metric.title[0].toUpperCase())}
                        stat={metric.stat.replace(/\,.*/, "k")}
                        />
                })
            }</div>
        </section>
    );
};

export default Overview;