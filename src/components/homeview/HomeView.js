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

const HomeView = ({ overviewData, students }) => {
    const unpaidData = students.map((student) => {
        return {
            studentFullName: student.studentName,
            studentId: student.id,
            studentClass: student.academicRecords.class,
            studentDebt: student.financialRecords.debt,
            studentPhoto: student.bio.profilePhoto
        };
    });

    const recentStudents = students.map((student) => {
        return {
            studentName: student.studentName,
            studentClass: student.academicRecords.class,
        };
    });

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
            <RightMenu recentStudents={recentStudents}/>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return { overviewData: state.overview, students: state.students };
};

export default connect(mapStateToProps)(HomeView);