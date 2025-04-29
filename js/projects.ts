document.addEventListener("DOMContentLoaded", () => {
    // Variable for project windows
    const projectElements = document.querySelectorAll('.project') as NodeListOf<HTMLDivElement>;
    // Handle hover events for project windows
    const handleProjectHoverEffect = (event: MouseEvent) => {
        const project = event.currentTarget as HTMLDivElement;
        project.style.transition = 'transform 0.3s ease';
        project.style.transform = 'scale(1.05)';
    };
    const handleProjectHoverOutEffect = (event: MouseEvent) => {
        const project = event.currentTarget as HTMLDivElement;
        project.style.transition = 'transform 0.3s ease';
        project.style.transform = 'scale(1)';
    };

    // Listeners for project windows
    projectElements.forEach(project => {
        project.addEventListener('mouseover', handleProjectHoverEffect);
        project.addEventListener('mouseout', handleProjectHoverOutEffect);
    });

    // Handle hover events for links
    const handleLinkHoverEffect = (event: MouseEvent) => {
        const link = event.currentTarget as HTMLAnchorElement;
        link.style.transition = 'transform 0.3s ease';
        link.style.transform = 'scale(1.1)';
    };
    const handleLinkHoverOutEffect = (event: MouseEvent) => {
        const link = event.currentTarget as HTMLAnchorElement;
        link.style.transition = 'transform 0.3s ease';
        link.style.transform = 'scale(1)';
    };

    // Listeners for project links
    const projectLinks = document.querySelectorAll('.project-text a') as NodeListOf<HTMLAnchorElement>;
    projectLinks.forEach(link => {
        link.addEventListener('mouseover', handleLinkHoverEffect);
        link.addEventListener('mouseout', handleLinkHoverOutEffect);
    });
});
