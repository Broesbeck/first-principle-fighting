// ============================================
// MOBILE NAV TOGGLE
// ============================================

// 1. Grab the elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// 2.  When hamburger is clicked...
navToggle.addEventListener('click', () => {
    // 3.  Toggle the 'active' class on the menu
    navMenu.classList.toggle('active');
});