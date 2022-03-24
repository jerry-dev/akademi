import React from 'react';
import styles from './homeview.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import Overview from '../overview/Overview.js';
import SchoolPerformance from '../schoolperformance/SchoolPerformance.js';
import SchoolCalendar from '../schoolcalendar/SchoolCalendar.js';
import SchoolFinance from '../schoolfinance/SchoolFinance.js';
import UnpaidStudent from '../unpaidstudent/UnpaidStudent.js';
import RightMenu from '../rightmenu/RightMenu.js';
import homeViewDataFetcher from './homeViewDataFetcher.js';
import { connect, useSelector, useDispatch } from 'react-redux';
import getUnpaidStudentData from './getUnpaidStudentData.js';
import getRecentStudents from './getRecentStudents.js';
import getCurrentFoodsItems from './getCurrentFoodsItems.js';
import setFakeTimeStamps from './setFakeTimeStamps';
import menuIcon from '../../assets/icons/shared/menu.svg';
import enableBodyScroll from '../../utils/enableBodyScroll.js';
import closeOnEscKeyDown from '../../utils/closeOnEscKeyDown.js';
import mobileRightMenuManager from '../../utils/mobileRightMenuManager.js';

const HomeView = () => {
    const dispatch = useDispatch();
    const overviewData = useSelector((state) => state.overview)
    const studentMessages = useSelector((state) => state.messages)

    const students = useSelector((state) => state.students)
    const menuItems = useSelector((state) => state.food)
    const schoolEvents = useSelector((state) => state.events)
    
    React.useEffect(() => {
        homeViewDataFetcher.fetchA(dispatch);
    },[]);
    
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

export default connect()(HomeView);