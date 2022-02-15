import React from 'react';
import styles from './navelement.module.css';
import { Link } from "react-router-dom";

const NavElement = (props) => {
    const altValue = `${props.text} route icon`;
    return (
        <Link className={styles.navElement} to={props.path}>
            <span>
                <img src={props.icon} alt={altValue}/>
                {props.text}
            </span>
        </Link>
    )
}

export default NavElement;