import React from 'react';
import styles from './paginator.module.css';
import Previous from '../../assets/icons/shared/previous.svg';
import Next from '../../assets/icons/shared/next.svg';

const Paginator = (props) => {
    return (
        <nav className={styles.paginator}>
            <button type="button" id="previousArrow" className={styles.arrow}>
                <img src={Previous} alt="Left arrow"/>
            </button>
            <div>
                <button data-selected="true" type="button" id="firstCircleNav" className={styles.circleNav}>
                    <output>1</output>
                </button>
                <button type="button" id="secondCircleNav" className={styles.circleNav}>
                    <output>2</output>
                </button>
                <button type="button" id="thirdCircleNav" className={styles.circleNav}>
                    <output>3</output>
                </button>
            </div>
            <button type="button" id="nextArrow" className={styles.arrow}>
                <img src={Next} alt="Right arrow"/>
            </button>
        </nav>
    );
}

export default Paginator;