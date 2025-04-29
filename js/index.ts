document.addEventListener("DOMContentLoaded", () => {
    const leftContainer = document.querySelector(".left-container") as HTMLElement;
    const links = document.querySelectorAll(".left-container a");
    const rightItems = document.querySelectorAll(".right-container-item");

    // Smooth scale animation when hovering
    function scaleElementOnEnter(element: HTMLElement) {
        element.style.transition = "transform 0.3s ease";
        element.style.transform = "scale(1.05)";
    }

    function scaleElementOnLeave(element: HTMLElement) {
        element.style.transition = "transform 0.3s ease";
        element.style.transform = "scale(1)";
    }

    // Hover over left container animation
    if (leftContainer) {
        leftContainer.addEventListener("mouseenter", () => scaleElementOnEnter(leftContainer));
        leftContainer.addEventListener("mouseleave", () => scaleElementOnLeave(leftContainer));
    }

    // Hover over Links animation
    links.forEach(link => {
        link.addEventListener("mouseenter", () => scaleElementOnEnter(link as HTMLElement));
        link.addEventListener("mouseleave", () => scaleElementOnLeave(link as HTMLElement));
    });

    // Hide or show the right container items
    rightItems.forEach(item => {
        const paragraph = item.querySelector("p") as HTMLElement;
        if (paragraph) {
            paragraph.style.opacity = "0";
            paragraph.style.maxHeight = "0";
            paragraph.style.overflow = "hidden";
            paragraph.style.transition = "opacity 0.3s ease, max-height 0.3s ease";

            item.addEventListener("mouseenter", () => {
                paragraph.style.opacity = "1";
                paragraph.style.maxHeight = "500px";
            });

            item.addEventListener("mouseleave", () => {
                paragraph.style.opacity = "0";
                paragraph.style.maxHeight = "0";
            });
        }
    });
});
