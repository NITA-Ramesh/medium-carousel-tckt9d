let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document
  .getElementById('carousel__button--next')
  .addEventListener('click', function () {
    moveToNextSlide();
  });
document
  .getElementById('carousel__button--prev')
  .addEventListener('click', function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === 0) {
    document.getElementById('carousel__button--prev').disabled = false;
  }
  if (slidePosition === totalSlides - 2) {
    document.getElementById('carousel__button--next').disabled = true;
  }
  slidePosition++;
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === totalSlides - 1) {
    document.getElementById('carousel__button--next').disabled = false;
  }
  if (slidePosition === 1) {
    document.getElementById('carousel__button--prev').disabled = true;
  }
  slidePosition--;
  updateSlidePosition();
}
