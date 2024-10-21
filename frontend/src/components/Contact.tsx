import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.footer`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Contact: React.FC = () => {
  return (
    <ContactWrapper>
      <h3>Contact Me</h3>
      <p>Email: <a href="mailto:violetta.bayeva@gmail.com">violetta.bayeva@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/vbayeva/" target="_blank" rel="noopener noreferrer">My Linkedin</a></p>
      <p>GitHub: <a href="https://github.com/vbayeva" target="_blank" rel="noopener noreferrer">My GitHub Profile</a></p>
    </ContactWrapper>
  );
};

export default Contact;