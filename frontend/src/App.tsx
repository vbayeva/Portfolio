import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <About />
      <Skills /> {/* Skills section comes after About */}
      <Contact /> {/* Contact section is at the bottom */}
    </AppWrapper>
  );
};

export default App;