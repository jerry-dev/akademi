import React from 'react';
import styles from './messages.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import MessageListElement from '../messagelistelement/MessageListElement.js';
import dataBucketCreator from '../../utils/dataBucketCreator.js';

const Messages = (props) => {
    const [bucketsBeingShown, setBucketsBeingShown] = React.useState([1]);

    const bucketsContainer = dataBucketCreator(props.studentMessages, 4);

    const bucketsToDisplayed = [];
    for (let i = 1; i <= Object.keys(bucketsContainer).length; i++) {
        if (bucketsBeingShown.includes(i)) {
            for (let j = 0; j < bucketsContainer[i].length; j++) {
                bucketsToDisplayed[bucketsToDisplayed.length] = bucketsContainer[i][j];
            }
        }
    }

    const messages = bucketsToDisplayed.map((instance) => {
        return <li>
            <MessageListElement
                profilePhoto={instance.profilePhoto}
                senderName={instance.studentName}
                messagePreview={instance.incomingMessages[0]}
                sentTime={instance.latestMessageTimeStamp}/>
            </li>
    });

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