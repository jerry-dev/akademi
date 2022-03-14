import React from 'react';
import styles from './messages.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import dataBucketCreator from '../../utils/dataBucketCreator.js';
import getBucketToBeDisplayed from '../../utils/getBucketToBeDisplayed.js';
import getMessages from './getMessages.js';

const Messages = (props) => {
    const [ bucketsBeingShown, setBucketsBeingShown ] = React.useState([1]);
    const bucketsContainer = dataBucketCreator(props.studentMessages, 4);
    const bucketsToDisplay = getBucketToBeDisplayed(bucketsContainer, bucketsBeingShown);
    const messages = getMessages(bucketsToDisplay);

    const viewMore = () => {
        let bucketsToShow = JSON.parse(JSON.stringify(bucketsBeingShown));
        const nextBucket = bucketsBeingShown[bucketsBeingShown.length-1] + 1;

        if (bucketsContainer[nextBucket]) {
            bucketsToShow[bucketsToShow.length] = nextBucket;
            setBucketsBeingShown(bucketsToShow);
        } else {
            console.error(`**There are no more messages to show**`);
        }
    }

    return (
        <article className={styles.messages}>
            <header>
                <SectionTitle title="Messages"/>
            </header>
            <ul>{messages}</ul>
            <button type="button" className={styles.loadMore} onClick={viewMore}>
                <p>View More</p>
            </button>
        </article>
    );
}

export default Messages;