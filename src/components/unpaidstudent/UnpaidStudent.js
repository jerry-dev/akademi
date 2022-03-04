import React from 'react';
import styles from './unpaidstudent.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import UnpaidStudentDetail from '../unpaidstudentdetail/UnpaidStudentDetail.js';
import Paginator from '../paginator/Paginator.js';

const UnpaidStudent = (props) => {
    const [ page, setPage ] = React.useState(1);

    const maxDocPerPage = 5;
    const buckets = {};
    let index = 0;

    for (let i = 1; i <= props.unpaidStudents.length; i++) {
        for (let j = 0; j < maxDocPerPage; j++) {
            if (props.unpaidStudents[index]) {
                if (!Array.isArray(buckets[i])) {
                    buckets[i] = [];
                }
                buckets[i].push(props.unpaidStudents[index]);
                index++;
            }
        }
    }

    return (
        <section className={styles.unpaidStudent}>
            <div>
                <header>
                    <SectionTitle title="Unpaid Student Intuition"/>                   
                </header>
                <ul>{
                    buckets[page].map((doc) => {
                        return <li><UnpaidStudentDetail
                            studentFullName={doc.name}
                            studentId={doc.studentId}
                            studentClass={doc.studentClass}
                            studentDebt={doc.studentDebt}/>
                        </li>
                    })
                }</ul>
                <footer>
                    <small>Showing <span>{page}</span>-<span>{page+4}</span> from <span>{props.unpaidStudents.length}</span> data</small>
                    <Paginator/>
                </footer>
            </div>
        </section>
    );
}

export default UnpaidStudent;