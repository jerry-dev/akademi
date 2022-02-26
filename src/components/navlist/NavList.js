import React from 'react';
import styles from './navlist.module.css';
import Home from '../../assets/icons/shared/Home.svg';
import blueHome from '../../assets/icons/shared/blue/Home.svg';
import Student from '../../assets/icons/shared/Student.svg';
import blueStudent from '../../assets/icons/shared/blue/Student.svg';
import Teacher from '../../assets/icons/shared/Teacher.svg';
import blueTeacher from '../../assets/icons/shared/blue/Teacher.svg';
import Calendar from '../../assets/icons/shared/Calendar.svg';
import blueCalendar from '../../assets/icons/shared/blue/Calendar.svg';
import Finance from '../../assets/icons/shared/Finance.svg';
import blueFinance from '../../assets/icons/shared/blue/Finance.svg';
import Food from '../../assets/icons/shared/Food.svg';
import blueFood from '../../assets/icons/shared/blue/Food.svg';
import User from '../../assets/icons/shared/User.svg';
import blueUser from '../../assets/icons/shared/blue/User.svg';
import Chat from '../../assets/icons/shared/Chat.svg';
import blueChat from '../../assets/icons/shared/blue/Chat.svg';
import Activity from '../../assets/icons/shared/Activity.svg';
import blueActivity from '../../assets/icons/shared/blue/Activity.svg';
import NavElement from '../navelement/NavElement.js';

const NavList = () => {
    return (
        <nav>
            <ul className={styles.navlist}>
                <li>
                    <NavElement
                        path="/"
                        icon={Home}
                        blueIcon={blueHome}
                        text="Dashboard"/>
                </li>
                <li>
                    <NavElement
                        path="students"
                        icon={Student}
                        blueIcon={blueStudent}
                        text="Students"/>
                </li>
                <li>
                    <NavElement
                        path="teachers"
                        icon={Teacher}
                        blueIcon={blueTeacher}
                        text="Teachers"/>
                </li>
                <li>
                    <NavElement
                        path="event"
                        icon={Calendar}
                        blueIcon={blueCalendar}
                        text="Event"/>
                </li>
                <li>
                    <NavElement
                        path="finance"
                        icon={Finance}
                        blueIcon={blueFinance}
                        text="Finance"/>
                </li>
                <li>
                    <NavElement
                        path="food"
                        icon={Food}
                        blueIcon={blueFood}
                        text="Food"/>
                </li>
                <li>
                    <NavElement
                        path="user"
                        icon={User}
                        blueIcon={blueUser}
                        text="User"/>
                </li>
                <li>
                    <NavElement
                        path="chat"
                        icon={Chat}
                        blueIcon={blueChat}
                        text="Chat"/>
                </li>
                <li>
                    <NavElement
                        path="activity"
                        icon={Activity}
                        blueIcon={blueActivity}
                        text="Latest Activity"/>
                </li>
            </ul>
        </nav>
    )
}

export default NavList;