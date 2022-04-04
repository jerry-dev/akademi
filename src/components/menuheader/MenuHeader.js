import React from 'react';
import styles from './menuheader.module.css';
import Bell from '../../assets/icons/shared/bell.svg';
import Close from '../../assets/icons/shared/close.svg';
import Gear from '../../assets/icons/shared/gear.svg';
import LoggedInUser from '../loggedinuser/LoggedInUser.js';
import mobileRightMenuManager from '../../utils/mobileRightMenuManager.js';

const MenuHeader = (props) => {
    const theImage = (props.location !== "defaultrightmenu") ? Close : Bell;
    const theImagesAltValue = (props.location !== "defaultrightmenu") ? "Close button" : "Notification button";
    const theId = (props.location !== "defaultrightmenu") ? "closeMobileMenuButton" : "notificationButton";
    const dynamicButtonManager = (props.location !== "defaultrightmenu") ? mobileRightMenuManager : null;

    return (
        <header className={styles.menuHeader}>
            <div className={styles.buttonsGroupContainer}>
                <button onClick={dynamicButtonManager} id={theId} type="button" className={styles.notification}>
                    <img src={theImage} alt={theImagesAltValue}/>
                </button>
                <button type="button" className={styles.notification}>
                    <img src={Gear} alt="Settings icon"/>
                </button>
            </div>
            <LoggedInUser userName="Jerry D." role="Admin"/>
        </header>
    )
}

export default MenuHeader;