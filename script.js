// JavaScript for project slider navigation
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slider = document.querySelector('.project-slider');

prevBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: -300, // Adjust the scroll amount as needed
        behavior: 'smooth',
    });
});

nextBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: 300, // Adjust the scroll amount as needed
        behavior: 'smooth',
    });
});
