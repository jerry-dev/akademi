import React from 'react';
import styles from './unpaidstudent.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import UnpaidStudentDetail from '../unpaidstudentdetail/UnpaidStudentDetail.js';
import Paginator from '../paginator/Paginator.js';
import dataBucketCreator from '../../utils/dataBucketCreator.js';
import circleNavs from './circleNavs.js';
import previousArrow from './previousArrow.js';
import nextArrow from './nextArrow.js';
import updateCircleNavButtons from './updateCircleNavButtons.js';

const UnpaidStudent = (props) => {
    const [ bucketBeingShown, setBucketBeingShown ] = React.useState(1);
    const maxDocPerPage = 5;
    let firstDoc = null;
    let bucketsContainer = null;
    let lastDoc = null;

    const paginatorButtonsHandler = (event) => {
        return {
            'firstCircleNav': () => circleNavs(event, bucketBeingShown, setBucketBeingShown),
            'secondCircleNav': () => circleNavs(event, bucketBeingShown, setBucketBeingShown),
            'thirdCircleNav': () => circleNavs(event, bucketBeingShown, setBucketBeingShown),
            'previousArrow': () => previousArrow(event, setBucketBeingShown, updateCircleNavButtons),
            'nextArrow': () => nextArrow(event, setBucketBeingShown, updateCircleNavButtons),
        }[event.target.id]();
    };

    React.useEffect(() => {
        bucketsContainer = dataBucketCreator(props.unpaidStudents, maxDocPerPage);
        firstDoc = 1;

        if (bucketBeingShown !== 1) {
            firstDoc = ( (bucketBeingShown * maxDocPerPage) - (maxDocPerPage - 1));
        }

        lastDoc = ( Object(bucketsContainer[bucketBeingShown]).length+firstDoc )-1;
    });

    return (
        <section className={styles.unpaidStudent}>
            <div>
                <header>
                    <SectionTitle title="Unpaid Student Intuition"/>                   
                </header>
                <ul>{
                    bucketsContainer[bucketBeingShown].map((doc) => {
                        return <li><UnpaidStudentDetail
                            studentPhoto={doc.studentPhoto}
                            studentFullName={doc.studentFullName}
                            studentId={doc.studentId}
                            studentClass={doc.studentClass}
                            studentDebt={doc.studentDebt}/>
                        </li>
                    })
                }</ul>
                <footer>
                    <small>Showing <span>{firstDoc}</span>-<span>{lastDoc}</span> from <span>{props.unpaidStudents.length}</span> data</small>
                    <Paginator currentPage={bucketBeingShown} buttonsHandler={paginatorButtonsHandler}/>
                </footer>
            </div>
        </section>
    );
}

export default UnpaidStudent;