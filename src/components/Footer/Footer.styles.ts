import { JSX } from 'react/jsx-runtime';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #f9f9f9;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const Links = styled.nav`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

export const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #f9f9f9;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  color: #000;
  transition: color 0.2s;
  font-size: 2.5rem;

  &:hover {
    transform: scale(1.05);
  }
`;
