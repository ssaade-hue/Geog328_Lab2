// Get the element with the class "icon"
let icon = document.getElementsByClassName("icon")[0];

// Add an event listener for the 'click' event on the icon element
icon.addEventListener('click', responsive_control);

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}

// Slideshow code
let slideIndex = 1;
let slideTimer = null;

// Initialize the slideshow
// Wait for DOM so elements exist
document.addEventListener('DOMContentLoaded', () => {
  showSlides(slideIndex);
  startAutoSlide(); // Start automatic sliding
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetTimer(); // Reset the timer when manually changing slides
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetTimer(); // Reset the timer when manually changing slides
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  if (slides.length === 0) return;
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides and remove active dot
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('show');
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  // Show the current slide (CSS handles opacity transition)
  slides[slideIndex - 1].classList.add('show');
  if (dots[slideIndex - 1]) dots[slideIndex - 1].className += ' active';
}

function startAutoSlide() {
  stopAutoSlide(); // Clear any existing timer
  slideTimer = setInterval(() => {
    plusSlides(1);
  }, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
  if (slideTimer) {
    clearInterval(slideTimer);
    slideTimer = null;
  }
}

function resetTimer() {
  stopAutoSlide();
  startAutoSlide();
}

// Pause slideshow when hovering over it
const slideshow = document.querySelector('.slideshow-container');
if (slideshow) {
  slideshow.addEventListener('mouseenter', stopAutoSlide);
  slideshow.addEventListener('mouseleave', startAutoSlide);
}
