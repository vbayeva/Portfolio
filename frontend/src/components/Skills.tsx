import React, { useState } from 'react';
import styled from 'styled-components';

interface Project {
  title: string;
  description: string;
  github_url: string;
  images?: string[];
}

interface SkillDetail {
  id: number;
  name: string;
  projects: Project[];
}

interface Skill {
  id: number;
  name: string;
  icon: string;
  details: SkillDetail[];
}

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

const SkillsWrapper = styled.section`
  width: 100%;
  padding: 40px;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.main};
`;

const SkillsScroll = styled.div`
  width: 80%;
  overflow-x: auto;
  display: flex;
  padding: 20px;
  background-color: ${theme.colors.accent};
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.primary} ${theme.colors.accent};

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.accent};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary};
    border-radius: 10px;
    border: 2px solid ${theme.colors.accent};
  }
`;

const Skill = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background 0.3s ease;
  border-radius: 10px;
  width: 120px; /* Increase the width */

  img {
    margin-bottom: 10px;
    width: 70px; /* Increase image size */
  }

  h4 {
    font-size: 18px;
    color: white; 
  }

  &:hover h4 {
    color: #ffa500;
  }
`;

const SkillCard = styled.div`
  flex: 0 0 auto;
  padding: 20px;
  margin: 0 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.secondary};
  border-radius: 20px;
  width: 160px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 15px 30px rgba(233, 69, 96, 0.4);
  }

  img {
    margin-bottom: 15px;
    width: 90px;
    height: 90px;
    object-fit: contain;
  }

  h4 {
    font-size: 20px;
    color: ${theme.colors.text};
    text-align: center;
  }
`;


const SkillDetails = styled.div`
  margin-top: 40px;
  width: 80%;
  background-color: ${theme.colors.accent};
  padding: 30px;
  border-radius: 15px;
  animation: fadeIn 0.6s ease-in-out;
`;


const DetailList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;

  li {
    cursor: pointer;
    color: ${theme.colors.primary};
    margin: 15px 0;
    font-size: 20px;
    transition: color 0.3s;

    &:hover {
      color: ${theme.colors.text};
    }
  }
`;

const SkillDetailDisplay = styled.div`
  margin-top: 40px;
  width: 80%;
  background-color: ${theme.colors.accent};
  padding: 30px;
  border-radius: 15px;
  animation: fadeIn 0.6s ease-in-out;

  h3 {
    color: ${theme.colors.primary};
    font-size: 28px;
    margin-bottom: 20px;
  }

  h4 {
    color: ${theme.colors.text};
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    color: ${theme.colors.text};
    font-size: 18px;
    line-height: 1.6;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    margin-bottom: 25px;

    h5 {
      color: ${theme.colors.primary};
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  color: ${theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    } 
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ImageScroller = styled.div`
  margin-top: 20px;
  overflow-x: auto;
  display: flex;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.accent};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary};
    border-radius: 10px;
    border: 2px solid ${theme.colors.accent};
  }
