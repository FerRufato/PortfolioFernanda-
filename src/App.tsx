import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Hero } from './components/Hero/Hero';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div
        style={{
          backgroundColor: isAboutVisible ? '#ffffff' : '#1a1a2e',
          color: isAboutVisible ? '#000000' : theme.colors.text,
          transition: 'background-color 1.5s ease, color 0.5s ease',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Hero />
        <About onVisible={setIsAboutVisible} />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* Botão do WhatsApp */}
      <a
        href="https://wa.me/5513981811472?text=Olá!%20Gostaria%20de%20falar%20com%20você."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          backgroundColor: '#25D366',
          borderRadius: '50%',
          padding: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="Fale comigo no WhatsApp"
          style={{ width: '40px', height: '40px' }}
        />
      </a>
    </ThemeProvider>
  );
}

export default App;
