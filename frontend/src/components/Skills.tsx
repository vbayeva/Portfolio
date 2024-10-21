import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

interface Project {
  title: string;
  description: string;
  github_url: string;
  image: string;
}

interface SkillDetail {
  id: number;
  name: string;
  why: string;
  where: string;
  projects: Project[];
}

interface Skill {
  id: number;
  name: string;
  icon: string;
  details: SkillDetail[];
}

const SkillsWrapper = styled.section`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsScroll = styled.div`
  width: 70%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
`;

const Skill = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.3s ease;

  &:hover {
    background-color: #ececec;
  }

  img {
    margin-right: 10px;
    width: 50px;
  }
`;

const SkillDetails = styled.div`
  margin-top: 20px;
  width: 70%;
`;

const DetailList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    cursor: pointer;
    text-decoration: underline;
    color: #007bff;
    margin: 5px 0;

    &:hover {
      color: #0056b3;
    }
  }
`;

const SkillDetailDisplay = styled.div`
  margin-top: 20px;
`;

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedDetail, setSelectedDetail] = useState<SkillDetail | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/skills/');
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setSelectedDetail(null); // Reset detail when switching skills
  };

  const handleDetailClick = (detail: SkillDetail) => {
    setSelectedDetail(detail);
  };

  return (
    <SkillsWrapper>
      <h2>My Skills</h2>
      <SkillsScroll>
        {skills.length > 0 ? (
          skills.map((skill) => (
            <Skill key={skill.id} onClick={() => handleSkillClick(skill)}>
              <img src={`${skill.icon}`} alt={skill.name} />
              <h4>{skill.name} Details</h4>
            </Skill>
          ))
        ) : (
          <p>Loading skills...</p>
        )}
      </SkillsScroll>

      {selectedSkill && (
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
      )}

      {selectedDetail && (
        <SkillDetailDisplay>
          <h3>{selectedDetail.name}</h3>
          <h4>Why?</h4>
          <p>{selectedDetail.why}</p>
          <h4>Where?</h4>
          <p>{selectedDetail.where}</p>
          <h4>Projects</h4>
          {selectedDetail.projects.length > 0 ? (
            selectedDetail.projects.map((project) => (
              <div key={project.title}>
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                  GitHub Link
                </a>
              </div>
            ))
          ) : (
            <p>No projects available for this detail.</p>
          )}
        </SkillDetailDisplay>
      )}
    </SkillsWrapper>
  );
};

export default Skills;