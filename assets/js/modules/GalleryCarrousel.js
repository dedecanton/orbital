import { changeView, views } from "./slider.js";

export class Gallery {
    constructor() {
        this.iterator;
        this.items = new Array();
        this.start = ((items) => {
            if (items == undefined || items.length == 0) {
                return;
            }
            this.iterator = new GalleryCarrousel(items.length);
            this.items = items;
            this.update();
        });

        this.next = (() => {
            if (this.items == undefined || this.items.length == 0) {
                return;
            }
            this.iterator.next();
            this.update();
        });

        this.prev = (() => {
            if (this.items == undefined || this.items.length == 0) {
                return
            }
            this.iterator.prev();
            this.update();
        });

        this.update = (() => {
            changeView(views.LEFT, this.items[this.iterator.get(views.LEFT)]);
            changeView(views.MIDDLE, this.items[this.iterator.get(views.MIDDLE)]);
            changeView(views.RIGHT, this.items[this.iterator.get(views.RIGHT)]);
        });

        this.getById = ((id, items) => ((items == undefined) ? this.items : items)
            .filter((item) => item.id == id)[0]);
    }
}

class GalleryCarrousel {
    constructor(length) {
        this.orders = new Map([[views.LEFT, 0], [views.MIDDLE, 0], [views.RIGHT, 0]]);
        this.maxValue = length;
        
        let i = [length - 1, true];
        this.orders.forEach((v, k, m) => {
            if (i[1]) {
                i[1] = false;
                m.set(k, i[0]);
                return;
            }
            if (i[0] == this.maxValue - 1) {
                m.set(k, i[0] = 0);
                return;
            }
            m.set(k, i[0] += 1);
        });


        this.get = (name) => {
            return this.orders.get(name);
        }
        this.set = (key, value) => {
            this.orders.set(key, value);
        }

        this.next = (() => {
            this.set(views.LEFT, this.get(views.MIDDLE));
            this.set(views.MIDDLE, this.get(views.RIGHT));
            this.set(views.RIGHT, (this.get(views.RIGHT) == this.maxValue - 1) ? 0 : this.get(views.RIGHT) + 1);
        });

        this.prev = (() => {
            this.set(views.RIGHT, this.get(views.MIDDLE));
            this.set(views.MIDDLE, this.get(views.LEFT));
            this.set(views.LEFT, (this.get(views.LEFT) == 0) ? this.maxValue -1 : this.get(views.LEFT) - 1);
        });
    }
}