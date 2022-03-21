import closeMobileRightMenu from './closeMobileRightMenu';

const closeOnEscKeyDown = (event) => {
    if (event.key === 'Escape') {
        const mobileRightMenu = document.getElementsByTagName('aside')[2];
        closeMobileRightMenu(mobileRightMenu);
     }
}

export default closeOnEscKeyDown;
