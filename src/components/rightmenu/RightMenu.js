import React from 'react';
import styles from './rightmenu.module.css';
import MenuHeader from '../menuheader/MenuHeader.js';

const RightMenu = (props) => {
    return (
        <aside className={styles.rightMenu}>
            <div className={styles.rightMenuInnerContainer}>
                <MenuHeader/>
            </div>
        </aside>
    );
}

export default RightMenu;