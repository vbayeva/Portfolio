import React from 'react';
import styled from 'styled-components';

const theme = {
  colors: {
    background: '#1A1A2E',
    primary: '#E94560',
    secondary: '#0F3460',
    text: '#FFFFFF',
    accent: '#16213E',
  },
  fonts: {
    main: "'Poppins', sans-serif",
    code: "'Source Code Pro', monospace",
  },
};

const AboutWrapper = styled.section`
  width: 100%;
  padding: 60px 20px;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.main};
`;

const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 30px;
  border: 5px solid ${theme.colors.primary};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const BioText = styled.div`
  text-align: center;
  max-width: 800px;

  h2 {
    font-size: 36px;
    color: ${theme.colors.primary};
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    font-size: 18px;
    line-height: 1.8;
    color: ${theme.colors.text};
    margin-bottom: 20px;
  }
`;

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Photo src={process.env.PUBLIC_URL + '/my_photo.jpg'} alt="My Photo" />
      <BioText>
        <h2>Hi! I'm Viola :)</h2>
        <p>
          I’m a passionate programmer with a deep love for crafting innovative solutions and bringing ideas to life through code. To me, it’s like an art form. With 4 years of hands-on experience, I’ve immersed myself in a variety of technologies, mastering C++, Python, and Unity along the way.
        </p>
        <p>
          Throughout my journey, I’ve had the honor of contributing to cutting-edge projects at Intel, collaborating with dynamic teams as a game developer, and in my free time, I create my own projects for fun and to continuously sharpen my skills as a coder.
        </p>
        <p>
          I hold a bachelor’s degree in Computer Science with a specialization in game development. Beyond coding, I also enjoy creating 2D and 3D art, and I share my passions through YouTube videos.
        </p>
      </BioText>
    </AboutWrapper>
  );
};

export default About;