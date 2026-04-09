// Get elements for toggle and active states
const navPill = document.getElementById('navPill');
const logoToggle = document.getElementById('logoToggle');
const endToggle = document.getElementById('endToggle');
const navItems = document.querySelectorAll('.nav-item');

// Show or hide nav items
function toggleNav() {
    if (!navPill) return;
    navPill.classList.toggle('is-collapsed');
}

// Set clicked nav item as active
navItems.forEach((item) => {
    item.addEventListener('click', () => {
        navItems.forEach((btn) => btn.classList.remove('active'));
        item.classList.add('active');
    });
});

// Toggle from logo or right accent
if (logoToggle) logoToggle.addEventListener('click', toggleNav);
if (endToggle) endToggle.addEventListener('click', toggleNav);
