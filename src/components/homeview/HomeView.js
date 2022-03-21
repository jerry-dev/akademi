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
import setFakeTimeStamps from './setFakeTimeStamps';
import menuIcon from '../../assets/icons/shared/menu.svg';
import enableBodyScroll from '../../utils/enableBodyScroll.js';
import closeOnEscKeyDown from '../../utils/closeOnEscKeyDown.js';
import mobileRightMenuManager from '../../utils/mobileRightMenuManager.js';

const HomeView = ({ overviewData, students, studentMessages, menuItems, schoolEvents }) => {
    const unpaidData = getUnpaidStudentData(students);
    const recentStudents = getRecentStudents(students);
    setFakeTimeStamps(studentMessages);
    const currentFoodsItems = getCurrentFoodsItems(menuItems);

    return (
        <React.Fragment>
            <main className={styles.homeViewMain} onKeyDown={closeOnEscKeyDown} tabIndex="0">
                <div className={styles.homeViewMainInnerContainer}>
                    <header>
                        <SectionTitle title="Dashboard"/>
                        <img src={menuIcon} alt="Right menu" onClick={mobileRightMenuManager}/>
                    </header>                
                    <Overview metricsData={overviewData}/>
                    <SchoolPerformance/>
                    <SchoolCalendar schoolEvents={schoolEvents}/>
                    <SchoolFinance/>
                    <UnpaidStudent unpaidStudents={unpaidData}/>
                </div>
            </main>
            <RightMenu
                identifier={"defaultrightmenu"}
                studentMessages={studentMessages}
                recentStudents={recentStudents}
                currentFoodsItems={currentFoodsItems}/>

            <div className={styles.mobileRightMenuContainer} onClick={enableBodyScroll}>
                <RightMenu
                    identifier={"mobileRightMenu"}
                    studentMessages={studentMessages}
                    recentStudents={recentStudents}
                    currentFoodsItems={currentFoodsItems}/>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        overviewData: state.overview,
        studentMessages: state.messages,
        students: state.students,
        menuItems: state.food,
        schoolEvents: state.events
    };
};

export default connect(mapStateToProps)(HomeView);