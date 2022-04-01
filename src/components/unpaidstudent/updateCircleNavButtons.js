const updateCircleNavButtons = (detailsObject, setBucketBeingShown) => {
    const theButtonsCollection = detailsObject.navContainer.getElementsByTagName('div')[0].getElementsByTagName('button');
    
    for (let prop in theButtonsCollection) {
        if (typeof theButtonsCollection[prop] !== 'function' && typeof theButtonsCollection[prop] !== 'number') {
            theButtonsCollection[prop].querySelector('output').innerText = "";
        }
    }

    theButtonsCollection[0].querySelector('output').innerText = detailsObject.firstCircle;
    theButtonsCollection[1].querySelector('output').innerText = detailsObject.secondCircle;
    theButtonsCollection[2].querySelector('output').innerText = detailsObject.thirdCircle;
    
    (detailsObject.action === 'increment')
        ? setBucketBeingShown(bucketBeingShown+1)
        : setBucketBeingShown(bucketBeingShown-1);
};

export default updateCircleNavButtons;