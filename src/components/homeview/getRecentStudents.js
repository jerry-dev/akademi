// At the moment the students data does not feature enrollment dates
// Later I'll add said data, and will have to update this function
// to only use data that's of a certain time frame

const getRecentStudents = (students) => {
    return students.map((student) => {
        return {
            studentName: student.studentName,
            studentClass: student.academicRecords.class,
            studentPhoto: student.bio.profilePhoto
        };
    });
}

export default getRecentStudents;