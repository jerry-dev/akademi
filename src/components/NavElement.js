import React from 'react';
import styles from './navelement.module.css';

const NavElement = (props) => {
    const altValue = `${props.text} route icon`;
    return (
        <a className={styles.navElement} href={props.link}>
            <span>
                <img src={props.icon} alt={altValue}/>
                {props.text}
            </span>
        </a>
    )
}

export default NavElement;