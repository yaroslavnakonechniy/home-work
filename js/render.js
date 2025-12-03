class Render {
    constructor({ navigation, template }) {
        this.navigation = navigation;
        this.template = template;
    }

    render(action = () => {}) {
        const prevIndex = this.navigation.getCurrentStep();
        action();
        const currentIndex = this.navigation.getCurrentStep();

        this.#renderSlide({prevIndex, currentIndex});
        this.#renderPoints({prevIndex, currentIndex});
    }

    renderPlay() {
        const player = this.template.elements.buttons.play;

        player.classList.toggle('active');
        player.textContent = player.classList.contains('active') ? "Stop" : "Play";
    }

    #renderPoints({ prevIndex, currentIndex }) {
        this.template.elements.points.items[prevIndex].classList.remove('active');
        this.template.elements.points.items[currentIndex].classList.add('active');
    }

    #renderSlide({ prevIndex, currentIndex }) {
        this.template.elements.items[prevIndex].style.opacity = 0;
        this.template.elements.items[currentIndex].style.opacity = 1;
    }
}