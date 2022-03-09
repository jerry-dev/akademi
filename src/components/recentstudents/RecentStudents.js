import React from 'react';
import styles from './recentstudents.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import Plus from '../../assets/icons/shared/plus.svg';
import RecentStudentListElement from '../recentstudentlistelement/RecentStudentListElement.js';

const RecentStudents = (props) => {
    let bucketsContainer = {};
    const maxDocsPerBucket = 5;
    let index = 0;
    const [bucketsBeingShown, setBucketsBeingShown] = React.useState([1]);


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

    const bucketsToDisplayed = [];
    for (let i = 0; i < Object.keys(bucketsContainer).length; i++) {
        if (bucketsBeingShown.includes(i)) {
            for (let j = 0; j < bucketsContainer[i].length; j++) {
                bucketsToDisplayed[bucketsToDisplayed.length] = bucketsContainer[i][j];
            }
        }
    }

    const students = bucketsToDisplayed.map((student) => {
        return <li>
            <RecentStudentListElement
                studentName={student.studentName}
                studentClass={student.studentClass}
                studentPhoto={student.studentPhoto}/>
        </li>
    });

    const viewMore = (event) => {
        let bucketsToShow = JSON.parse(JSON.stringify(bucketsBeingShown));
        const nextBucket = bucketsBeingShown[bucketsBeingShown.length-1] + 1;

        if (bucketsContainer[nextBucket]) {
            bucketsToShow[bucketsToShow.length] = nextBucket;

            setBucketsBeingShown(bucketsToShow);
        } else {
            console.error(`**There are no more recent students to show**`);
        }
    }

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
            <button type="button" className={styles.loadMore} onClick={viewMore}>
                <p>View More</p>
            </button>
        </article>
    );
}

export default RecentStudents;