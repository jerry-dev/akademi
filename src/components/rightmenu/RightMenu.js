import React from 'react';
import styles from './rightmenu.module.css';
import MenuHeader from '../menuheader/MenuHeader.js';
import RecentStudents from '../recentstudents/RecentStudents.js';
import Messages from '../messages/Messages.js';


const RightMenu = (props) => {
    return (
        <aside className={styles.rightMenu}>
            <div className={styles.rightMenuInnerContainer}>
                <MenuHeader/>
                <RecentStudents/>
                <Messages/>
            </div>
        </aside>
    );
}

export default RightMenu;