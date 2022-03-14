const dataBucketCreator = (data, maxDocsPerBucket) => {
    if (!Array.isArray(data)) {
        return console.error(`dataBucketCreator: The data argument is required to be an array.`);
    }

    if (!maxDocsPerBucket === 'number') {
        return console.error(`dataBucketCreator: The maxDocsPerBucket argument is required to be number type.`);
    }

    const bucketsContainer = {};
    let index = 0;

    for (let i = 1; i < data.length; i++) {
        for (let k = 0; k < maxDocsPerBucket; k++) {
            if (data[index]) {
                if (!Array.isArray(bucketsContainer[i])) {
                    bucketsContainer[i] = [];
                }
                bucketsContainer[i].push(data[index]);
                index++;
            }
        }
    }

    return bucketsContainer;
};

export default dataBucketCreator;