`;

const ScrollerImage = styled.img`
  flex: 0 0 auto;
  width: 800px;
  height: 800px;
  margin-right: 15px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const hardcodedSkills: Skill[] = [
  {
    id: 1,
    name: 'C++ (advanced)',
    icon: '/cplusplus.png', 
    details: [
      {
        id: 1,
        name: 'Multithreading',
        projects: [
          {
            title: 'Concurrency lvl 1: Basic',
            description: 'A project that shows basic of mutex',
            github_url: 'https://github.com/vbayeva/MultithreadingBasic',
          },
          {
            title: 'Concurrency lvl 2: Logger',
            description: 'A project that shows basic of lock_guard',
            github_url: 'https://github.com/vbayeva/Logger',

          },
          {
            title: 'Concurrency lvl 3: Producer Consumer Model',
            description: 'A project that shows basic of condition_variable',
            github_url: 'https://github.com/vbayeva/ProducerConsumerModel',

          },
        ],
      },
      {
        id: 2,
        name: 'Boost',
        projects: [
        ],
      },
      {
        id: 3,
        name: 'STL',
        projects: [
        ],
      },
      {
        id: 4,
        name: 'CMake',
        projects: [
        ],
      },
      {
        id: 5,
        name: 'CTest',
        projects: [
        ],
      },
      {
        id: 6,
        name: 'Google profobuf',
        projects: [
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Python (advanced)',
    icon: '/Python.png',
    details: [
      {
        id: 1,
        name: 'Business applications',
        projects: [
          {
            title: 'Business applications',
            description: `During my work at Intel I am writing tools and applications using Python.
            I cannot share the code, but here's a little application made with tkinter to show something :)`,
            github_url: 'https://github.com/vbayeva/Text-Editor',
            images: ['/calculator.png']
          },
        ],
      },
      {
        id: 2,
        name: 'Flask',
        projects: [
          {
            title: 'Projects made in Flask',
            description: `Websites that are made using Flask framework in Python
Features: Login and registation, 
Weather data for provided city, 
Quiz with 5 questions about AI in Python.
, Result table for all users.
, User's personal score in the current quiz and for all time`,
            github_url: 'https://github.com/vbayeva/flask-quiz',
            images: ['/quiz.png'],
          },
        ],
      },
      {
        id: 3,
        name: 'Django',
        projects: [
          {
            title: `Online translator`,
            description: `Online translator which uses web scrapping to make a translation with context.`,
            github_url: 'https://github.com/vbayeva/Online-Translator-With-Context',
            images: ['/translator.jpg'],
          },
          {
            title: `Finmaster`,
            description: `A mobile app (react native frontend) which helps parents to teach their children financial literacy.`,
            github_url: '',
            images: ['/finmaster.png'],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Unity3D (advanced)',
    icon: '/unity.png',
    details: [
      {
        id: 2,
        name: 'Data Science',
        projects: [
          {
            title: 'Data Analysis Project',
            description: 'A Python project for analyzing large datasets.',
            github_url: 'https://github.com/your-repo/data-analysis-project',
            images: [''],

          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Kotlin (intermediate)',
    icon: '/Kotlin.png',
    details: [
      {
        id: 2,
        name: 'Data Science',
        projects: [
          {
            title: 'Data Analysis Project',
            description: 'A Python project for analyzing large datasets.',
            github_url: 'https://github.com/your-repo/data-analysis-project',
            images: [''],

          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Unreal Engine (beginner)',
    icon: '/Python.png',
    details: [
      {
        id: 2,
        name: 'Data Science',
        projects: [
          {
            title: 'Data Analysis Project',
            description: 'A Python project for analyzing large datasets.',
            github_url: 'https://github.com/your-repo/data-analysis-project',
            images: [''],

          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Other',
    icon: '/VSCode.png',
    details: [
      {
        id: 1,
        name: 'Git',
        projects: [
          {
            title: 'Github',
            description: 'Advanced version control usage. Basic repo management, GitHub pages',
            github_url: '',
            images: [''],

          },
          {
            title: 'Gitlab',
            description: 'A bit of CI/CD, too. PRs, code review',
            github_url: '',
            images: [''],

          },
        ],
      },
      {
        id: 2,
        name: 'IDE',
        projects: [
          {
            title: 'VS Code',
            description: '...with lots of plugins',
            github_url: '',
            images: [''],

          },
          {
            title: 'Visual Studio',
            description: 'I can use newest version as well as the older one (I\'m taking about 17.0)',
            github_url: '',
            images: [''],

          },
          {
            title: 'Jetbrains stack',
            description: 'CLion, Pycharm, Rider',
            github_url: '',
            images: [''],

          },
        ],
      },
      {
        id: 3,
        name: 'Tools',
        projects: [
          {
            title: 'Jira',
            description: 'For project management and agile',
            github_url: '',
            images: [''],

          },
          {
            title: 'Miro',
            description: 'For project management and brainstorming',
            github_url: '',
                        images: [''],

          },
          {
            title: 'MS Office & Teams & Outlook',
            description: 'Even excel, yes',
            github_url: '',
                        images: [''],

          },
          {
            title: 'Adobe Photoshop, Illustrator, Premier Pro',
            description: 'Used in my personal projects',
            github_url: '',
                        images: [''],

          },
        ],
      },
      {
        id: 4,
        name: 'Operational Systems',
        projects: [
          {
            title: 'Windows',
            description: 'Advanced user perspective, cmds, batch files',
            github_url: '',
                        images: [''],

          },
          {
            title: 'Linux',
            description: 'User and server perspective',
            github_url: '',
                        images: [''],

          },
        ],
      },
    ],
  },
];
const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedDetail, setSelectedDetail] = useState<SkillDetail | null>(null);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setSelectedDetail(null);
  };

  const handleDetailClick = (detail: SkillDetail) => {
    setSelectedDetail(detail);
  };

  return (
    <SkillsWrapper>
      <style>{fadeIn}</style>
      <Title>My Skills</Title>
      <SkillsScroll>
        {hardcodedSkills.length > 0 ? (
          hardcodedSkills.map((skill) => (
            <SkillCard key={skill.id} onClick={() => handleSkillClick(skill)}>
              <img src={`${process.env.PUBLIC_URL + skill.icon}`} alt={skill.name} />
              <h4>{skill.name}</h4>
            </SkillCard>
          ))
        ) : (
          <p>No skills available.</p>
        )}
      </SkillsScroll>

      {selectedSkill && (
        <>
          <SkillDetails>
            <h3>{selectedSkill.name} Details</h3>
            <DetailList>
              {selectedSkill.details.map((detail) => (
                <li key={detail.id} onClick={() => handleDetailClick(detail)}>
                  {detail.name}
                </li>
              ))}
            </DetailList>
          </SkillDetails>

          {selectedDetail && (
            <SkillDetailDisplay>
              <h3>{selectedDetail.name}</h3>
              {selectedDetail.projects.map((project) => (
                <div key={project.title}>
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  {project.github_url && (
                    <p>
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                        GitHub Link
                      </a>
                    </p>
                  )}
                  {project.images && project.images.length > 0 && (
                    <ImageScroller>
                      {project.images.map((imageUrl, index) => (
                        <ScrollerImage
                          key={index}
                          src={`${process.env.PUBLIC_URL + imageUrl}`}
                          alt={`${project.title} screenshot ${index + 1}`}
                        />
                      ))}
                    </ImageScroller>
                  )}
                </div>
              ))}
            </SkillDetailDisplay>
          )}
        </>
      )}
    </SkillsWrapper>
  );
};

export default Skills;