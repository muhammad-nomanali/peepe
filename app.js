function copyToClipboard() {
    var textArea = document.createElement("textarea");
    textArea.value = "iXbUSev5ppyZXw9FoiP7iV2D8g8y97oMVckZKtxPqob";
    document.body.appendChild(textArea);


    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    alert("Text copied to clipboard!");
}

document.addEventListener('DOMContentLoaded', function() {
    const progressBarElements = document.querySelectorAll('.progress-bar');

    const intersectionCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target.querySelector('[class^="progress-fill"]');
                const value = progressFill.getAttribute('data-value');
                progressFill.style.width = value + '%';
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(intersectionCallback, {
        root: null,
        threshold: 0.2,
    });

    progressBarElements.forEach(progressBar => {
        observer.observe(progressBar);
    });
});

// Function to handle the intersection of the target elements
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const targetElement = entry.target;
            const animationClass = targetElement.dataset.animation;

            if (animationClass) {
                targetElement.classList.add(animationClass);
                // Remove the animate-on-scroll class to prevent animation on subsequent scrolls
                targetElement.classList.remove('animate-on-scroll');
            }
        }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
};

const observer = new IntersectionObserver(handleIntersection, options);

// Observe all elements with the "animate-on-scroll" class
const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach((element) => {
    observer.observe(element);
});
