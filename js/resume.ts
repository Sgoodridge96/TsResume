document.addEventListener("DOMContentLoaded", () => {
    // Variables
    const resumeImage = document.querySelector('.resume-left-container img') as HTMLImageElement;
    const downloadButton = document.querySelector('.download-button') as HTMLButtonElement;

    // Hover animations 
    const addHoverAnimation = (element: HTMLElement) => {
        element.addEventListener('mouseover', () => {
            element.style.transform = 'scale(1.1)';
            element.style.transition = 'transform 0.3s ease';
        });

        element.addEventListener('mouseout', () => {
            element.style.transform = 'scale(1)';
        });
    };

    // Open PDF when clicked
    const openPDF = () => {
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
