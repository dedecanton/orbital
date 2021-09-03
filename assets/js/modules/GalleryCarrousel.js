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
            this.next();
        });

        this.next = (() => {
            if (this.items == undefined || this.items.length == 0) {
                return;
            }
            changeView(views.LEFT, this.items[this.iterator.next()]);
            changeView(views.MIDDLE, this.items[this.iterator.next()]);
            changeView(views.RIGHT, this.items[this.iterator.next()]);
        });

        this.prev = (() => {
            if (this.items == undefined || this.items.length == 0) {
                return
            }
            changeView(views.RIGHT, this.items[this.iterator.prev()]);
            changeView(views.MIDDLE, this.items[this.iterator.prev()]);
            changeView(views.LEFT, this.items[this.iterator.prev()]);
        });

        this.getById = ((id, items) => ((items == undefined) ? this.items : items)
                        .filter((item) => item.id == id)[0]);
    }
}

class GalleryCarrousel {
    constructor(lenght) {
        this.started = false;
        this.nextValue = lenght - 1;
        this.maxValue = lenght;

        this.next = (() => {
            if (!this.started) {
                this.started = true;
                return this.nextValue;
            }
            if (this.nextValue == this.maxValue - 1) {
                return this.nextValue = 0;
            }
            return this.nextValue += 1;
        });

        this.prev = (() => {
            if (!this.started) {
                this.started = true;
                return this.nextValue;
            }
            if (this.nextValue == 0) {
                return this.nextValue = this.maxValue - 1;
            }
            return this.nextValue -= 1;
        });
    }
}