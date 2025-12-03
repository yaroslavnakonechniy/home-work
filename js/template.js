const SLIDER_CONTROLS = 'slider-controls';
const SLIDER_PLAY = 'slider-play';
const SLIDER_PREV = 'slider-prev';
const SLIDER_NEXT = 'slider-next';
const SLIDER_POINTS = 'slider-points';
const SLIDER_LIST = 'slider-list';

class Template {
    constructor({state}) {
        this.state = state;
        this.elements = {
            container: null,
            list: null,
            items: null,
            points: {
                container: null,
                items: null,
            },
            buttons: {
                prev: null,
                next: null,
                play: null,
            },
        };
    }

    init(elements) {
        this.#setElements(elements);
        this.#createAnimation();

        this.elements.list = document.getElementById(this.#convertOriginalID( SLIDER_LIST ));
        this.elements.buttons.prev = document.getElementById(this.#convertOriginalID( SLIDER_PREV ));
        this.elements.buttons.next = document.getElementById(this.#convertOriginalID( SLIDER_NEXT ));
        this.elements.buttons.play = document.getElementById(this.#convertOriginalID( SLIDER_PLAY ));
        this.elements.points.container = document.getElementById(this.#convertOriginalID( SLIDER_POINTS ));
        this.elements.points.items = this.elements.points.container.children;
    }

    #setElements({
        container,
        items
    }) {
        this.elements.container = document.querySelector(container);
        this.state.setNumberOfSlides(this.elements.container.children.length);

        const controlsHTML = this.#createControlsHTML();
        const slideListHTML = this.#createSlideListHTML();

        this.elements.container.innerHTML = `
            ${controlsHTML}
            ${slideListHTML}
        `;

        this.elements.items = document.querySelectorAll(items);
    }

    #createSlideListHTML() {
        const itemsHTML = this.elements.container.innerHTML;
        const slideListHTML = `
            <div id="${this.#convertOriginalID(SLIDER_LIST)}" class="slider__list">
                ${itemsHTML}
            </div>
        `;
        
        return slideListHTML;

    }

    #createControlsHTML() {
        const controlsHTML = `
            <div id="${this.#convertOriginalID(SLIDER_CONTROLS)}" class="slider__controls">
                <button id="${this.#convertOriginalID(SLIDER_PLAY)}" class="slider__play-btn">Play</button>
                <button id="${this.#convertOriginalID(SLIDER_PREV)}" class="slider__prev-btn"> <- Prev</button>
                <button id="${this.#convertOriginalID(SLIDER_NEXT)}" class="slider__next-btn">Next -> </button>
                <div id="${this.#convertOriginalID(SLIDER_POINTS)}" class="slider__points">
                    ${this.#createPointsHTML()}
                </div>
            </div>
        `;

        return controlsHTML;
    }

    #createPointsHTML() {
        const pointsHtml = new Array(this.state.getNumberOfSlides())
            .fill(0)
            .reduce((template,  _, index) => {
                return `${template}<span data-index='${index}'></span>`
            }, '');
        
        return pointsHtml;
    }

    #createAnimation() {
        this.elements.items.forEach(item => {
            item.style.opacity = 0;
            item.style.transition = `all ${this.state.getDuration()}ms ease-in-out`;
        });
    }

    #convertOriginalID(originalID) {
        return convertOriginalID(this.state.getSliderID(), originalID);
    }
}