import React from 'react';
import minhaFoto from '../../assets/fotoFernanda6.jpg';

import {
  HeroSection,
  HeroContent,
  Title,
  Tag,
  Description,
  CTAButton,
  HeroImage,
} from './Hero.styles';

export const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <div>
          <h1>Fernanda Rufato</h1>

          <Tag>DESENVOLVEDORA FULL STACK</Tag>
          <Tag>FRONT-END</Tag>

          <Title>Maior aproveitamento, retenção e conversão</Title>

          <Description>
            Produzo a melhor experiência em interfaces com páginas rápidas que
            conectam com seu público e convertem.
          </Description>

          <CTAButton href="#contact">Vamos conversar</CTAButton>
        </div>

        {/* <HeroImage src={minhaFoto} alt="Minha Foto" /> */}
      </HeroContent>
    </HeroSection>
  );
};
