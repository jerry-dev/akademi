import React from 'react';
import styles from './unpaidstudentdetail.module.css';
import StudentClass from '../studentclass/StudentClass.js';
import printImage from '../../assets/icons/shared/print.svg';
import Dots from '../../assets/icons/shared/Dots.svg';

const UnpaidStudentDetail = (props) => {
    const altValue = `Student ${props.studentFullName}'s profile photo`;
    return (
        <article className={styles.article}>
            <div>
                <figure className={styles.avatarContainer}>
                    <img src={props.studentPhoto} alt={altValue}/>
                    <figcaption>
                        <p>{props.studentFullName}</p>
                    </figcaption>
                </figure>
                <div>
                    <span className={styles.studentId}>ID {props.studentId}</span>
                    <StudentClass studentClass={props.studentClass}/>
                    <span className={styles.debt}>{props.studentDebt}</span>
                    <button className={styles.printButton} type="button">
                        <img src={printImage} alt='Download details button'/>
                    </button>
                    <button className={styles.ellipsisButton} type="button">
                        <img src={Dots} alt='Ellipsis'/>
                    </button>
                </div>
            </div>
        </article>
    );
}

export default UnpaidStudentDetail;