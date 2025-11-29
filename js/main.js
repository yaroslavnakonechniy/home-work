const slider = (function (){
  
  //State
  const state = {
    duration: 0,
    mode: 'play',
    numberOfSlides: 0,
    elements: {
      container: null,
      items: null,
      points: {
        container: null,
        items: null,
      },
      buttons: {
        prev: null,
        next: null,
        play: null,
      }
    },
    curentIndex: 0,

    setNumberOfSlides() {
      this.numberOfSlides = this.elements.items.length;
    },
    setDuration(duration = 1000){
      this.duration = duration;
    },
    increaseIndex() {
      return ++this.curentIndex;
    },
    decreaseIndex() {
      return --this.curentIndex;
    },
    getIndex() {
      return this.curentIndex;
    },
    setElements(elements) {
      this.elements.container = document.querySelector(elements.container);
      this.elements.items = document.querySelectorAll(elements.items);
    },
    generatePoints() {
      const pointsTemplate = new Array(this.numberOfSlides)
        .fill()
        .reduce((template,  _, index) => {
          return `${template}<span data-index='${index}'></span>`
        }, '');

        this.elements.points.container.innerHTML = pointsTemplate;
        this.elements.points.items = this.elements.points.container.children;
    },
    initElements(elements){
      this.elements.buttons.prev = document.getElementById('slider-prev');
      this.elements.buttons.next = document.getElementById('slider-next');
      this.elements.buttons.play = document.getElementById('slider-play');
      this.elements.points.container = document.getElementById('slider-points');

      this.setElements(elements);
      this.setNumberOfSlides();
      this.generatePoints();
    },
    toggleMode(){
      this.mode = this.mode === 'play' ? 'pause' : 'play';
      return this.mode;
    },

  }
 
  //Events
  const events = (function(){
    let prev = null;
    let next = null;
    let timer = null;
    let play = null;

    let prevFn = null;
    let nextFn = null;
    let playFn = null;

    const clickEvents = {
      onPrev(handelEvent) {
        prevFn = handelEvent;
        prev.addEventListener('click', prevFn);
      },
      onNext(handelEvent) {
        nextFn = handelEvent;
        next.addEventListener('click', nextFn);
      },
      onPlay(handelPlay){
        playFn = () => {
          handelPlay(state.toggleMode());
        };
        
        play.addEventListener('click', playFn);
      },
    }

    const intervalEvents = {
      start(handelInterval, duration){
        timer = setInterval(handelInterval, duration);
      },

      stop(){
        clearInterval(timer);
      }
    }

    const init = () => {
      prev = state.elements.buttons.prev;
      next = state.elements.buttons.next;
      play = state.elements.buttons.play;

      return {
        click: clickEvents,
        interval: intervalEvents,
      }
    }

    return {
      init,
    }

  }());

  const getIndex = (curentIndex) => curentIndex - state.numberOfSlides * (Math.floor(curentIndex / state.numberOfSlides));
  const prevIndex = () => getIndex(state.decreaseIndex());
  const nextIndex = () => getIndex(state.increaseIndex());
  const curentPosition = () => getIndex(state.getIndex());

  const renderSlide = (action) => {
    const prev = curentPosition();
    action();
    const curent = curentPosition();

    state.elements.items[prev].style.opacity = 0;
    state.elements.items[curent].style.opacity = 1;
  }

  const renderPlay = () => {
    const player = state.elements.buttons.play;

    player.classList.toggle('active');
    player.textContent = player.classList.contains('active') ? "Stop" : "Play";
  }

  const init = (elements, options) =>{
    state.initElements(elements);
    state.setDuration(options.duration);

    const eventsInstance = events.init();

    eventsInstance.interval.start(() => {
      renderSlide(nextIndex);
    }, state.duration);

    eventsInstance.click.onPrev(() => {
      renderSlide(prevIndex);
    });

    eventsInstance.click.onPlay((mode) => {
      if(mode === 'pause'){
        eventsInstance.interval.stop();
        //renderPlay(mode);
      } else {
        //renderPlay(mode);
        eventsInstance.interval.start(() => {
          renderSlide(nextIndex);
        }, state.duration);
      }

      renderPlay(mode);
      
    });

    eventsInstance.click.onNext(() => {
      renderSlide(nextIndex);
    })
  };

  return {
    init,
  }

}());