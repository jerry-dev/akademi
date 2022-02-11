import React from 'react';

const NavElement = (props) => {
    return (
        <a href={props.link}>
            <img href={props.icon}/>
            {props.text}
        </a>
    )
}

export default NavElement;