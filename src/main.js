// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Scroll suave para los enlaces de navegación
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Compensar la altura del navbar
          behavior: 'smooth'
        });
      }
    });
  });
});