import React from 'react';
import styles from './unpaidstudent.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import UnpaidStudentDetail from '../unpaidstudentdetail/UnpaidStudentDetail.js';
import Paginator from '../paginator/Paginator.js';

const UnpaidStudent = (props) => {
    const [ bucketBeingShown, setBucketBeingShown ] = React.useState(1);

    const maxDocPerPage = 5;
    const bucketsContainer = {};
    let index = 0;

    // Seperating the data into "buckets"
    // The properties of the "bucketsContainer" object are the actual buckets
    // The max size of each bucket is equal to maxDocPerPage
    for (let i = 1; i <= props.unpaidStudents.length; i++) {
        for (let j = 0; j < maxDocPerPage; j++) {
            if (props.unpaidStudents[index]) {
                if (!Array.isArray(bucketsContainer[i])) {
                    bucketsContainer[i] = [];
                }
                bucketsContainer[i].push(props.unpaidStudents[index]);
                index++;
            }
        }
    }

    const circleNavs = (event) => {
        const bucket = Number(event.target.querySelector('output').innerText);

        if (bucketBeingShown !== bucket) {
            setBucketBeingShown(Number(event.target.querySelector('output').innerText));
            const theButtonsCollection = event.currentTarget.getElementsByTagName('div')[0].getElementsByTagName('button');

            for (let prop in theButtonsCollection) {
                if (typeof theButtonsCollection[prop] !== 'function' && typeof theButtonsCollection[prop] !== 'number') {
                    theButtonsCollection[prop].setAttribute('data-selected', 'false');
                }
            }

            event.target.setAttribute('data-selected', 'true');
        }
    };

    const previousArrow = (event) => {
        const firstCircleValue = Number(event.currentTarget.getElementsByTagName('div')[0].getElementsByTagName('button')[0].querySelector('output').innerText);
        if (firstCircleValue === 1) {
            return;
        }
 
        const details = {};

        if (bucketsContainer[bucketBeingShown-1]) {
            setBucketBeingShown(bucketBeingShown-1);

            details.navContainer = event.currentTarget;
            details.action = 'decrement';

            details.firstCircle = firstCircleValue-1;
            details.secondCircle = details.firstCircle+1;
            details.thirdCircle = details.secondCircle+1;
            updateCircleNavButtons(details);
        }
    };

    const nextArrow = (event) => {
        const thirdCircleValue = Number(event.currentTarget.getElementsByTagName('div')[0].getElementsByTagName('button')[2].querySelector('output').innerText);
        if (thirdCircleValue >= Object.keys(bucketsContainer).length) {
            return;
        }

        const details = {};

        if (bucketsContainer[bucketBeingShown+1]) {
            setBucketBeingShown(bucketBeingShown+1);
            
            details.navContainer = event.currentTarget;
            details.action = 'increment';

            details.thirdCircle = thirdCircleValue+1;
            details.secondCircle = details.thirdCircle-1;
            details.firstCircle = details.secondCircle-1;
            console.log('DETAILS:', details)
            updateCircleNavButtons(details);
        }
    };

    const updateCircleNavButtons = (detailsObject) => {
        const theButtonsCollection = detailsObject.navContainer.getElementsByTagName('div')[0].getElementsByTagName('button');
        
        for (let prop in theButtonsCollection) {
            if (typeof theButtonsCollection[prop] !== 'function' && typeof theButtonsCollection[prop] !== 'number') {
                theButtonsCollection[prop].querySelector('output').innerText = "";
            }
        }

        theButtonsCollection[0].querySelector('output').innerText = detailsObject.firstCircle;
        theButtonsCollection[1].querySelector('output').innerText = detailsObject.secondCircle;
        theButtonsCollection[2].querySelector('output').innerText = detailsObject.thirdCircle;
        (detailsObject.action === 'increment')
            ? setBucketBeingShown(bucketBeingShown+1)
            : setBucketBeingShown(bucketBeingShown-1);
        
    };

    const paginatorButtonsHandler = (event) => {
        return {
            'firstCircleNav': () => circleNavs(event),
            'secondCircleNav': () => circleNavs(event),
            'thirdCircleNav': () => circleNavs(event),
            'previousArrow': () => previousArrow(event),
            'nextArrow': () => nextArrow(event),
        }[event.target.id]();
    };

    let firstDoc = 1;

    if (bucketBeingShown !== 1) {
        firstDoc = ( (bucketBeingShown * maxDocPerPage) - (maxDocPerPage - 1));
    }

    let lastDoc = ( Object(bucketsContainer[bucketBeingShown]).length+firstDoc )-1;

    return (
        <section className={styles.unpaidStudent}>
            <div>
                <header>
                    <SectionTitle title="Unpaid Student Intuition"/>                   
                </header>
                <ul>{
                    bucketsContainer[bucketBeingShown].map((doc) => {
                        return <li><UnpaidStudentDetail
                            studentFullName={doc.name}
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