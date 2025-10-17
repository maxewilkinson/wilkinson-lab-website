document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');
    // Toggle menu when hamburger button is clicked
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

// Close menu when a same-page anchor link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Check if it's an anchor link for the current page
            if (this.getAttribute('href').startsWith('#')) {
                // If the menu is open, close it
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });

});