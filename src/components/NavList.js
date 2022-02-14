import React from 'react';
import styles from './navlist.module.css';
import Home from '../assets/icons/shared/Home.svg';
import Student from '../assets/icons/shared/Student.svg';
import Calendar from '../assets/icons/shared/Calendar.svg';
import Finance from '../assets/icons/shared/Finance.svg';
import Food from '../assets/icons/shared/Food.svg';
import User from '../assets/icons/shared/User.svg';
import Chat from '../assets/icons/shared/Chat.svg';
import Activity from '../assets/icons/shared/Activity.svg';
import NavElement from './NavElement.js';

const NavList = () => {
    return (
        <nav>
            <ul className={styles.navlist}>
                <li>
                    <NavElement
                        link="x"
                        icon={Home}
                        text="Dashboard"/>
                </li>
                <li>
                    <NavElement
                        link="x"
                        icon={Student}
                        text="Students"/>
                </li>
                <li>
                    <NavElement
                        link="x"
                        icon={Student}
                        text="Teachers"/>
                </li>
                <li>
                    <NavElement
                        link="x"
                        icon={Calendar}
                        text="Event"/>
                </li>
                <li>
                    <NavElement
                        link="x"
                        icon={Finance}
                        text="Finance"/>
                </li>
                <li>
                    <NavElement
                        link="x"
                        icon={Food}
                        text="Food"/>
                </li>
                <li>
                    <NavElement
                        link="x"
                        icon={User}
                        text="User"/>
                </li>
                <li>
                    <NavElement
                        link="x"
                        icon={Chat}
                        text="Chat"/>
                </li>
                <li>
                    <NavElement
                        link="x"
                        icon={Activity}
                        text="Latest Activity"/>
                </li>
            </ul>
        </nav>
    )
}

export default NavList;