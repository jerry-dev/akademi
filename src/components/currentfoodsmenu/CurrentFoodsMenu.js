import React from 'react';
import styles from './currentfoodsmenu.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import CurrentFoodsItem from '../currentfoodsitem/CurrentFoodsItem.js';

const menuItems = [
    <li>
        <CurrentFoodsItem menuItemName="Beef Steak with Fried Potato" menuItemPreviewDetail="Lorem ipsum dolor sit amet..."/>
    </li>,
    <li>
        <CurrentFoodsItem menuItemName="Pancake with Honey" menuItemPreviewDetail="Lorem ipsum dolor sit amet..."/>
    </li>,
    <li>
        <CurrentFoodsItem menuItemName="Japanese Beef Ramen" menuItemPreviewDetail="Lorem ipsum dolor sit amet..."/>
    </li>
];

const CurrentFoodsMenu = (props) => {
    return (
        <article className={styles.currentFoodsMenu}>
            <header>
                <SectionTitle title="Current Foods Menu"/>
            </header>
            <ul>{menuItems}</ul>
            <button type="button" className={styles.loadMore}>
                <p>View More</p>
            </button>
        </article>
    );
};

export default CurrentFoodsMenu;