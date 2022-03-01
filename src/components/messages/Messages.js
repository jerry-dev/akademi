import React from 'react';
import styles from './messages.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import MessageListElement from '../messagelistelement/MessageListElement.js';

// Takes in the number of recent students
// A list of the recent students
// Each student has its avatar, full name, email, and class
// The messages previews are 26 characters max
const messages = [
    <li>
        <MessageListElement senderName="Samantha William" messagePreview="Lorem ipsum dolor sit amet..." sentTime="12:45 PM"/>
    </li>,
    <li>
        <MessageListElement senderName="Tony Soap" messagePreview="Lorem ipsum dolor sit amet..." sentTime="12:45 PM"/>
    </li>,
    <li>
        <MessageListElement senderName="Jordan Nico" messagePreview="Lorem ipsum dolor sit amet..." sentTime="12:45 PM"/>
    </li>,
    <li>
        <MessageListElement senderName="Nadila Adja" messagePreview="Lorem ipsum dolor sit amet..." sentTime="12:45 PM"/>
    </li>
];

const Messages = (props) => {
    return (
        <article className={styles.messages}>
            <header>
                <SectionTitle title="Messages"/>
            </header>
            <ul>{messages}</ul>
            <button type="button" className={styles.loadMore}>
                <p>View More</p>
            </button>
        </article>
    );
}

export default Messages;