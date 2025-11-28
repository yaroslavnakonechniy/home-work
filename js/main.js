const slider = (function (){
  let curentIndex = 0;
 
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
      start(handelInterval, duration = 1000){
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

  const items = document.querySelectorAll('.slider__item');

  const getIndex = (curentIndex) => curentIndex - 5 * (Math.floor(curentIndex / 5));
  const prevIndex = () => getIndex(--curentIndex);
  const nextIndex = () => getIndex(++curentIndex);
  const curentPosition = () => getIndex(curentIndex);

  const eventsInstance = events.init();

  eventsInstance.interval.start(() => {
    renderSlide(nextIndex);
  })

  eventsInstance.click.onPrev(() => {
    renderSlide(prevIndex);
  });

  eventsInstance.click.onNext(() => {
    renderSlide(nextIndex);
  })



  const renderSlide = (action) => {
    const prev = curentPosition();
    action();
    const curent = curentPosition();

    items[prev].style.opacity = 0;
    items[curent].style.opacity = 1;
  }

/*   setInterval(() => {
    renderSlide(nextIndex)
  }, 1000); */

  const init = () =>{

  };

  return {
    init,
  }

}());