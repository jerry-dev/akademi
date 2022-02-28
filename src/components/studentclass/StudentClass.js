import React from 'react';
import styles from './studentclass.module.css';
import User from '../../assets/icons/shared/User.svg';

const StudentClass = (props) => {
    return (
        <article className={styles.article}>
            <figure>
                <img src={User} alt="user icon"/>
            </figure>
            <div className={styles.classDetails}>
                <h6>Class</h6>
                <h5>{props.studentClass}</h5>
            </div>
        </article>
    );
}

export default StudentClass;