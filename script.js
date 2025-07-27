// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Welile Website Loaded!');

});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Welile Website Loaded!');

    // --- Scroll-to-Top Button functionality ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollToTopBtn.style.display = 'block';
            scrollToTopBtn.style.opacity = '1'; // Fade in
        } else {
            scrollToTopBtn.style.opacity = '0'; // Fade out
            // Using a timeout to ensure display: none happens after fade out
            setTimeout(() => {
                scrollToTopBtn.style.display = 'none';
            }, 300);
        }
    });

    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll effect
        });
    });

    // --- Smooth Scrolling for Internal Anchors ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Get header height if it's sticky to offset scroll position
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;

                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerHeight - 20; // -20 for extra padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Dynamic Header Styling on Scroll (Optional) ---
    const header = document.querySelector('header');
    const scrollThreshold = 50; // Pixels scrolled before header style changes

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});