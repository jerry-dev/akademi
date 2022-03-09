import React from 'react';
import styles from './recentstudents.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import Plus from '../../assets/icons/shared/plus.svg';
import RecentStudentListElement from '../recentstudentlistelement/RecentStudentListElement.js';

const RecentStudents = (props) => {
    let bucketsContainer = {};
    const maxDocsPerBucket = 5;
    let index = 0;
    const [bucketBeingShown, setBucketBeingShown] = React.useState(1);


    for (let i = 1; i < props.recentStudents.length; i++) {
        for (let k = 0; k < maxDocsPerBucket; k++) {
            if (props.recentStudents[index]) {
                if (!Array.isArray(bucketsContainer[i])) {
                    bucketsContainer[i] = [];
                }
                bucketsContainer[i].push(props.recentStudents[index]);
                index++;
            }
        }
    }

    const students = bucketsContainer[bucketBeingShown].map((student) => {
        return <li>
            <RecentStudentListElement
                studentName={student.studentName}
                studentClass={student.studentClass}
                studentPhoto={student.studentPhoto}/>
        </li>
    });

    return (
        <article className={styles.recentStudent}>
            <header>
                <div>
                    <SectionTitle title="Recent Students"/>
                    <p>You have <span>{props.recentStudents.length}</span> students</p>
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