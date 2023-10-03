var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide active';
}

setInterval(showSlide, 3000); // Change slide every 3 seconds