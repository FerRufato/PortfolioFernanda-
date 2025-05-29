import styled from 'styled-components';

export const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #000c0c; /* Dark background for contrast */

  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 2rem;
  font-weight: 700;
  color: #fff;
`;

export const Text = styled.p`
  max-width: 800px;
  font-size: 1.25rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const ContactButton = styled.a`
  display: inline-block;
  margin-top: 2.5rem;
  padding: 0.85rem 2rem;
  background: linear-gradient(90deg, #a4508b, #5f0a87);
  ${({ theme }) => theme.colors.primary}
  );
  color: #fff;
  font-size: 1rem;

  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
