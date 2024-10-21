import axios from 'axios';

export const fetchSkills = async () => {
  const response = await axios.get('http://localhost:8080/api/skills/');
  return response.data;
};

export const fetchProjects = async (skillId: number) => {
  const response = await axios.get(`http://localhost:8080/api/skills/${skillId}/projects/`);
  return response.data;
};