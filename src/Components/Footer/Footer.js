import React from 'react'

import "./styles.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <h1>Contactos</h1>
        <div class="contactos">
          <ul class="social-icon">
            <li><a><span class="fa fa-whatsapp" aria-hidden="true"></span> <strong>+ 57 314 8169284</strong> </a></li>
            <li><a><span class="fa fa-envelope" aria-hidden="true"></span> <strong>lida11jaramillo@hotmail.com</strong> </a></li>
            <li><a href="https://www.facebook.com/Nailu-130735667644830/"><i class="fa fa-facebook-official" aria-hidden="true"></i> <strong>@nailu</strong> </a></li>
            <li><a href="https://www.instagram.com/nailu511/"><i class="fa fa-instagram" aria-hidden="true"></i> <strong>@nailu511</strong> </a></li>
          </ul>
        </div>
        <div class="copy">
          <p>©Nailu_Project Todos los derechos reservados 2019.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
