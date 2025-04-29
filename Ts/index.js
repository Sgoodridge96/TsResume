"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var leftContainer = document.querySelector(".left-container");
  var links = document.querySelectorAll(".left-container a");
  var rightItems = document.querySelectorAll(".right-container-item");

  // Smooth animations
  function scaleElement(element, scale) {
    element.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    element.style.transform = "scale(".concat(scale, ")");
  }

  // Hover over left container animation
  if (leftContainer) {
    leftContainer.addEventListener("mouseenter", function () {
      return scaleElement(leftContainer, 1.05);
    });
    leftContainer.addEventListener("mouseleave", function () {
      return scaleElement(leftContainer, 1);
    });
  }

  // Hover over Links animation
  links.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      return scaleElement(link, 1.1);
    });
    link.addEventListener("mouseleave", function () {
      return scaleElement(link, 1);
    });
  });

  // Hide or show the right container items
  rightItems.forEach(function (item) {
    var paragraph = item.querySelector("p");
    if (paragraph) {
      paragraph.style.opacity = "0";
      paragraph.style.maxHeight = "0";
      paragraph.style.overflow = "hidden";
      paragraph.style.transition = "opacity 0.3s ease, max-height 0.3s ease";
      item.addEventListener("mouseenter", function () {
        paragraph.style.opacity = "1";
        paragraph.style.maxHeight = "500px";
      });
      item.addEventListener("mouseleave", function () {
        paragraph.style.opacity = "0";
        paragraph.style.maxHeight = "0";
      });
    }
  });
});