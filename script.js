// function isOutOfViewport(element) {
//     const rect = element.getBoundingClientRect();
    
//     return (
//         rect.bottom < 0 ||
//         rect.right < 0 ||
//         rect.left > window.innerWidth ||
//         rect.top > window.innerHeight
//     );
// }

// // Usage
// const myElement = document.getElementById('navigation');
// console.log(isOutOfViewport(myElement)); // true if out of viewport

//continuous checks for viewport not being visible
var navigationOutOfView = false;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Only proceed if the intersection ratio crosses meaningful thresholds
        const isOutOfView = entry.intersectionRatio < 0.1; // 10% visibility threshold
        
        entry.target.classList.toggle('outOfBounds--Nav', isOutOfView);
        console.log(isOutOfView);
        
    });
}, {
    threshold: [0, 0.1, 0.9, 1], // Multiple thresholds for smoother transitions
    rootMargin: '-50px 0px 0px 0px' // Top margin creates a "buffer zone"
});

const target = document.getElementById('navigation');
observer.observe(target);

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         entry.target.classList.toggle('outOfBounds--Nav', !entry.isIntersecting);
        
//         // Optional: Add data attribute for debugging
//         entry.target.dataset.inViewport = entry.isIntersecting;
//     });
// }, {
//     threshold: 0.01, // Better than 0 to account for rounding errors
//     rootMargin: '20px' // Trigger 20px before actually leaving viewport
// });

// // Usage:
// const navElement = document.querySelector('.navigation');
// observer.observe(navElement);