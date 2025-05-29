import React, { useState, useEffect } from 'react';
import {
  ContactSection,
  Title,
  Form,
  Input,
  TextArea,
  SubmitButton,
} from './Contact.styles';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mjkwnlae', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        setForm({ name: '', email: '', message: '' });
      } else {
        alert('Erro ao enviar. Tente novamente mais tarde.');
      }
    } catch (error) {
      alert('Erro inesperado. Verifique sua conexão.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Title>Contato</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange}
            required
            data-aos="fade-up"
          />
          <Input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
            required
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <TextArea
            name="message"
            placeholder="Sua mensagem"
            value={form.message}
            onChange={handleChange}
            required
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </SubmitButton>
        </Form>
      </motion.div>
    </ContactSection>
  );
};
