const slider = (function (){
  
  //State
  const state = {
    duration: 0,
    mode: 'play',
    numberOfSlides: 0,
    elements: {
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
    setIndex(index) {
      this.curentIndex = index;
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
      this.elements.list = document.getElementById('slider-list');
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
    let points = null;
    let slides = null;

    let prevFn = null;
    let nextFn = null;
    let playFn = null;
    let pointsFn = null;
    let mousedownFn = null;
    let mouseupFn = null;
    let keyFn = null;

    const clickEvents = {
      onPrev(handelEvent) {
        prevFn = handelEvent;
        prev.addEventListener('click', prevFn);
      },
      onNext(handelEvent) {
        nextFn = handelEvent;
        next.addEventListener('click', nextFn);
      },
      onPlay(handelPlay) {
        playFn = () => {
          handelPlay(state.toggleMode());
        };
        
        play.addEventListener('click', playFn);
      },
      onPoint(handelPoint) {
        pointsFn = (event) => {
          event.target.closest('span') && handelPoint(event.target.dataset.index)
        };

        points.container.addEventListener('click', pointsFn);
      }
    }

    const intervalEvents = {
      start(handelInterval, duration){
        timer = setInterval(handelInterval, duration);
      },

      stop(){
        clearInterval(timer);
      }
    }

    const swipesEvents = (swipes) => {
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

      slides.addEventListener('mousedown', mousedownFn);
      slides.addEventListener('mouseup', mouseupFn);
      slides.addEventListener('touchstart', mousedownFn);
      slides.addEventListener('touchend', mouseupFn);
    }

    const keyboardEvents = {
      onKey(handelKey) {
        keyFn = (e) => {
          handelKey(e);
        };
        document.addEventListener('keydown', keyFn);
      }
    };

    const init = () => {
      prev = state.elements.buttons.prev;
      next = state.elements.buttons.next;
      play = state.elements.buttons.play;
      points = state.elements.points;
      slides = state.elements.list;

      return {
        click: clickEvents,
        interval: intervalEvents,
        swipes: swipesEvents,
        keyboard: keyboardEvents,
      }
    }

    return {
      init,
      destroy() {
        prev.removeEventListener('click', prevFn);
        next.removeEventListener('click', nextFn);
        play.removeEventListener('click', playFn);
        points.container.removeEventListener('click', pointsFn);

        intervalEvents.stop();

        prev = null;
        next = null;
        timer = null;
        play = null;
        points = null;
        slides = null;

        prevFn = null;
        nextFn = null;
        playFn = null;
        pointsFn = null;
        mousedownFn = null;
        mouseupFn = null;
        keyFn = null;
      },
    };
  }());

  //Navigation
  const getIndex = (curentIndex) => curentIndex - state.numberOfSlides * (Math.floor(curentIndex / state.numberOfSlides));
  const prevIndex = () => getIndex(state.decreaseIndex());
  const nextIndex = () => getIndex(state.increaseIndex());
  const curentPosition = () => getIndex(state.getIndex());
  const moveTo = (index) => getIndex(state.setIndex(index));

  //Render
  const render = (action = () => {}) => {
    const prevIndex = curentPosition();
    action();
    const curentIndex = curentPosition();

    renderSlide(prevIndex, curentIndex);
    renderPoints(prevIndex, curentIndex);
  }

  const renderSlide = (prevIndex, curentIndex) => {
    state.elements.items[prevIndex].style.opacity = 0;
    state.elements.items[curentIndex].style.opacity = 1;
  }

  const renderPoints = (prevIndex, curentIndex) => {
    state.elements.points.items[prevIndex].classList.remove('active');
    state.elements.points.items[curentIndex].classList.add('active');
  }

  const renderPlay = () => {
    const player = state.elements.buttons.play;

    player.classList.toggle('active');
    player.textContent = player.classList.contains('active') ? "Stop" : "Play";
  }

  const handleKeySlide = (e) => {
    if (e.code === 'ArrowLeft') render(prevIndex);
    if (e.code === 'ArrowRight') render(nextIndex);
  }

  const init = (elements, options) =>{
    state.initElements(elements);
    state.setDuration(options.duration);

    const eventsInstance = events.init();

    render();

    eventsInstance.click.onPrev(() => {
      render(prevIndex);
    });

    eventsInstance.click.onNext(() => {
      render(nextIndex);
    });

    eventsInstance.click.onPlay((mode) => {
      if(mode === 'pause'){
        eventsInstance.interval.stop();
      } else {
        eventsInstance.interval.start(() => {
          render(nextIndex);
        }, state.duration);
      }

      renderPlay(mode);
      
    });

    eventsInstance.click.onPoint((index) => {
      render(() => {moveTo(index)});
    });

    eventsInstance.interval.start(() => {
      render(nextIndex);
    }, state.duration);

    eventsInstance.swipes({
      toLeft: () => render(prevIndex),
      toRight: () => render(nextIndex),
    });

    eventsInstance.keyboard.onKey(handleKeySlide);
  };

  return {
    init,
    destroy() {
      events.destroy();
    }
  }

}());