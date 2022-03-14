const viewMore = (bucketsBeingShown, message) => {
    let bucketsToShow = JSON.parse(JSON.stringify(bucketsBeingShown));
    const nextBucket = bucketsBeingShown[bucketsBeingShown.length-1] + 1;

    if (bucketsContainer[nextBucket]) {
        bucketsToShow[bucketsToShow.length] = nextBucket;
        setBucketsBeingShown(bucketsToShow);
    } else {
        console.error(message);
    }
}

export default viewMore;