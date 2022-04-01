import React from 'react';
import CurrentFoodsItem from '../currentfoodsitem/CurrentFoodsItem.js';

const getMenuItems = (bucketsToDisplay) => {
    return bucketsToDisplay.map((foodInstance) => {
        return <li key={Math.floor(Math.random() * 99999)}>
            <CurrentFoodsItem
                itemId={foodInstance.itemId}
                menuItemName={foodInstance.itemName}
                imageSource={foodInstance.menuImage}
                menuItemPreviewDetail={foodInstance.description}/>
            </li>
    });
}

export default getMenuItems;