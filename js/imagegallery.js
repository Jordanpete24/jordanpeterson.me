var slideIndex = 1;

// Next/previous controls
function plusSlides(n, sourceDoc) {
  showSlides(slideIndex += n, sourceDoc);
}

// Thumbnail image controls
function currentSlide(n, sourceDoc) {
  showSlides(slideIndex = n, sourceDoc);
}

function showSlides(n, sourceDoc) {
  var i;
  var slides = sourceDoc.getElementsByClassName("mySlides");
  var dots = sourceDoc.getElementsByClassName("demo");
  var captionText = sourceDoc.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function f1() {
  alert('imagegallery.js is working');
}