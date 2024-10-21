import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Iaan Mesquita Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;