import React from 'react';
import styles from './homeview.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import Overview from '../overview/Overview.js';

const HomeView = () => {
    return (
        <main>
            <div className={styles.homeViewMainInnerContainer}>
                <SectionTitle title="Dashboard"/>
                <Overview/>
            </div>
        </main>
    );
}

export default HomeView;