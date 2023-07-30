var slideIndex = 0;
const slides = document.getElementsByClassName("slide");
function showSlide() {

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  console.log(slideIndex);
  slideIndex = (slideIndex + 1) % slides.length;
}

showSlide();

setInterval(showSlide, 3000);