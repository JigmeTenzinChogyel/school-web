document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
  
    function updateNavbarBackground() {  
      if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#115c1c'; // Change to the desired color
      } else {
        navbar.style.backgroundColor = 'transparent';
      }
    }
    updateNavbarBackground();
    window.addEventListener('scroll', updateNavbarBackground);
  });
  