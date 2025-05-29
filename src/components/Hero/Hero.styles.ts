import styled from 'styled-components';

export const HeroSection = styled.section`
  height: 100vh;
  padding: 5rem 15rem;
  background: linear-gradient(135deg, #1a1a2e, rgb(2, 6, 12));
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  gap: 2rem;

  @media (max-width: 1024px) {
    padding: 4rem 6rem;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Imagem abaixo do texto */
    text-align: center;
    padding: 3rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    font-size: 1.5rem;
  }
`;
export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const Tag = styled.span`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin: 0 0.5rem 1rem 0;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #ddd;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.95rem;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #a4508b, #5f0a87);
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const HeroImage = styled.img`
  width: 180px;
  border-radius: 70%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 150px;
    margin-top: 0;
  }
`;
