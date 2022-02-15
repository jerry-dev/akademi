import React from 'react';
import NavList from '../navlist/NavList.js';
import CompanyLogo from '../companylogo/CompanyLogo.js';
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