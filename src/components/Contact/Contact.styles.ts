import styled from 'styled-components';

export const ContactSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  text-align: center;

  /* ✅ Gradiente suave para manter continuidade visual */
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.background} 0%,
    #f9f9f9 100%
  );

  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  resize: none;
  height: 150px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #a4508b, #5f0a87);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;
