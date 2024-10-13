import React from 'react';
import '../pages/css/boxicons/css/boxicons.min.css';
import '../pages/css/main.css';
import '../pages/css/indumentaria.css';
import '../pages/css/modalCarrito.css';
import '../pages/css/clima.css';
import img1 from '../img/marcel-schreiber-iZI5qcR7f8s-unsplash.jpg';
import img2 from '../img/different_sports.jpg';
import img3 from '../img/taylor-smith-aDZ5YIuedQg-unsplash.jpg';

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-touch="true">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={img1} className="d-block w-100 carousel-item-height" alt="Balon de basquet"/>
                    <div className="carousel-caption">
                        <h5>Donde los sueños se hacen realidad</h5>
                        <p>Desde los entrenamientos hasta el juego, encuentra inspiración para superar tus límites y alcanzar nuevas alturas en el baloncesto.</p>
                    </div>
            </div>
            <div className="carousel-item">
                <img src={img2} className="d-block w-100 carousel-item-height" alt="Atleta"/>
                    <div className="carousel-caption">
                        <h5>Encuentra tu pasión</h5>
                        <p>Elige tu deporte, haz historia.</p>
                    </div>
            </div>
            <div className="carousel-item">
                <img src={img3} className="d-block w-100 carousel-item-height" alt="Zapatillas"/>
                    <div className="carousel-caption">
                        <h5>Ponte en movimiento con estilo</h5>
                        <p>Potencia tu juego con Nike.</p>
                    </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>     
  );
}

export default Carousel;
