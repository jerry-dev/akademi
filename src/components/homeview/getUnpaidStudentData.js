const getUnpaidStudentData = (students) => {
    return students.map((student) => {
        return {
            studentFullName: student.studentName,
            studentId: student.id,
            studentClass: student.academicRecords.class,
            studentDebt: student.financialRecords.debt,
            studentPhoto: student.bio.profilePhoto
        };
    });
}

export default getUnpaidStudentData;