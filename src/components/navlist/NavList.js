import React from 'react';
import styles from './navlist.module.css';
import Home from '../../assets/icons/shared/Home.svg';
import Student from '../../assets/icons/shared/Student.svg';
import Calendar from '../../assets/icons/shared/Calendar.svg';
import Finance from '../../assets/icons/shared/Finance.svg';
import Food from '../../assets/icons/shared/Food.svg';
import User from '../../assets/icons/shared/User.svg';
import Chat from '../../assets/icons/shared/Chat.svg';
import Activity from '../../assets/icons/shared/Activity.svg';
import NavElement from '../navelement/NavElement.js';

const NavList = () => {
    return (
        <nav>
            <ul className={styles.navlist}>
                <li>
                    <NavElement
                        path="/"
                        icon={Home}
                        text="Dashboard"/>
                </li>
                <li>
                    <NavElement
                        path="students"
                        icon={Student}
                        text="Students"/>
                </li>
                <li>
                    <NavElement
                        path="teachers"
                        icon={Student}
                        text="Teachers"/>
                </li>
                <li>
                    <NavElement
                        path="event"
                        icon={Calendar}
                        text="Event"/>
                </li>
                <li>
                    <NavElement
                        path="finance"
                        icon={Finance}
                        text="Finance"/>
                </li>
                <li>
                    <NavElement
                        path="food"
                        icon={Food}
                        text="Food"/>
                </li>
                <li>
                    <NavElement
                        path="user"
                        icon={User}
                        text="User"/>
                </li>
                <li>
                    <NavElement
                        path="chat"
                        icon={Chat}
                        text="Chat"/>
                </li>
                <li>
                    <NavElement
                        path="activity"
                        icon={Activity}
                        text="Latest Activity"/>
                </li>
            </ul>
        </nav>
    )
}

export default NavList;