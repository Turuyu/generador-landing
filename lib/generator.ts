import { LandingData } from '@/types';

export function generateHTML(data: LandingData): string {
  const { company, services, pricing, testimonials } = data;
  const colors = data.colors || { primary: '#3B82F6', secondary: '#1E40AF', accent: '#F59E0B' };

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${company.description}">
  <title>${company.name} - ${company.area}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar">
    <div class="container nav-container">
      <a href="#" class="logo">${company.name}</a>
      <button class="mobile-menu-btn" aria-label="Menú">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#precios">Precios</a></li>
        <li><a href="#testimonios">Testimonios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="inicio" class="hero">
    <div class="container hero-content">
      <span class="hero-badge">${company.area}</span>
      <h1>${company.name}</h1>
      <p class="hero-subtitle">${company.description}</p>
      <div class="hero-cta">
        <a href="#contacto" class="btn btn-primary">Contáctanos</a>
        <a href="#servicios" class="btn btn-secondary">Ver Servicios</a>
      </div>
    </div>
    <div class="hero-shape"></div>
  </section>

  <!-- About Section -->
  <section id="nosotros" class="section about">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Sobre Nosotros</span>
        <h2>Conoce ${company.name}</h2>
      </div>
      <div class="about-content">
        <div class="about-text">
          <p>${company.description}</p>
          <p>En <strong>${company.name}</strong>, nos apasiona ofrecer soluciones personalizadas que se adaptan a las necesidades específicas de cada cliente. Con años de experiencia en el sector, nuestro equipo está comprometido con la excelencia.</p>
          ${company.website ? `<p>Visita nuestro sitio web: <a href="${company.website}" target="_blank">${company.website}</a></p>` : ''}
        </div>
        <div class="about-stats">
          <div class="stat-item">
            <span class="stat-number">100+</span>
            <span class="stat-label">Clientes Satisfechos</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5+</span>
            <span class="stat-label">Años de Experiencia</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">24/7</span>
            <span class="stat-label">Soporte Disponible</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="servicios" class="section services">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Nuestros Servicios</span>
        <h2>¿En qué podemos ayudarte?</h2>
      </div>
      <div class="services-grid">
        ${services.map((service, index) => `
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  ${pricing.length > 0 ? `
  <section id="precios" class="section pricing">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Planes y Precios</span>
        <h2>Elige tu plan ideal</h2>
      </div>
      <div class="pricing-grid">
        ${pricing.map((plan) => `
        <div class="pricing-card ${plan.highlighted ? 'highlighted' : ''}">
          ${plan.highlighted ? '<span class="popular-badge">Más Popular</span>' : ''}
          <h3>${plan.name}</h3>
          <div class="price">
            <span class="price-amount">${plan.price}</span>
          </div>
          <ul class="features-list">
            ${plan.features.map((feature) => `<li>✓ ${feature}</li>`).join('')}
          </ul>
          <a href="#contacto" class="btn ${plan.highlighted ? 'btn-primary' : 'btn-outline'}">Elegir Plan</a>
        </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- Testimonials Section -->
  ${testimonials.length > 0 ? `
  <section id="testimonios" class="section testimonials">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Testimonios</span>
        <h2>Lo que dicen nuestros clientes</h2>
      </div>
      <div class="testimonials-grid">
        ${testimonials.map((testimonial) => `
        <div class="testimonial-card">
          <div class="quote-icon">"</div>
          <p class="testimonial-content">${testimonial.content}</p>
          <div class="testimonial-author">
            <div class="author-avatar">
              ${testimonial.name.charAt(0)}
            </div>
            <div class="author-info">
              <span class="author-name">${testimonial.name}</span>
              <span class="author-role">${testimonial.role}</span>
            </div>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- CTA Section -->
  <section class="section cta-section">
    <div class="container">
      <h2>¿Listo para comenzar?</h2>
      <p>Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos.</p>
      <a href="#contacto" class="btn btn-primary btn-lg">Contáctanos Ahora</a>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contacto" class="section contact">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Contacto</span>
        <h2>Ponte en contacto con nosotros</h2>
      </div>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <div>
              <strong>Email</strong>
              <a href="mailto:${company.email}">${company.email}</a>
            </div>
          </div>
          ${company.phone ? `
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <div>
              <strong>Teléfono</strong>
              <a href="tel:${company.phone}">${company.phone}</a>
            </div>
          </div>
          ` : ''}
          ${company.website ? `
          <div class="contact-item">
            <span class="contact-icon">🌐</span>
            <div>
              <strong>Sitio Web</strong>
              <a href="${company.website}" target="_blank">${company.website}</a>
            </div>
          </div>
          ` : ''}
        </div>
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>${company.name}</h3>
          <p>${company.description}</p>
        </div>
        <div class="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#precios">Precios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <h4>Síguenos</h4>
          <div class="social-links">
            <a href="#" aria-label="Facebook">F</a>
            <a href="#" aria-label="Twitter">T</a>
            <a href="#" aria-label="Instagram">I</a>
            <a href="#" aria-label="LinkedIn">L</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} ${company.name}. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;
}