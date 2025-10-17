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
showSlides(slideIndex);
startAutoSlide(); // Start automatic sliding

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
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.opacity = "0";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides.length > 0) {  // Check if slides exist
    slides[slideIndex-1].style.display = "block";
    setTimeout(() => {
      slides[slideIndex-1].style.opacity = "1"; // Trigger fade in
    }, 10); // Small delay to ensure display:block has taken effect
    dots[slideIndex-1].className += " active";
  }
}

function startAutoSlide() {
  stopAutoSlide(); // Clear any existing timer
  slideTimer = setInterval(() => {
    plusSlides(1);
  }, 4000); // Change slide every 4 seconds
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
