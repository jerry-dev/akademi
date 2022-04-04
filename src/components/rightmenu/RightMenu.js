import React from 'react';
import styles from './rightmenu.module.css';
import MenuHeader from '../menuheader/MenuHeader.js';
import RecentStudents from '../recentstudents/RecentStudents.js';
import Messages from '../messages/Messages.js';
import CurrentFoodsMenu from '../currentfoodsmenu/CurrentFoodsMenu.js';
import closeOnEscKeyDown from '../../utils/closeOnEscKeyDown.js';
import closeMobileRightMenu from '../../utils/closeMobileRightMenu.js';

const RightMenu = (props) => {
    const identifier = (props.identifier === "defaultrightmenu")
        ? {"data-identifier": "defaultrightmenu"}
        : {"data-identifier":"mobilerightmenu", 'data-isoffcanvas': true};

    return (
        <React.Fragment>
            <span id="mobileRightMenuBackdrop"
            className={styles.mobileRightMenuBackdrop}
            {...{'data-isactive': false}}
            onClick={() => closeMobileRightMenu(document.getElementsByTagName('aside')[2])}
            onKeyDown={closeOnEscKeyDown} tabIndex="0"></span>
            <aside {...identifier} className={styles.rightMenu}>
                <div className={styles.rightMenuInnerContainer}>
                    <MenuHeader location={props.identifier}/>
                    <RecentStudents recentStudents={props.recentStudents}/>
                    <Messages studentMessages={props.studentMessages}/>
                    <CurrentFoodsMenu currentFoodsItems={props.currentFoodsItems}/>
                </div>
            </aside>
        </React.Fragment>
    );
}

export default RightMenu;