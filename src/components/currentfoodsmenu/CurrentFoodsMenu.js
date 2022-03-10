import React from 'react';
import styles from './currentfoodsmenu.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import CurrentFoodsItem from '../currentfoodsitem/CurrentFoodsItem.js';

const CurrentFoodsMenu = (props) => {
    let bucketsContainer = {};
    const maxDocsPerBucket = 3;
    let index = 0;
    const [bucketsBeingShown, setBucketsBeingShown] = React.useState([1]);

    for (let i = 1; i < props.currentFoodsItems.length; i++) {
        for (let k = 0; k < maxDocsPerBucket; k++) {
            if (props.currentFoodsItems[index]) {
                if (!Array.isArray(bucketsContainer[i])) {
                    bucketsContainer[i] = [];
                }
                bucketsContainer[i].push(props.currentFoodsItems[index]);
                index++;
            }
        }
    }

    const bucketsToDisplayed = [];
    for (let i = 1; i <= Object.keys(bucketsContainer).length; i++) {
        if (bucketsBeingShown.includes(i)) {
            for (let j = 0; j < bucketsContainer[i].length; j++) {
                bucketsToDisplayed[bucketsToDisplayed.length] = bucketsContainer[i][j];
            }
        }
    }

    const menuItems = bucketsToDisplayed.map((instance) => {
        return <li>
            <CurrentFoodsItem
                itemId={instance.itemId}
                menuItemName={instance.menuItemName}
                menuItemPreviewDetail={instance.menuItemPreviewDetail}/>
            </li>
    });

    const viewMore = () => {
        let bucketsToShow = JSON.parse(JSON.stringify(bucketsBeingShown));
        const nextBucket = bucketsBeingShown[bucketsBeingShown.length-1] + 1;

        if (bucketsContainer[nextBucket]) {
            bucketsToShow[bucketsToShow.length] = nextBucket;
            setBucketsBeingShown(bucketsToShow);
        } else {
            console.error(`**There are no more menu items to show**`);
        }
    }

    return (
        <article className={styles.currentFoodsMenu}>
            <header>
                <SectionTitle title="Current Foods Menu"/>
            </header>
            <ul>{menuItems}</ul>
            <button type="button" className={styles.loadMore} onClick={viewMore}>
                <p>View More</p>
            </button>
        </article>
    );
};

export default CurrentFoodsMenu;