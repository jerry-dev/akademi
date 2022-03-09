import React from 'react';
import styles from './rightmenu.module.css';
import MenuHeader from '../menuheader/MenuHeader.js';
import RecentStudents from '../recentstudents/RecentStudents.js';
import Messages from '../messages/Messages.js';
import CurrentFoodsMenu from '../currentfoodsmenu/CurrentFoodsMenu.js';


const RightMenu = (props) => {
    return (
        <aside className={styles.rightMenu}>
            <div className={styles.rightMenuInnerContainer}>
                <MenuHeader/>
                {/* The data is coming from homeview.js */}
                <RecentStudents recentStudents={props.recentStudents}/>
                <Messages studentMessages={props.studentMessages}/>
                <CurrentFoodsMenu/>
            </div>
        </aside>
    );
}

export default RightMenu;