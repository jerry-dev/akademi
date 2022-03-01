import React from 'react';
import styles from './currentfoodsitem.module.css';

const CurrentFoodsItem = (props) => {
    const altValue = `Image of the ${props.menuItemName} menu item.`;
    return (
        <article className={styles.currentFoodItem}>
            <figure>
                <img alt={altValue}/>
                <figcaption>
                    <h5>{props.menuItemName}</h5>
                    <p>{props.menuItemPreviewDetail}</p>
                </figcaption>
            </figure>
        </article>
    );
};

export default CurrentFoodsItem;