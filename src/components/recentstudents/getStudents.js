import React from 'react';
import RecentStudentListElement from '../recentstudentlistelement/RecentStudentListElement.js';

const getStudents = (bucketsToDisplay) => {
    return bucketsToDisplay.map((studentInstance) => {
        return <li key={Math.floor(Math.random() * 99999)}>
            <RecentStudentListElement
                studentId={studentInstance.studentId}
                studentName={studentInstance.studentName}
                studentClass={studentInstance.class}
                studentPhoto={studentInstance.profilePhoto}/>
        </li>
    });
}

export default getStudents;