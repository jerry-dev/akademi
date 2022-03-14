const getCurrentFoodsItems = (menuItems) => {
    return menuItems.map((item) => {
        return {
            itemId: item.id,
            menuItemName: item.itemName,
            menuItemPreviewDetail: item.description
        }
    });
}

export default getCurrentFoodsItems;