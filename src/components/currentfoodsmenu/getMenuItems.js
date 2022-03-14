import React from 'react';
import CurrentFoodsItem from '../currentfoodsitem/CurrentFoodsItem.js';

const getMenuItems = (bucketsToDisplay) => {
    return bucketsToDisplay.map((instance) => {
        return <li>
            <CurrentFoodsItem
                itemId={instance.itemId}
                menuItemName={instance.menuItemName}
                menuItemPreviewDetail={instance.menuItemPreviewDetail}/>
            </li>
    });
}

export default getMenuItems;