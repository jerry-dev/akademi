import React from 'react';
import styles from './currentfoodsmenu.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import CurrentFoodsItem from '../currentfoodsitem/CurrentFoodsItem.js';
import dataBucketCreator from '../../utils/dataBucketCreator.js';
import getBucketToBeDisplayed from '../../utils/getBucketToBeDisplayed.js';

const CurrentFoodsMenu = (props) => {
    const [bucketsBeingShown, setBucketsBeingShown] = React.useState([1]);

    const bucketsContainer = dataBucketCreator(props.currentFoodsItems, 3);
    const bucketsToDisplay = getBucketToBeDisplayed(bucketsContainer, bucketsBeingShown);

    const menuItems = bucketsToDisplay.map((instance) => {
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