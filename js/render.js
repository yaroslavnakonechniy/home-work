class Render {
    constructor({ navigation, template }) {
        this.navigation = navigation;
        this.template = template;
    }

    render(action = () => {}) {
        const prevIndex = this.navigation.geCurentStep();
        action();
        const curentIndex = this.navigation.geCurentStep();

        this.#renderSlide({prevIndex, curentIndex});
        this.#renderPoints({prevIndex, curentIndex});
    }

    renderPlay() {
        const player = this.template.elements.buttons.play;

        player.classList.toggle('active');
        player.textContent = player.classList.contains('active') ? "Stop" : "Play";
    }

    #renderPoints({prevIndex, curentIndex}) {
        this.template.elements.points.items[prevIndex].classList.remove('active');
        this.template.elements.points.items[curentIndex].classList.add('active');
    }

    #renderSlide({prevIndex, curentIndex}) {
        this.template.elements.items[prevIndex].style.opacity = 0;
        this.template.elements.items[curentIndex].style.opacity = 1;
    }
}