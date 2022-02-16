import React from 'react';
import styles from './schoolperformance.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';

const SchoolPerformance = (props) => {
    return (
        <section className={styles.schoolPerformance}>
            <div>
                <SectionTitle title="School Performance"/>
                <h1>Chart</h1>
            </div>
        </section>
    );
};

export default SchoolPerformance;