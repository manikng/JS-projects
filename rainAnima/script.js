document.addEventListener('DOMContentLoaded', function() {
    const rain = document.querySelector('.rain');
    for (let i = 0; i < 200; i++) {
        const drop = document.createElement('div');
        const size = Math.random() * 5 + 2; // Random size between 2px and 7px
        const duration = Math.random() * 0.5 + 0.5; // Random duration between 0.5s and 1s
        const delay = Math.random() * 5; // Random delay up to 5s

        drop.style.width = `${size}px`;
        drop.style.height = `${size * 20}px`; // Height is proportional to width
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${duration}s`;
        drop.style.animationDelay = `${delay}s`;

        rain.appendChild(drop);
    }
});
