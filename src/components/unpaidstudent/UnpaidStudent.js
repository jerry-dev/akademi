import React from 'react';
import styles from './unpaidstudent.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';

const UnpaidStudent = (props) => {
    return (
        <section className={styles.unpaidStudent}>
            <div>
                <header>
                    <SectionTitle title="Unpaid Student Intuition"/>
                    <div>
                    </div>
                </header>
            </div>
        </section>
    );
}

export default UnpaidStudent;