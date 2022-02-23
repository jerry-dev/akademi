import React from 'react';
import styles from './homeview.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import Overview from '../overview/Overview.js';
import SchoolPerformance from '../schoolperformance/SchoolPerformance.js';

const HomeView = () => {
    return (
        <main>
            <div className={styles.homeViewMainInnerContainer}>
                <header>
                    <SectionTitle title="Dashboard"/>
                </header>                
                <Overview/>
                <SchoolPerformance/>
            </div>
        </main>
    );
}

export default HomeView;