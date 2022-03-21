import disableBodyScroll from './disableBodyScroll.js';

const launchMobileRightMenu = (mobileRightMenu) => {
    const mobileRightMenuBackdrop = document.getElementById('mobileRightMenuBackdrop');

    mobileRightMenu.setAttribute('data-isoffcanvas', false);
    mobileRightMenuBackdrop.setAttribute('data-isactive', true);
    disableBodyScroll();
}

export default launchMobileRightMenu;
