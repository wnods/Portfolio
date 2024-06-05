document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideInElements = document.querySelectorAll('.slide-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    slideInElements.forEach(element => {
        observer.observe(element);
    });

    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.classList.add('active');
        });
        project.addEventListener('mouseout', () => {
            project.classList.remove('active');
        });
    });
});
