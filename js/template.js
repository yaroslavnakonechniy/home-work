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

        this.elements.list = document.getElementById(SLIDER_LIST);
        this.elements.buttons.prev = document.getElementById(SLIDER_PREV);
        this.elements.buttons.next = document.getElementById(SLIDER_NEXT);
        this.elements.buttons.play = document.getElementById(SLIDER_PLAY);
        this.elements.points.container = document.getElementById(SLIDER_POINTS);
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
            <div id="${SLIDER_LIST}" class="slider__list">
                ${itemsHTML}
            </div>
        `;
        
        return slideListHTML;

    }

    #createControlsHTML() {
        const controlsHTML = `
            <div id="${SLIDER_CONTROLS}" class="slider__controls">
                <button id="${SLIDER_PLAY}" class="slider__play-btn">Play</button>
                <button id="${SLIDER_PREV}" class="slider__prev-btn"> <- Prev</button>
                <button id="${SLIDER_NEXT}" class="slider__next-btn">Next -> </button>
                <div id="${SLIDER_POINTS}" class="slider__points">
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


}