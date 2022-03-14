const getBucketToBeDisplayed = (bucketsContainer, bucket) => {
    const bucketsToDisplayed = [];

    for (let i = 1; i <= Object.keys(bucketsContainer).length; i++) {
        if (bucket.includes(i)) {
            for (let j = 0; j < bucketsContainer[i].length; j++) {
                bucketsToDisplayed[bucketsToDisplayed.length] = bucketsContainer[i][j];
            }
        }
    }

    return bucketsToDisplayed;
};

export default getBucketToBeDisplayed;