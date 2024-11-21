import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../config/CartContext';

function NavBar() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

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
                <div className="nav-link" onClick={toggleDropdown} style={{ cursor: "pointer", position: "relative" }}>
                  <i className="bx bx-cart"></i>
                  <span id="carrito-counter">{totalItems}</span>
                </div>
                
                {isDropdownOpen && (
                  <div className="cart-dropdown">
                    {cartItems.length === 0 ? (
                      <p>El carrito está vacío</p>
                    ) : (
                      cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                          <img src={`../src/assets/images/${item.image}`} alt={item.alt} className="cart-item-image-small" />
                          <div className="cart-item-details">
                            <div className="cart-item-info">
                              <p>{item.name}</p>
                              <p>Precio: ${item.price}</p>
                            </div>
                            <div className="cart-item-controls">
                              <button onClick={() => handleDecrement(item)} className="btn-cart">-</button>
                              <span className="quantity-display">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn-cart">+</button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                    <Link to="/checkout" className="btn btn-primary btn-checkout">Checkout</Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;