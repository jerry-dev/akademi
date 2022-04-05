import closeMobileRightMenu from './closeMobileRightMenu';

const closeMobileMenuButton = () => {
    const mobileRightMenu = document.getElementsByTagName('aside')[2];
    closeMobileRightMenu(mobileRightMenu);
}

export default closeMobileMenuButton;