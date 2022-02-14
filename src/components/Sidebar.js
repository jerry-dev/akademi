import React from 'react';
import NavList from './NavList.js';
import CompanyLogo from './CompanyLogo.js';
import styles from './sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={styles.aside}>
            <CompanyLogo/>
            <NavList/>
        </aside>
    )
}

export default Sidebar;