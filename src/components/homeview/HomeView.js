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
import getUnpaidStudentData from './getUnpaidStudentData.js';
import getRecentStudents from './getRecentStudents.js';
import getCurrentFoodsItems from './getCurrentFoodsItems.js';

const HomeView = ({ overviewData, students, studentMessages, menuItems }) => {
    const unpaidData = getUnpaidStudentData(students);
    const recentStudents = getRecentStudents(students);

    studentMessages.forEach((instance) => {
        let fakeTimeStamp = new Date(
            Date.UTC(
                new Date().getFullYear(),
                new Date().getMonth(),
                new Date().getDate(),
                new Date().getUTCHours(),
                Math.floor(Math.random() * 59)
            )
        ).toLocaleString().replace(/^.*, /, "");
    
        fakeTimeStamp = fakeTimeStamp.replace(/:00 /, " ");

        instance.latestMessageTimeStamp = fakeTimeStamp;
    });

    const currentFoodsItems = getCurrentFoodsItems(menuItems);

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
                    <UnpaidStudent unpaidStudents={unpaidData}/>
                </div>
            </main>
            <RightMenu
                studentMessages={studentMessages}
                recentStudents={recentStudents}
                currentFoodsItems={currentFoodsItems}/>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        overviewData: state.overview,
        studentMessages: state.messages,
        students: state.students,
        menuItems: state.food
    };
};

export default connect(mapStateToProps)(HomeView);