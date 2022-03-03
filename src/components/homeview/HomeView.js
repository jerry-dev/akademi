import React from 'react';
import styles from './homeview.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import Overview from '../overview/Overview.js';
import SchoolPerformance from '../schoolperformance/SchoolPerformance.js';
import SchoolCalendar from '../schoolcalendar/SchoolCalendar.js';
import SchoolFinance from '../schoolfinance/SchoolFinance.js';
import UnpaidStudent from '../unpaidstudent/UnpaidStudent.js';
import RightMenu from '../rightmenu/RightMenu.js';
import { connect } from 'react-redux';

const HomeView = ({overviewData}) => {
    return (
        <React.Fragment>
            <main className={styles.homeViewMain}>
                <div className={styles.homeViewMainInnerContainer}>
                    <header>
                        <SectionTitle title="Dashboard"/>
                    </header>                
                    <Overview metricsData={overviewData}/>
                    <SchoolPerformance/>
                    <SchoolCalendar/>
                    <SchoolFinance/>
                    <UnpaidStudent/>
                </div>
            </main>
            <RightMenu/>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return { overviewData: state.overview };
};

export default connect(mapStateToProps)(HomeView);