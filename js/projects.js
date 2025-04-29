"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Variable for project windows
  var projectElements = document.querySelectorAll('.project');
  // Handle hover events for project windows
  var handleProjectHoverEffect = function handleProjectHoverEffect(event) {
    var project = event.currentTarget;
    project.style.transition = 'transform 0.3s ease';
    project.style.transform = 'scale(1.05)';
  };
  var handleProjectHoverOutEffect = function handleProjectHoverOutEffect(event) {
    var project = event.currentTarget;
    project.style.transition = 'transform 0.3s ease';
    project.style.transform = 'scale(1)';
  };

  // Listeners for project windows
  projectElements.forEach(function (project) {
    project.addEventListener('mouseover', handleProjectHoverEffect);
    project.addEventListener('mouseout', handleProjectHoverOutEffect);
  });

  // Handle hover events for links
  var handleLinkHoverEffect = function handleLinkHoverEffect(event) {
    var link = event.currentTarget;
    link.style.transition = 'transform 0.3s ease';
    link.style.transform = 'scale(1.1)';
  };
  var handleLinkHoverOutEffect = function handleLinkHoverOutEffect(event) {
    var link = event.currentTarget;
    link.style.transition = 'transform 0.3s ease';
    link.style.transform = 'scale(1)';
  };

  // Listeners for project links
  var projectLinks = document.querySelectorAll('.project-text a');
  projectLinks.forEach(function (link) {
    link.addEventListener('mouseover', handleLinkHoverEffect);
    link.addEventListener('mouseout', handleLinkHoverOutEffect);
  });
});