import React from 'react';
import '../css/footer.css';

function Footer() {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>Cen<span>tido</span></h3>
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
          <span>Om företaget</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
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
