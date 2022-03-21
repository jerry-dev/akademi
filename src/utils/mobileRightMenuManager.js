import launchMobileRightMenu from './launchMobileRightMenu';
import closeMobileRightMenu from './closeMobileRightMenu';

const mobileRightMenuManager = () => {
    const mobileRightMenu = document.getElementsByTagName('aside')[2];

    (mobileRightMenu.getAttribute('data-isoffcanvas') === 'true')
        ? launchMobileRightMenu(mobileRightMenu)
        : closeMobileRightMenu(mobileRightMenu)
}

export default mobileRightMenuManager;
