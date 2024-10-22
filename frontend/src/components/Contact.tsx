import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// Theme object for consistency
const theme = {
  colors: {
    background: '#0F3460',
    primary: '#E94560',
    secondary: '#16213E',
    text: '#FFFFFF',
    accent: '#1A1A2E',
  },
  fonts: {
    main: "'Poppins', sans-serif",
    code: "'Source Code Pro', monospace",
  },
};

const ContactWrapper = styled.footer`
  width: 100%;
  padding: 40px 20px;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.text};
  text-align: center;
  font-family: ${theme.fonts.main};
  position: relative;
`;

const Title = styled.h3`
  font-size: 28px;
  color: ${theme.colors.primary};
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ContactInfo = styled.p`
  font-size: 18px;
  margin: 10px 0;

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${theme.colors.text};
      text-decoration: underline;
    }
  }
`;

const ContactIcons = styled.div`
  margin-top: 30px;

  a {
    margin: 0 15px;
    color: ${theme.colors.primary};
    font-size: 30px;
    transition: color 0.3s;

    &:hover {
      color: ${theme.colors.text};
    }
  }
`;

const FooterNote = styled.p`
  margin-top: 40px;
  font-size: 14px;
  color: ${theme.colors.text};
  opacity: 0.6;
`;

const Contact: React.FC = () => {
  return (
    <ContactWrapper>
      <Title>Contact Me</Title>
      <ContactInfo>
        <a href="mailto:violetta.bayeva@gmail.com">violetta.bayeva@gmail.com</a>
      </ContactInfo>
      <ContactIcons>
        <a href="https://www.linkedin.com/in/vbayeva/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/vbayeva" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:violetta.bayeva@gmail.com">
          <FaEnvelope />
        </a>
      </ContactIcons>
      <FooterNote>© 2024 Viola Bayeva. All rights reserved.</FooterNote>
    </ContactWrapper>
  );
};

export default Contact;