import React from 'react';
import styles from './navelement.module.css';

const NavElement = (props) => {
    return (
        <a className={styles.navElement} href={props.link}>
            <span>
                <img href={props.icon}/>
                {props.text}
            </span>
        </a>
    )
}

export default NavElement;