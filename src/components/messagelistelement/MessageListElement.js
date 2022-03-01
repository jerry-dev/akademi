import React from 'react';
import styles from './messagelistelement.module.css';

const MessageListElement = (props) => {
    return (
        <article className={styles.messageListElement}>
            <figure>
                <img/>
                <figcaption>
                    <h6>{props.senderName}</h6>
                    <p>{props.messagePreview}</p>
                </figcaption>
            </figure>
            <time>{props.sentTime}</time>
        </article>
    );
}

export default MessageListElement;