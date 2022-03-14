import React from 'react';
import RecentStudentListElement from '../recentstudentlistelement/RecentStudentListElement.js';

const getStudents = (bucketsToDisplay) => {
    return bucketsToDisplay.map((student) => {
        return <li>
            <RecentStudentListElement
                studentName={student.studentName}
                studentClass={student.studentClass}
                studentPhoto={student.studentPhoto}/>
        </li>
    });
}

export default getStudents;