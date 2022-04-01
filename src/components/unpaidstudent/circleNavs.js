const circleNavs = (event, bucketBeingShown, setBucketBeingShown) => {
    const bucket = Number(event.target.querySelector('output').innerText);

    if (bucketBeingShown !== bucket) {
        setBucketBeingShown(Number(event.target.querySelector('output').innerText));
        const theButtonsCollection = event.currentTarget.getElementsByTagName('div')[0].getElementsByTagName('button');

        for (let prop in theButtonsCollection) {
            if (typeof theButtonsCollection[prop] !== 'function' && typeof theButtonsCollection[prop] !== 'number') {
                theButtonsCollection[prop].setAttribute('data-selected', 'false');
            }
        }

        event.target.setAttribute('data-selected', 'true');
    }
};

export default circleNavs;