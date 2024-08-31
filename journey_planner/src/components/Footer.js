import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'; // Ensure the CSS file is in the same directory or adjust the path if necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Kenya Railways</h3>
          <p>
            The Standard Gauge Railway (SGR) is a flagship project by the Government of Kenya as a transport component aimed at delivering Vision 2030, making Kenya a middle-income country by 2030... 
            <a href="https://example.com/about">more</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Connect with Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>0709 388 887 - Madaraka Express Passenger Service inquiries, complaints, lost & found.</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>0709 907 000, 0709 907 555 - Kenya Railways Headquarters customer care.</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p><a href="mailto:info@krc.co.ke">info@krc.co.ke</a></p>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Discover</h3>
          <ul>
            <li><a href="https://example.com/book-train">Book a Train</a></li>
            <li><a href="https://example.com/about-us">About Us</a></li>
            <li><a href="https://example.com/how-it-works">How it Works</a></li>
            <li><a href="https://example.com/benefits">Benefits</a></li>
            <li><a href="https://example.com/payments">Payments</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><a href="https://example.com/our-fleet">Our Fleet</a></li>
            <li><a href="https://example.com/faqs">FAQs</a></li>
            <li><a href="https://example.com/terms">Terms</a></li>
            <li><a href="https://example.com/privacy">Privacy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <img src="/path-to-logo/kenya-railways-logo.png" alt="Kenya Railways Logo" className="footer-logo" />
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
