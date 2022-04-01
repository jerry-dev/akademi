import React from 'react';
import MessageListElement from '../messagelistelement/MessageListElement.js';

const getMessages = (bucketsToDisplay) => {
    
    return bucketsToDisplay.map((instance) => {
        return <li key={Math.floor(Math.random() * 99999)}>
            <MessageListElement
                profilePhoto={instance.profilePhoto}
                senderName={instance.studentName}
                messagePreview={instance.messages[0].text}
                sentTime={instance.messages[0].timestamp}/>
            </li>
    });
}

export default getMessages;