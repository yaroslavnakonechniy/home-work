class Slider {
  constructor({ 
      state, 
      template, 
      navigation, 
      events, 
      render
  }) {
      this.state = state;
      this.navigation = navigation;
      this.template = template;
      this.events = events;
      this.render = render;
  }


  init(
    elements,
    options,
  ) {
      this.state.setDuration(options.duration);
      this.state.setInterval(options.interval);


      this.template.init(elements);

      const eventsInitiation = this.events.init();

      this.render.render();
      this.render.renderPlay(this.state.getMode());

      eventsInitiation.click.onPrev(() => {
        this.render.render(() => this.navigation.prevStep());
      });

      eventsInitiation.click.onNext(() => {
        this.render.render(() => this.navigation.nextStep());
      });

      eventsInitiation.click.onPlay((mode) => {
        if(mode === 'pause'){
          eventsInitiation.interval.stop();
        } else {
          eventsInitiation.interval.start(() => {
            this.render.render(() => this.navigation.nextStep());
          }, this.state.getInterval());
        }

        this.render.renderPlay(mode);
      });

      eventsInitiation.swipes.swipe({
        toLeft: () => this.render.render(() => this.navigation.prevStep()),
        toRight: () => this.render.render(() => this.navigation.nextStep()),
      })

      eventsInitiation.keyboard.onKey({
        toLeft: () => this.render.render(() => this.navigation.prevStep()),
        toRight: () => this.render.render(() => this.navigation.nextStep()),
      })

      eventsInitiation.interval.start(() => {
        this.render.render(() => this.navigation.nextStep());
      }, this.state.getInterval());
  }

  destroy() {
    this.events.destroy();
  }
}

const state = new State();
const template = new Template({ state });
const navigation = new Navigation({ state });
const events = new Events({ state, template });
const render = new Render({ navigation, template });



const slider = new Slider({
  state, 
  template, 
  navigation, 
  events, 
  render,
});

