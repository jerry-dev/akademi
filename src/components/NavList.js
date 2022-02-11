import React from 'react';
import styles from './navlist.module.css';
import NavElement from './NavElement.js';

const NavList = () => {
    return (
        <ul className={styles.navlist}>
            <li>
                <NavElement
                    link="x"
                    icon="y"
                    text="Dashboard"/>
            </li>
            <li>
                <NavElement
                    link="x"
                    icon="y"
                    text="Students"/>
            </li>
            <li>
                <NavElement
                    link="x"
                    icon="y"
                    text="Teachers"/>
            </li>
            <li>
                <NavElement
                    link="x"
                    icon="y"
                    text="Event"/>
            </li>
            <li>
                <NavElement
                    link="x"
                    icon="y"
                    text="Finance"/>
            </li>
            <li>
                <NavElement
                    link="x"
                    icon="y"
                    text="Food"/>
            </li>
            <li>
                <NavElement
                    link="x"
                    icon="y"
                    text="User"/>
            </li>
            <li>
                <NavElement
                    link="x"
                    icon="y"
                    text="Chat"/>
            </li>
            <li>
                <NavElement
                    link="x"
                    icon="y"
                    text="Latest Activity"/>
            </li>
        </ul>
    )
}

export default NavList;