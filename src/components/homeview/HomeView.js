import React from 'react';
import styles from './homeview.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';

const HomeView = () => {
    return (
        <main>
            <div className={styles.homeViewMainInnerContainer}>
                <SectionTitle title="Dashboard"/>
            </div>
        </main>
    );
}

export default HomeView;