import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Naveed Khan</h1>
        <h2 className="text-light">MERN STACK Developer</h2>
        <h4 className="text-light">I build modern, responsive, and scalable web applications using JavaScript, React, Node.js, and MongoDB.</h4>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
