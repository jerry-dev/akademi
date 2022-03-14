const getRecentStudents = (students) => {
    // Faking the recent students by just plucking out half of the students
    // Will add enrollment datas to the students data later
    let halfTheStudents = [];
    for (let i = students.length / 2; i < students.length; i++) {
        halfTheStudents[halfTheStudents.length] = students[i];
    }

    return halfTheStudents.map((student) => {
        return {
            studentName: student.studentName,
            studentClass: student.academicRecords.class,
            studentPhoto: student.bio.profilePhoto
        };
    });
}

export default getRecentStudents;