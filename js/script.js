// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // Toggle the active class which controls visibility in CSS
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

    // Dynamic Mobile CTA Button
    const navList = document.querySelector('.nav-list');
    const headerBtn = document.querySelector('.header-actions .btn');

    if (navList && headerBtn) {
        if (!navList.querySelector('.mobile-cta-item')) {
            const li = document.createElement('li');
            li.className = 'mobile-cta-item';
            // Clone the button
            const btnClone = headerBtn.cloneNode(true);
            btnClone.style.marginTop = '10px';
            btnClone.style.textAlign = 'center';
            btnClone.classList.remove('btn-primary');
            btnClone.classList.add('btn-primary'); // Ensure class persists logic
            // Actually, keep styles simple.

            li.appendChild(btnClone);
            navList.appendChild(li);
        }
    }
});
