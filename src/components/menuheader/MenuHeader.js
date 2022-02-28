import React from 'react';
import styles from './menuheader.module.css';
import Bell from '../../assets/icons/shared/bell.svg';
import Gear from '../../assets/icons/shared/gear.svg';
import LoggedInUser from '../loggedinuser/LoggedInUser.js';

const MenuHeader = (props) => {
    return (
        <header className={styles.menuHeader}>
            <div className={styles.buttonsGroupContainer}>
                <button type="button" className={styles.notification}>
                    <img src={Bell} alt="Notification icon"/>
                </button>
                <button type="button" className={styles.notification}>
                    <img src={Gear} alt="Settings icon"/>
                </button>
            </div>
            <LoggedInUser userName="Nabila A." role="Admin"/>
        </header>
    )
}

export default MenuHeader;