import React from 'react';
import styles from './homeview.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import Overview from '../overview/Overview.js';
import SchoolPerformance from '../schoolperformance/SchoolPerformance.js';
import SchoolCalendar from '../schoolcalendar/SchoolCalendar.js';
import SchoolFinance from '../schoolfinance/SchoolFinance.js';
import UnpaidStudent from '../unpaidstudent/UnpaidStudent.js';

const HomeView = () => {
    return (
        <main>
            <div className={styles.homeViewMainInnerContainer}>
                <header>
                    <SectionTitle title="Dashboard"/>
                </header>                
                <Overview/>
                <SchoolPerformance/>
                <SchoolCalendar/>
                <SchoolFinance/>
                <UnpaidStudent/>
            </div>
        </main>
    );
}

export default HomeView;