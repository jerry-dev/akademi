import React from 'react';
import styles from './currentfoodsitem.module.css';
import burger from '../../assets/images/menuItems/burger.jpg';
import smoothie from '../../assets/images/menuItems/smoothie.jpg';
import beefsteak from '../../assets/images/menuItems/beefsteak.jpg';
import pancakes from '../../assets/images/menuItems/pancakes.jpg';
import pizza from '../../assets/images/menuItems/pizza.jpg';
import shrimpsalad from '../../assets/images/menuItems/shrimpsalad.jpg';
import raman from '../../assets/images/menuItems/raman.jpg';


const CurrentFoodsItem = (props) => {
    let image = {};

    switch (props.itemId) {
        case 1: image = beefsteak; break;
        case 2: image = pancakes; break;
        case 3: image = raman; break;
        case 4: image = burger; break;
        case 5: image = pizza; break;
        case 6: image = shrimpsalad; break;
        case 7: image = smoothie; break;
    }

    const altValue = `Image of the ${props.menuItemName} menu item.`;
    return (
        <article className={styles.currentFoodItem}>
            <figure>
                <img src={image} alt={altValue}/>
                <figcaption>
                    <h5>{props.menuItemName}</h5>
                    <p>{props.menuItemPreviewDetail}</p>
                </figcaption>
            </figure>
        </article>
    );
};

export default CurrentFoodsItem;