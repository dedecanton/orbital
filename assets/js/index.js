import * as menu from './modules/menu.js';
import * as slider from './modules/slider.js';
import * as scroll from './modules/scrollTop.js';
import './modules/form.js';
import './modules/scrollReveal.js';

export default class Index {

    constructor(title, api) {
        this.title = title;
        this.apiEndpoint = api;

        this.initialize = () => {
            // SHOW MENU-ICON ON CLICK
            menu.showMenu();
            // REMOVE MENU-ICON ON CLICK IN NAV-LINK
            menu.removeMenuOnClick();
            // SLIDER
            slider.loadGallery();
            slider.listenerScroll();
            // SCROLL TOP
            window.addEventListener('scroll', scroll.scrollTop);
            // GET SECTION AND STYLE SECTION LINK
            window.addEventListener('scroll', menu.scrollActive);
            menu.scrollActive();
        }
    }
}

const index = new Index("Orbital", "https://orbital-api.herokuapp.com/api/estudante");
index.initialize();
export {index};

