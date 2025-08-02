// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            if (mobileMenu.classList.contains('h-0')) {
                mobileMenu.classList.remove('h-0');
                mobileMenu.classList.add('h-screen');
            } else {
                mobileMenu.classList.remove('h-screen');
                mobileMenu.classList.add('h-0');
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('h-screen');
            mobileMenu.classList.add('h-0');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('py-2');
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('py-2');
                header.classList.remove('shadow-lg');
            }
        });
    }
});