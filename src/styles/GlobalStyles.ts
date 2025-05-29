import { HTMLMotionProps, motion } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes, RefAttributes } from 'react';
import {
  createGlobalStyle,
  DefaultTheme,
  FastOmit,
  Interpolation,
} from 'styled-components';

// Extend DefaultTheme to include colors
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: Interpolation<
        FastOmit<
          DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
          never
        >
      >;
      accent: Interpolation<
        FastOmit<
          Omit<HTMLMotionProps<'a'>, 'ref'> & RefAttributes<HTMLAnchorElement>,
          never
        >
      >;
      background: string;
      text: string;
    };
  }
}

export const GlobalStyle = createGlobalStyle`
  /* ✅ Scroll suave para toda a página */
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    padding-top: 80px;

    /* ✅ Suaviza transições de cor e background se forem alteradas dinamicamente */
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
