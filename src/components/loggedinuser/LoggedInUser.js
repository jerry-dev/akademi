import React from 'react';
import styles from './loggedinuser.module.css';

const LoggedInUser = (props) => {
    return (
        <figure className={styles.loggedInUser}>
            <img/>
            <figcaption>
                <h6>{props.userName}</h6>
                <small>{props.role}</small>
            </figcaption>
        </figure>
    );
}

export default LoggedInUser;