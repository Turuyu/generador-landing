export function generateJS(): string {
  return `/* ========================================
   ${'company.name'} - Landing Page Script
   Generated with Generador de Landing
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
  }

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name')?.value;
      const email = document.getElementById('email')?.value;
      const message = document.getElementById('message')?.value;
      
      if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
        return;
      }
      
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un email válido.');
        return;
      }
      
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
      contactForm.reset();
    });
  }

  const navLinksItems = document.querySelectorAll('.nav-links a');
  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    });
  });

  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card, .stat-item');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;
      if (isVisible && !el.classList.contains('animated')) {
        el.classList.add('animated');
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };

  const style = document.createElement('style');
  style.textContent = \`
    .service-card, .pricing-card, .testimonial-card, .stat-item {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .service-card.animated, .pricing-card.animated, .testimonial-card.animated, .stat-item.animated {
      opacity: 1;
      transform: translateY(0);
    }
  \`;
  document.head.appendChild(style);

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
});`;
}