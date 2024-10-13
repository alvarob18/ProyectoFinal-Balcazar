import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/main.css';
import img1 from '../img/brecht-deboosere-9NPWmYOHtoU-unsplash.jpg';
import img2 from '../img/giuseppe-argenziano-lTTQ1W_vvSI-unsplash.jpg';
import img3 from '../img/jeffery-erhunse-6D2Lmtv_X8A-unsplash.jpg';
import img4 from '../img/annie-spratt-MChSQHxGZrQ-unsplash.jpg';

function Footer() {
  return (
<footer id="footer" className="footer">

<div id="dFooterDesktop" className="grid-container">
    <div className="grid-item uno">
        <Link to="/Indumentaria"><img src={img1} alt="Indumentaria"/></Link>
    </div>
    <div className="grid-item dos">
        <Link to="/zapatillas"><img src={img2} alt="Zapatillas"/></Link>
    </div>
    <div className="grid-item tres">
        <Link to="/contacto"><img src={img3} alt="Contacto"/></Link>
    </div> 
    <div className="grid-item cuatro">
        <Link to="/QuienesSomos"><img src={img4} alt="Quienes Somos"/></Link>
    </div>
</div>
  
<div id="dFooterPhone" className="footer-top">
    <div className="container">
        <div className="row">

            <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                    <h3>NFS<span>.</span></h3>
                    <p style={{ marginBottom: '8px' }}>Av 9 de julio 3750</p>
                    <p style={{ marginBottom: '40px' }}>Caba, Argentina</p>
                    <p style={{ marginBottom: '8px' }}><strong>Telefono:</strong> +54 5589 55488</p>
                    <p style={{ marginBottom: '8px' }}><strong>Email:</strong> info@gmail.com</p>

                    <div className="social-links mt-3">
                        <Link to="https://twitter.com/" className="twitter" target="_blank"><i className="bx bxl-twitter"></i></Link>
                        <Link to="https://www.facebook.com/" className="facebook" target="_blank"><i className="bx bxl-facebook"></i></Link>
                        <Link to="https://www.instagram.com/" className="instagram" target="_blank"><i className="bx bxl-instagram"></i></Link>
                        <Link to="https://www.skype.com/es/" className="google-plus" target="_blank"><i className="bx bxl-skype"></i></Link>
                        <Link to="https://www.linkedin.com/" className="linkedin" target="_blank"><i className="bx bxl-linkedin"></i></Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
                <h4 className="h4Footer">Links</h4>
                <ul>
                    <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                    <li><i className="bx bx-chevron-right"></i> <Link to="/Indumentaria">Indumentaria</Link></li>
                    <li><i className="bx bx-chevron-right"></i> <Link to="/zapatillas">Zapatillas</Link></li>
                    <li><i className="bx bx-chevron-right"></i> <Link to="/contacto">Contacto</Link></li>
                    <li><i className="bx bx-chevron-right"></i> <Link to="/QuienesSomos">Quienes Somos</Link></li>
                </ul>
            </div>

        </div>   
    </div>
</div>

<h5 className="footer-copyright">Todos los derechos reservados</h5>
</footer>
  );
}

export default Footer;
