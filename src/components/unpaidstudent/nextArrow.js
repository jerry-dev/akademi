const nextArrow = (event, setBucketBeingShown, updateCircleNavButtons, bucketsContainer, bucketBeingShown) => {
    const thirdCircleValue = Number(event.currentTarget.getElementsByTagName('div')[0].getElementsByTagName('button')[2].querySelector('output').innerText);
    if (thirdCircleValue >= Object.keys(bucketsContainer).length) {
        return;
    }

    const details = {};

    if (bucketsContainer[bucketBeingShown+1]) {
        setBucketBeingShown(bucketBeingShown+1);
        
        details.navContainer = event.currentTarget;
        details.action = 'increment';

        details.thirdCircle = thirdCircleValue+1;
        details.secondCircle = details.thirdCircle-1;
        details.firstCircle = details.secondCircle-1;
        updateCircleNavButtons(details, setBucketBeingShown);
    }
};

export default nextArrow;