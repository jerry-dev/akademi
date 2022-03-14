const setFakeTimeStamps = (studentMessages) => {
    studentMessages.forEach((instance) => {
        let fakeTimeStamp = new Date(
            Date.UTC(
                new Date().getFullYear(),
                new Date().getMonth(),
                new Date().getDate(),
                new Date().getUTCHours(),
                Math.floor(Math.random() * 59)
            )
        ).toLocaleString().replace(/^.*, /, "");
    
        fakeTimeStamp = fakeTimeStamp.replace(/:00 /, " ");

        instance.latestMessageTimeStamp = fakeTimeStamp;
    });
}

export default setFakeTimeStamps;