import React from 'react';
import styles from './recentstudents.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import Plus from '../../assets/icons/shared/plus.svg';
import RecentStudentListElement from '../recentstudentlistelement/RecentStudentListElement.js';

// Takes in the number of recent students
// A list of the recent students
// Each student has its avatar, full name, email, and class
const numberOfStudents = 456;
const students = [
    <li><RecentStudentListElement
        studentName="Samantha William"
        studentClass="Class VII A"/>
    </li>,
    <li><RecentStudentListElement
        studentName="Tony Soap"
        studentClass="Class VII A"/>
    </li>,
    <li><RecentStudentListElement
        studentName="Karen Hope"
        studentClass="Class VII A"/>
    </li>,
    <li><RecentStudentListElement
        studentName="Jordan Nico"
        studentClass="Class VII B"/>
    </li>,
    <li><RecentStudentListElement
        studentName="Nadila Adja"
        studentClass="Class VII B"/>
    </li>
];

const RecentStudents = (props) => {
    return (
        <article className={styles.recentStudent}>
            <header>
                <div>
                    <SectionTitle title="Recent Students"/>
                    <p>You have <span>{numberOfStudents}</span> students</p>
                </div>
                <button type="button">
                    <img src={Plus} alt="Plus symbol"/>
                </button>
            </header>
            <ul>{students}</ul>
            <button type="button" className={styles.loadMore}>
                <p>View More</p>
            </button>
        </article>
    );
}

export default RecentStudents;