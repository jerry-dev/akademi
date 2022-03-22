import React from 'react';
import styles from './loggedinuser.module.css';
import admin from '../../assets/images/employees/admin.jpg'

const LoggedInUser = (props) => {
    return (
        <figure className={styles.loggedInUser}>
            <img src={admin} alt="Image of logged in user"/>
            <figcaption>
                <h6>{props.userName}</h6>
                <small>{props.role}</small>
            </figcaption>
        </figure>
    );
}

export default LoggedInUser;