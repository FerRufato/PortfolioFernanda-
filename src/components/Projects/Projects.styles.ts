import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  font-weight: 700;
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background || '#000'};
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 900px;
  min-height: 500px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin-bottom: 1.5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary || '#fff'};
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text || '#ccc'};
  margin-bottom: 1rem;
`;

export const ProjectButton = styled.a`
  margin-top: auto;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #a4508b, #5f0a87);
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
