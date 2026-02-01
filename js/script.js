// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
            // Add a class for better styling control instead of inline styles in production
            nav.classList.toggle('active');
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
