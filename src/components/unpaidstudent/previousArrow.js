const previousArrow = (event, setBucketBeingShown, updateCircleNavButtons, bucketsContainer, bucketBeingShown) => {
    const firstCircleValue = Number(event.currentTarget.getElementsByTagName('div')[0].getElementsByTagName('button')[0].querySelector('output').innerText);
    if (firstCircleValue === 1) {
        return;
    }

    const details = {};

    if (bucketsContainer[bucketBeingShown-1]) {
        setBucketBeingShown(bucketBeingShown-1);

        details.navContainer = event.currentTarget;
        details.action = 'decrement';

        details.firstCircle = firstCircleValue-1;
        details.secondCircle = details.firstCircle+1;
        details.thirdCircle = details.secondCircle+1;
        updateCircleNavButtons(details, setBucketBeingShown);
    }
};

export default previousArrow;