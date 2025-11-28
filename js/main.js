const slider = (function (){
  
  //State
  const state = {
    duration: 1000,
    numberOfSlides: 0,
    elements: {
      container: null,
      items: null,
    },
    curentIndex: 0,

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
    }
  }
 
  //Events
  const events = (function(){
    let prev = null;
    let next = null;
    let timer = null;

    let prevFn = null;
    let nextFn = null;

    const clickEvents = {
      onPrev(handelEvent) {
        prevFn = handelEvent;
        prev.addEventListener('click', prevFn);
      },

      onNext(handelEvent) {
        nextFn = handelEvent;
        next.addEventListener('click', nextFn);
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

    const init = () => {
      prev = document.getElementById('slider-prev');
      next = document.getElementById('slider-next');

      return {
        click: clickEvents,
        interval: intervalEvents,
      }
    }

    return {
      init,
    }

  }());

  //const items = document.querySelectorAll('.slider__item');

  const getIndex = (curentIndex) => curentIndex - 5 * (Math.floor(curentIndex / 5));
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

/*   setInterval(() => {
    renderSlide(nextIndex)
  }, 1000); */

  const init = (elements, options = {duration: state.duration}) =>{
    state.setElements(elements);

    const eventsInstance = events.init();

    eventsInstance.interval.start(() => {
      renderSlide(nextIndex);
    }, options.duration);

    eventsInstance.click.onPrev(() => {
      renderSlide(prevIndex);
    });

    eventsInstance.click.onNext(() => {
      renderSlide(nextIndex);
    })
  };

  return {
    init,
  }

}());