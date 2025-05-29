import React, { useEffect, useRef } from 'react';
import { AboutSection, Title, Text, ContactButton } from './About.styles';
import { motion } from 'framer-motion';

interface AboutProps {
  onVisible: (visible: boolean) => void;
}

export const About: React.FC<AboutProps> = ({ onVisible }) => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [onVisible]);

  return (
    <AboutSection id="about" ref={aboutRef}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Sobre mim</Title>
        <Text>
          Olá! Sou Fernanda, desenvolvedora Full Stack com formação em Análise e
          Desenvolvimento de Sistemas e certificação em Desenvolvimento Web pela
          EBAC. <br />
          <br />
          Tenho experiência em projetos pessoais e acadêmicos, utilizando
          tecnologias como React, TypeScript, Spring Boot e MongoDB. <br />
          <br />
          Apaixonada por transformar ideias em aplicações funcionais, busco
          constantemente melhorar minhas habilidades e criar soluções modernas,
          acessíveis e com boa performance.
        </Text>

        <ContactButton href="#contact">Vamos conversar</ContactButton>
      </motion.div>
    </AboutSection>
  );
};
