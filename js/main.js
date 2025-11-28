const slider = (function (){
  let curentIndex = 0;
 

  const prev = document.getElementById('slider-prev');
  const next = document.getElementById('slider-next');
  const items = document.querySelectorAll('.slider__item');

  const getIndex = (curentIndex) => curentIndex - 5 * (Math.floor(curentIndex / 5));
  const prevIndex = () => getIndex(--curentIndex);
  const nextIndex = () => getIndex(++curentIndex);
  const curentPosition = () => getIndex(curentIndex);

  prev.addEventListener('click', () => {
    renderSlide(prevIndex);
  });

  next.addEventListener('click', () => {
    renderSlide(nextIndex);
  });

  const renderSlide = (action) => {
    const prev = curentPosition();
    action();
    const curent = curentPosition();

    items[prev].style.opacity = 0;
    items[curent].style.opacity = 1;
  }

  setInterval(() => {
    renderSlide(nextIndex)
  }, 1000);


  const init = () =>{

  };

  return {
    init,
  }

}());