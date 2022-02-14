import React from 'react';
import styles from './companylogo.module.css';
import logo from '../assets/icons/shared/logo.svg';

const CompanyLogo = () => {
    return (
        <div className={styles.companyLogo}>
            <img src={logo}/>
            <h3>Akademi</h3>
        </div>
    );
}

export default CompanyLogo;