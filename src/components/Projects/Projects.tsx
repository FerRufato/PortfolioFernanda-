import React, { useEffect } from 'react';
import {
  ProjectsSection,
  Title,
  ProjectList,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectButton,
} from './Projects.styles';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Imagem de exemplo
import ProjetoEfood from '../../assets/projeto1.jpg';
import api_de_produtos from '../../assets/api_de_produtos.jpg';
import landing_page from '../../assets/landing_page .jpg';
import dashboard from '../../assets/dashboard.jpg';

export const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ProjectsSection id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Title>Projetos</Title>
        <ProjectList>
          {/* ✅ Projeto 1 - Link Real */}
          <ProjectCard
            data-aos="fade-up"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <ProjectImage src={ProjetoEfood} alt="Projeto 1" />
            <ProjectTitle>Projeto Efood</ProjectTitle>
            <ProjectDescription>
              Aplicativo de delivery com React e Styled Components.
            </ProjectDescription>
            <ProjectButton
              href="https://projeto-md35.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Projeto
            </ProjectButton>
          </ProjectCard>

          {/* Projeto 2 */}
          <ProjectCard
            data-aos="fade-up"
            data-aos-delay="100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <ProjectImage src={api_de_produtos} alt="Projeto 2" />
            <ProjectTitle>API de Produtos</ProjectTitle>
            <ProjectDescription>
              Microserviço RESTful com Spring Boot e MongoDB.
            </ProjectDescription>
            <ProjectButton href="#" target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </ProjectButton>
          </ProjectCard>

          {/* Projeto 3 */}
          <ProjectCard
            data-aos="fade-up"
            data-aos-delay="200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <ProjectImage src={landing_page} alt="Projeto 3" />
            <ProjectTitle>Landing Page</ProjectTitle>
            <ProjectDescription>
              Landing page responsiva com HTML, CSS e JavaScript.
            </ProjectDescription>
            <ProjectButton href="#" target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </ProjectButton>
          </ProjectCard>

          {/* Projeto 4 */}
          <ProjectCard
            data-aos="fade-up"
            data-aos-delay="300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <ProjectImage src={dashboard} alt="Projeto 4" />
            <ProjectTitle>Dashboard</ProjectTitle>
            <ProjectDescription>
              Painel administrativo com gráficos usando React e Chart.js.
            </ProjectDescription>
            <ProjectButton href="#" target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </ProjectButton>
          </ProjectCard>
        </ProjectList>
      </motion.div>
    </ProjectsSection>
  );
};
