import React from 'react';
import {
  FooterContainer,
  Links,
  FooterLink,
  SocialIcons,
  SocialLink,
} from './Footer.styles';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© 2025 Fernanda Rufato. Todos os direitos reservados.</p>

      <Links>
        <FooterLink href="#about">Sobre mim</FooterLink>
        <FooterLink href="#projects">Projetos</FooterLink>
        <FooterLink href="#contact">Contato</FooterLink>
      </Links>

      <SocialIcons>
        <SocialLink
          href="https://www.linkedin.com/in/fernanda-rufato/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {React.createElement(FaLinkedin as React.ElementType)}
        </SocialLink>

        <SocialLink
          href="https://github.com/FerRufato"
          target="_blank"
          rel="noopener noreferrer"
        >
          {React.createElement(FaGithub as React.ElementType)}
        </SocialLink>
      </SocialIcons>
    </FooterContainer>
  );
};
