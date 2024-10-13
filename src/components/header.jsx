import React from 'react';
import NavBar from './navBar';
import Carousel from './Carousel';
import '../main.css';
import '../pages/css/boxicons/css/boxicons.min.css';

function Header() {
  return (
    <header>
        <NavBar />
        <Carousel />     
    </header>
  );
}

export default Header;
