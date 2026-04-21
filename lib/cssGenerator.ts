import { LandingData } from '@/types';

export function generateCSS(data: LandingData): string {
  const colors = data.colors || { primary: '#3B82F6', secondary: '#1E40AF', accent: '#F59E0B' };
  const companyName = data.company.name.toLowerCase().replace(/\s+/g, '-');

  return `/* ========================================
   ${data.company.name} - Landing Page Styles
   Generated with Generador de Landing
   ======================================== */

:root {
  --primary: ${colors.primary};
  --primary-dark: ${colors.secondary};
  --accent: ${colors.accent};
  --dark: #1F2937;
  --light: #F9FAFB;
  --gray: #6B7280;
  --white: #FFFFFF;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --transition: all 0.3s ease;
  --radius: 8px;
  --font-main: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-main);
  line-height: 1.6;
  color: var(--dark);
  background-color: var(--white);
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
  border: 2px solid transparent;
}

.btn-primary {
  background-color: var(--primary);
  color: var(--white);
  border-color: var(--primary);
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  border-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background-color: transparent;
  color: var(--white);
  border-color: var(--white);
}

.btn-secondary:hover {
  background-color: var(--white);
  color: var(--primary);
}

.btn-outline {
  background-color: transparent;
  color: var(--primary);
  border-color: var(--primary);
}

.btn-outline:hover {
  background-color: var(--primary);
  color: var(--white);
}

.btn-lg {
  padding: 16px 40px;
  font-size: 18px;
}

.btn-block {
  width: 100%;
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--white);
  box-shadow: var(--shadow);
  z-index: 1000;
  padding: 15px 0;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 24px;
  font-weight: 800;
  color: var(--primary);
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  font-weight: 500;
  color: var(--dark);
}

.nav-links a:hover {
  color: var(--primary);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background-color: var(--dark);
  border-radius: 3px;
  transition: var(--transition);
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  color: var(--white);
  padding: 120px 20px 80px;
  position: relative;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  position: relative;
  z-index: 2;
}

.hero-badge {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero h1 {
  font-size: clamp(40px, 8vw, 72px);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: clamp(18px, 3vw, 24px);
  opacity: 0.9;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-cta {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-shape {
  position: absolute;
  bottom: -50%;
  right: -20%;
  width: 80%;
  height: 150%;
  background: radial-gradient(ellipse, rgba(255,255,255,0.1) 0%, transparent 70%);
  transform: rotate(-15deg);
}

/* Section Styles */
.section {
  padding: 100px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  background-color: var(--primary);
  color: var(--white);
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
}

.section h2 {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  color: var(--dark);
}

/* About Section */
.about {
  background-color: var(--light);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text p {
  margin-bottom: 20px;
  font-size: 18px;
  color: var(--gray);
}

.about-text a {
  color: var(--primary);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.stat-item {
  text-align: center;
  padding: 30px 20px;
  background-color: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.stat-number {
  display: block;
  font-size: 42px;
  font-weight: 800;
  color: var(--primary);
}

.stat-label {
  font-size: 14px;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Services Section */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  background-color: var(--white);
  padding: 40px 30px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
  text-align: center;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.service-icon {
  width: 70px;
  height: 70px;
  background-color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
}

.service-icon svg {
  width: 35px;
  height: 35px;
  color: var(--white);
}

.service-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: var(--dark);
}

.service-card p {
  color: var(--gray);
  font-size: 16px;
}

/* Pricing Section */
.pricing {
  background-color: var(--light);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.pricing-card {
  background-color: var(--white);
  padding: 40px 30px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
  position: relative;
  text-align: center;
}

.pricing-card.highlighted {
  border: 3px solid var(--primary);
  transform: scale(1.05);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary);
  color: var(--white);
  padding: 6px 20px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.pricing-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: var(--dark);
}

.price {
  margin-bottom: 30px;
}

.price-amount {
  font-size: 48px;
  font-weight: 800;
  color: var(--primary);
}

.features-list {
  margin-bottom: 30px;
}

.features-list li {
  padding: 12px 0;
  border-bottom: 1px solid #E5E7EB;
  color: var(--gray);
}

.features-list li:last-child {
  border-bottom: none;
}

/* Testimonials Section */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.testimonial-card {
  background-color: var(--white);
  padding: 40px 30px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  position: relative;
}

.quote-icon {
  font-size: 80px;
  color: var(--primary);
  opacity: 0.2;
  position: absolute;
  top: 20px;
  left: 25px;
  font-family: Georgia, serif;
  line-height: 1;
}

.testimonial-content {
  font-size: 18px;
  color: var(--dark);
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.author-avatar {
  width: 50px;
  height: 50px;
  background-color: var(--primary);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 700;
  color: var(--dark);
}

.author-role {
  font-size: 14px;
  color: var(--gray);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: var(--white);
  text-align: center;
}

.cta-section h2 {
  color: var(--white);
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 20px;
  opacity: 0.9;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Contact Section */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.contact-icon {
  font-size: 24px;
}

.contact-item strong {
  display: block;
  margin-bottom: 5px;
  color: var(--dark);
}

.contact-item a {
  color: var(--primary);
}

.contact-form {
  background-color: var(--white);
  padding: 40px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--dark);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #E5E7EB;
  border-radius: var(--radius);
  font-size: 16px;
  font-family: inherit;
  transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
}

/* Footer */
.footer {
  background-color: var(--dark);
  color: var(--white);
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 40px;
}

.footer-brand h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: var(--white);
}

.footer-brand p {
  color: #9CA3AF;
  max-width: 300px;
}

.footer h4 {
  font-size: 18px;
  margin-bottom: 20px;
  color: var(--white);
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  color: #9CA3AF;
}

.footer-links a:hover {
  color: var(--white);
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 700;
  transition: var(--transition);
}

.social-links a:hover {
  background-color: var(--primary);
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #9CA3AF;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .footer-brand p {
    max-width: 100%;
  }

  .social-links {
    justify-content: center;
  }

  .pricing-card.highlighted {
    transform: none;
  }

  .hero h1 {
    font-size: 40px;
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content > * {
  animation: fadeInUp 0.6s ease forwards;
}

.hero-content > *:nth-child(2) {
  animation-delay: 0.1s;
}

.hero-content > *:nth-child(3) {
  animation-delay: 0.2s;
}

.hero-content > *:nth-child(4) {
  animation-delay: 0.3s;
}`;
}