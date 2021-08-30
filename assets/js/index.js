import {showMenu, removeMenuOnClick, scrollActive} from './modules/menu.js'


// SHOW MENU-ICON ON CLICK
showMenu()

// REMOVE MENU-ICON ON CLICK IN NAV-LINK
removeMenuOnClick()

// GET SECTION AND STYLE SECTION LINK
window.addEventListener('scroll', scrollActive)

