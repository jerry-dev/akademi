import React from 'react';
import styles from './recentstudents.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import Plus from '../../assets/icons/shared/plus.svg';
import RecentStudentListElement from '../recentstudentlistelement/RecentStudentListElement.js';
import dataBucketCreator from '../../utils/dataBucketCreator.js';
import getBucketToBeDisplayed from '../../utils/getBucketToBeDisplayed.js';

const RecentStudents = (props) => {
    const [ bucketsBeingShown, setBucketsBeingShown ] = React.useState([1]);
    const bucketsContainer = dataBucketCreator(props.recentStudents, 5);
    const bucketsToDisplay = getBucketToBeDisplayed(bucketsContainer, bucketsBeingShown);

    const students = bucketsToDisplay.map((student) => {
        return <li>
            <RecentStudentListElement
                studentName={student.studentName}
                studentClass={student.studentClass}
                studentPhoto={student.studentPhoto}/>
        </li>
    });

    const viewMore = () => {
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