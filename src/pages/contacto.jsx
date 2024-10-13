import React from 'react';
import MainContainer from '../components/mainContainer';
import Footer from '../components/footer';
import Header from '../components/header';

function Contacto() {
  return (
    <>
      <Header />
      <MainContainer text='Escriba el mensaje que desea comunicarnos y en la brevedad nos comunicaremos con usted.' />
      <Footer />
    </>
  );
}

export default Contacto;
