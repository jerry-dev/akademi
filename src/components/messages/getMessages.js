import React from 'react';
import MessageListElement from '../messagelistelement/MessageListElement.js';

const getMessages = (bucketsToDisplay) => {
    return bucketsToDisplay.map((instance) => {
        return <li>
            <MessageListElement
                profilePhoto={instance.profilePhoto}
                senderName={instance.studentName}
                messagePreview={instance.incomingMessages[0]}
                sentTime={instance.latestMessageTimeStamp}/>
            </li>
    });
}

export default getMessages;