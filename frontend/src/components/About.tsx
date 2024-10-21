import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f9f9f9;
`;

const BioText = styled.div`
  flex: 2;
  text-align: left;
`;

const Photo = styled.img`
    width: 200px; 
  height: auto; 
  border-radius: 50%; 
  object-fit: cover;
  margin-right: 20px;
`;

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Photo src="/my_photo.jpg" alt="Your Photo" />
      <BioText>
        <h2>About Me</h2>
        <p>Hi, I am a full-stack developer specializing in modern technologies...</p>
      </BioText>
    </AboutWrapper>
  );
};

export default About;