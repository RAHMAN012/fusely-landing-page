const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const navLinks = document.getElementById('navLinks');

// Show the menu when clicking the hamburger icon
menuIcon.addEventListener('click', () => {
  navLinks.style.display = 'flex';
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

// Hide the menu when clicking the close icon
closeIcon.addEventListener('click', () => {
  navLinks.style.display = 'none';
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
});