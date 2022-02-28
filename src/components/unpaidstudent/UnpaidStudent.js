import React from 'react';
import styles from './unpaidstudent.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import UnpaidStudentDetail from '../unpaidstudentdetail/UnpaidStudentDetail.js';
import Paginator from '../paginator/Paginator.js';

const start = 1;
const end = 5;
const total = 100;

const UnpaidStudent = (props) => {
    return (
        <section className={styles.unpaidStudent}>
            <div>
                <header>
                    <SectionTitle title="Unpaid Student Intuition"/>                   
                </header>
                <ul>
                    <li>
                        <UnpaidStudentDetail
                        studentFullName="Samantha William"
                        studentId="123456789"
                        studentClass="VII A"
                        studentDebt="$90,999"/>
                    </li>
                    <li>
                        <UnpaidStudentDetail
                        studentFullName="Samantha William"
                        studentId="123456789"
                        studentClass="VII A"
                        studentDebt="$90,999"/>
                    </li>
                    <li>
                        <UnpaidStudentDetail
                        studentFullName="Samantha William"
                        studentId="123456789"
                        studentClass="VII A"
                        studentDebt="$90,999"/>
                    </li>
                    <li>
                        <UnpaidStudentDetail
                        studentFullName="Samantha William"
                        studentId="123456789"
                        studentClass="VII A"
                        studentDebt="$90,999"/>
                    </li>
                    <li>
                        <UnpaidStudentDetail
                        studentFullName="Samantha William"
                        studentId="123456789"
                        studentClass="VII A"
                        studentDebt="$90,999"/>
                    </li>
                </ul>
                <footer>
                    <small>Showing <span>{start}</span>-<span>{end}</span> from <span>{total}</span> data</small>
                    <Paginator/>
                </footer>
            </div>
        </section>
    );
}

export default UnpaidStudent;