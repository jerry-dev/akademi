import React from 'react';
import styles from './recentstudentlistelement.module.css';
import Email from '../../assets/icons/shared/Email.svg';

const RecentStudentListElement = (props) => {
    return (
        <article className={styles.recentStudentListElement}>
            <figure>
                <img/>
                <figcaption>
                    <h6>{props.studentName}</h6>
                    <small>{props.studentClass}</small>
                </figcaption>
            </figure>
            <button type="button">
                <img src={Email} alt="Email"/>
            </button>
        </article>
    )
}

export default RecentStudentListElement;