import React from 'react';
import MainContainer from '../components/mainContainer';
import Footer from '../components/footer';
import Header from '../components/header';
import '../main.css';

function Home() {
  return (
    <>
        <Header />
        <MainContainer text='¡Bienvenido al mundo de la acción y la pasión deportiva! Sumérgete en una experiencia única donde el sudor, la adrenalina y la emoción se combinan para desafiar tus límites y elevar tu espíritu competitivo. Desde los campos de juego hasta las pistas de carrera, nuestro sitio es tu destino para descubrir las últimas noticias, eventos y tendencias en el emocionante mundo del deporte. Únete a una comunidad apasionada de atletas, aficionados y entusiastas que comparten una sola pasión: el amor por el juego. ¿Estás listo para vivir la emoción?' />
        <Footer />
    </>
  );
}

export default Home;
