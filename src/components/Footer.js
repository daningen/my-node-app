import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';
import logo from '../images/centido/centido-logo-2.jpg';

function Footer() {
  return (
    
    <footer class="footer-distributed">
      <div class="border"></div>
      <p></p>
      <div class="footer-left">
      
      <Link to="/" className="logo">
  <img src={logo} alt="Centido Logo 2" style={{ maxWidth: '100px' }} />
</Link>

        <p class="footer-links">
          <a href="#" class="link-1">Home</a>
          <a href="#">Blog</a>
          <a href="#">Pris</a>
          <a href="#">Om oss</a>
          <a href="#">Frågor</a>
          <a href="#">Kontakt</a>
        </p>
        <p class="footer-company-name">Centido &copy; 2023</p>
      </div>
      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>Stora Nygatan</span> Stockholm, Sverige</p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p>+46 70 793 32 99</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:info@myapp.com">niklas.eklund@centido.com</a></p>
        </div>
      </div>
      <div class="footer-right">
        <p class="footer-company-about">
          <span>Om Centido</span>
          Vi erbjuder omfattande försäkringslösningar skräddarsydda för att möta våra kunders unika behov.
        </p>
        <div class="footer-icons">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
