import React from 'react';
import styles from './navelement.module.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const NavElement = (props) => {
    const altValue = `${props.text} route icon`;

    let location = useLocation();
    let isActive = {'data-isactive': false};
    let thePath = (props.path === '/') ? '/' : `/${props.path}`;

    (location.pathname === `${thePath}`)
            ? isActive = {'data-isactive': true}
            : isActive = {'data-isactive': false};

    React.useEffect(() => {       
        (location.pathname === `${thePath}`)
            ? isActive = {'data-isactive': true}
            : isActive = {'data-isactive': false};
    }, [location]);

    const icon = (!isActive['data-isactive']) ? props.icon : props.blueIcon;
    
    return (
        <Link className={styles.navElement} {...isActive} to={props.path}>
            <span>
                <img src={icon} alt={altValue}/>
                {props.text}
            </span>
        </Link>
    )
}

export default NavElement;