// Get all the slideshow images
const slides = document.querySelectorAll(".slideshow-container > div");

// Set the initial slide index
let currentSlide = 0;

// Function to display the next slide
function showNextSlide() {
  // Hide the current slide
  slides[currentSlide].style.display = "none";

  // Increment the slide index
  currentSlide++;

  // Reset the slide index to 0 if it exceeds the total number of slides
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Display the next slide
  slides[currentSlide].style.display = "block";
}

// Start the slideshow by displaying the first slide
showNextSlide();

// Set the interval to advance the slideshow every 3 seconds (adjust the duration as needed)
setInterval(showNextSlide, 3000);
