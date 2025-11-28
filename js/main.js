const slider = (function (){
  let curentIndex = 0;
 

  const prev = document.getElementById('slider-prev');
  const next = document.getElementById('slider-next');
  const items = document.querySelectorAll('.slider__item');

  const getIndex = (curentIndex) => curentIndex % 5;
  const prevIndex = () => getIndex(--curentIndex);
  const nextIndex = () => getIndex(++curentIndex);
  const curentPosition = () => getIndex(curentIndex);

  prev.addEventListener('click', () => {

    const prev = curentPosition();
    prevIndex();
    const curentIndex = curentPosition();
    
    items[prev].style.opacity = 0;
    items[curentIndex].style.opacity = 1;
  });

  next.addEventListener('click', () => {

    const prev = curentPosition();
    nextIndex();
    const curentIndex = curentPosition();

    items[prev].style.opacity = 0;
    items[curentIndex].style.opacity = 1;
  });


  const init = () =>{

  };

  return {
    init,
  }

}());