import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/boxicons/css/boxicons.min.css';
import '../pages/css/main.css';
import '../pages/css/indumentaria.css';
import '../pages/css/modalCarrito.css';
import '../pages/css/clima.css';

function NavBar() {
  return (
    <div className="items-menu">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NFS</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className='nav-link active' aria-current='page' to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className='nav-link' to="/Indumentaria">Indumentaria</Link>
                    </li>
                    <li className="nav-item">
                      <Link className='nav-link' to="/zapatillas">Zapatillas</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Sobre nosotros
                        </Link>
                        <ul className="dropdown-menu">
                          <li><Link className='dropdown-item' to="/contacto">Contacto</Link></li>
                          <li><Link className='dropdown-item' to="/QuienesSomos">Quienes somos</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link id="cart-icon" to="/" className="nav-link">
                            <i className="bx bx-cart"></i>
                            <span id="carrito-counter">0</span>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                    <button id="vaciar-carrito" className="btn btn-danger">
                        <i className="bi bi-trash"></i> Vaciar Carrito
                    </button>
                    </li> */}
                </ul>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
