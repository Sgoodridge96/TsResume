"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Variables
  var resumeImage = document.querySelector('.resume-left-container img');
  var downloadButton = document.querySelector('.download-button');

  // Hover animations 
  var addHoverAnimation = function addHoverAnimation(element) {
    element.addEventListener('mouseover', function () {
      element.style.transform = 'scale(1.1)';
      element.style.transition = 'transform 0.3s ease';
    });
    element.addEventListener('mouseout', function () {
      element.style.transform = 'scale(1)';
    });
  };

  // Open PDF when clicked
  var openPDF = function openPDF() {
    window.open('./pdf/Stephen_Goodridge_Resume.pdf', '_blank');
  };
  if (resumeImage) {
    addHoverAnimation(resumeImage);
    resumeImage.addEventListener('click', openPDF);
  }
  if (downloadButton) {
    addHoverAnimation(downloadButton);
    downloadButton.addEventListener('click', openPDF);
  }
});