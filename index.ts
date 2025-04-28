document.addEventListener("DOMContentLoaded", () => {
    const leftContainer = document.querySelector(".left-container") as HTMLElement;
    const links = document.querySelectorAll(".left-container a");
    const rightItems = document.querySelectorAll(".right-container-item");

    // Smooth animations
    function scaleElement(element: HTMLElement, scale: number) {
        element.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        element.style.transform = `scale(${scale})`;
    }

    // Hover over left container animation
    if (leftContainer) {
        leftContainer.addEventListener("mouseenter", () => scaleElement(leftContainer, 1.05));
        leftContainer.addEventListener("mouseleave", () => scaleElement(leftContainer, 1));
    }

    // Hover over Links animation
    links.forEach(link => {
        link.addEventListener("mouseenter", () => scaleElement(link as HTMLElement, 1.1));
        link.addEventListener("mouseleave", () => scaleElement(link as HTMLElement, 1));
    });

    // Hide or show the right container items
    rightItems.forEach(item => {
        const paragraph = item.querySelector("p") as HTMLElement;
        if (paragraph) {
            // Hide until user hovers over 
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
