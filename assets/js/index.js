import {showMenu, removeMenuOnClick, scrollActive} from './modules/menu.js'

import { loadGallery, listenerScroll } from './modules/slider.js'


// SHOW MENU-ICON ON CLICK
showMenu()

// REMOVE MENU-ICON ON CLICK IN NAV-LINK
removeMenuOnClick()

// GET SECTION AND STYLE SECTION LINK
window.addEventListener('scroll', scrollActive)

// SLIDER
loadGallery()
listenerScroll()