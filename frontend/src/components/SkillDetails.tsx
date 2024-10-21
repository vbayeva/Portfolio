import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

interface Project {
  title: string;
  description: string;
  github_url: string;
}

interface Skill {
  id: number;
  name: string;
  description: string;
  why: string;
  where: string;
  projects: Project[];
}

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  margin-top: 20px;
`;

const Section = styled.div`
  width: 45%;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Projects = styled.div`
  margin-top: 20px;
  img {
    width: 100%;
    height: auto;
  }
`;

const SkillDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get skill ID from the URL
  const [skill, setSkill] = useState<Skill | null>(null);

  useEffect(() => {
    axios.get(`/api/skills/${id}/`).then((response) => {
      setSkill(response.data);
    });
  }, [id]);

  if (!skill) {
    return <div>Loading...</div>;
  }

  return (
    <DetailWrapper>
      <Section>
        <h2>{skill.name}</h2>
        <h3>Why?</h3>
        <p>{skill.why}</p>
        <h3>Where?</h3>
        <p>{skill.where}</p>
      </Section>

      <Section>
        <h3>Projects</h3>
        {skill.projects.map((project) => (
          <Projects key={project.title}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.github_url}>View on GitHub</a>
          </Projects>
        ))}
      </Section>
    </DetailWrapper>
  );
};

export default SkillDetails;