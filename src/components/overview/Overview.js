import React from 'react';
import styles from './overview.module.css';
import OverviewMetric from '../overviewmetric/OverviewMetric.js';
import Student from '../../assets/icons/shared/Student.svg';
import Teacher from '../../assets/icons/shared/Teacher.svg';
import Calendar from '../../assets/icons/shared/Calendar.svg';
import Food from '../../assets/icons/shared/Food.svg';

const Overview = (props) => {
    return (
        <section className={styles.sectionCanvas}>
            <div>
                <OverviewMetric icon={Student} statTitle="Students" stat="932"/>
                <OverviewMetric icon={Teacher} statTitle="Teachers" stat="754"/>
                <OverviewMetric icon={Calendar} statTitle="Events" stat="40"/>
                <OverviewMetric icon={Food} statTitle="Foods" stat="32k"/>
            </div>
        </section>
    );
};

export default Overview;