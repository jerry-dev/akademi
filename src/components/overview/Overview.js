import React from 'react';
import styles from './overview.module.css';

const Overview = (props) => {
    return (
        <section className={styles.sectionCanvas}>
            <div>
                <div className={styles.testStat}></div>
                <div className={styles.testStat}></div>
                <div className={styles.testStat}></div>
                <div className={styles.testStat}></div>
            </div>
        </section>
    );
};

export default Overview;