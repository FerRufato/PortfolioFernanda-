import React, { useState, useEffect } from 'react';
import {
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  MenuToggle,
  NavWrapper,
} from './Header.styles';

export const Header: React.FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  return (
    <HeaderContainer show={show}>
      <Logo href="#hero">Desenvolvedora Full Stack</Logo>

      <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>☰</MenuToggle>

      <NavWrapper isOpen={menuOpen}>
        <Nav>
          <NavLink href="#about">Sobre mim</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </Nav>
      </NavWrapper>
    </HeaderContainer>
  );
};
