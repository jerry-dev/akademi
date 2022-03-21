import enableBodyScroll from './enableBodyScroll.js';

const closeMobileRightMenu = (mobileRightMenu) => {
    const mobileRightMenuBackdrop = document.getElementById('mobileRightMenuBackdrop');

    mobileRightMenu.setAttribute('data-isoffcanvas', true);
    mobileRightMenuBackdrop.setAttribute('data-isactive', false);
    enableBodyScroll();
}

export default closeMobileRightMenu;
