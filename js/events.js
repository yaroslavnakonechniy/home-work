class ClickEvents {
    #prevFn = null;
    #nextFn = null;
    #playFn = null;
    #pointsFn = null;

    constructor({ state, template }) {
        this.state = state;
        this.template = template;
    }

    onPrev(handelEvent) {
        this.#prevFn = handelEvent;
        this.template.elements.buttons.prev.addEventListener('click', this.#prevFn);
    }

    onNext(handelEvent) {
        this.#nextFn = handelEvent;
        this.template.elements.buttons.next.addEventListener('click', this.#nextFn);
    }

    onPlay(handelPlay) {
        this.#playFn = () => {
          handelPlay(this.state.toggleMode());
        };
        
        this.template.elements.buttons.play.addEventListener('click', this.#playFn);
    }

    onPoint(handelPoint) {
        this.#pointsFn = (event) => {
          event.target.closest('span') && handelPoint(event.target.dataset.index)
        };

        this.template.elements.points.container.addEventListener('click', this.#pointsFn);
    }

    destroy() {
        this.template.elements.buttons.prev.addEventListener('click', this.#prevFn);
        this.template.elements.buttons.next.addEventListener('click', this.#nextFn);
        this.template.elements.buttons.play.addEventListener('click', this.#playFn);
        this.template.elements.points.container.addEventListener('click', this.#pointsFn);

        this.#prevFn = null;
        this.#nextFn = null;
        this.#playFn = null;
        this.#pointsFn = null;
    }
}
class SwipeEvents {
    #mousedownFn = null;
    #mouseupFn = null;

    constructor({ state, template }) {
        this.state = state;
        this.template = template;
    }

    swipes(swipes) {
        let startPositionX = 0;
        const getX = (e) => e.offsetX || e.changedTouches?.[0].pageX;
        
        mousedownFn = (e) => {
            e.preventDefault();

            startPositionX = getX(e);
        };

        mouseupFn = (e) => {
            e.preventDefault();

            getX(e) < startPositionX ? swipes.toLeft() : swipes.toRight();

            startPositionX = 0;
        };

        this.template.elements.list.addEventListener('mousedown', this.#mousedownFn);
        this.template.elements.list.addEventListener('mouseup', this.#mouseupFn);
        this.template.elements.list.addEventListener('touchstart', this.#mousedownFn);
        this.template.elements.list.addEventListener('touchend', this.#mouseupFn);
    }

    destroy() {
        this.template.elements.list.addEventListener('mousedown', this.#mousedownFn);
        this.template.elements.list.addEventListener('mouseup', this.#mouseupFn);
        this.template.elements.list.addEventListener('touchstart', this.#mousedownFn);
        this.template.elements.list.addEventListener('touchend', this.#mouseupFn);

        this.#mousedownFn = null;
        this.#mouseupFn = null;
    }
}
class IntervalEvents {
    #timer = null;

    constructor({ state, template }) {
        this.state = state;
        this.template = template;
    }

    start(handelInterval, duration){
        this.#timer = setInterval(handelInterval, duration);
    }

    stop(){
        clearInterval(this.#timer);
    }

    destroy() {
        this.stop();
    }
}
class KeyboardEvents  {
    #keyFn = null;

    onKey(handelKey) {
        this.#keyFn = (e) => {
          e.code === 'ArrowLeft' ? handelKey.toLeft() : handelKey.toRight();
        };

        document.addEventListener('keydown', this.#keyFn);
    }

    destroy() {
        this.#keyFn = null;
    }
};
class Events {
    #click = null;
    #swipes = null;
    #interval = null;
    #keyboard = null;

    constructor({ state, template }) {
        this.state = state;
        this.template = template;
    }

    init() {
        this.#click = new ClickEvents ({ state, template });
        this.#swipes = new SwipeEvents ({ state, template });
        this.#interval = new IntervalEvents ({ state, template });
        this.#keyboard = new KeyboardEvents ();
        
        return {
            click: this.#click,
            swipes: this.#swipes,
            interval: this.#interval,
            keyboard: this.#keyboard,
        }
    }

    destroy() {
        this.#click.destroy();
        this.#swipes.destroy();
        this.#interval.destroy();
        this.#keyboard.destroy();
    }
}