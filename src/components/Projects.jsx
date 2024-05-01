import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Collapse, IconButton } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import styled, { keyframes } from 'styled-components';
import jsonData from '../data/data.json';


const bounceAnimation = keyframes`
  0% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
`;

const AnimatedCard = styled(Card)`
  animation: ${bounceAnimation} 3s infinite;
  background-color: #f0f0f0; /* Light gray background color */
  border-radius: 10px; /* Rounded corners */
  padding: 20px; 
`;

const StyledTitle = styled(Typography)`
  margin-top: 1rem;
  font-weight: bold; /* Bold font weight */
`;

const StyledList = styled.ul`
  margin-top: 0.5rem;
  list-style-type: none; /* Remove bullets from the list items */
`;

const StyledListItem = styled.li`
  margin-bottom: 0.5rem;
  background-color:rgb(171 205 255);
  border-radius: 10px;
  padding: 10px;
  font-family:'Shrikhand';
  
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    if (jsonData && jsonData.projects) {
      setProjects(jsonData.projects);
    }
  }, []);

  const handleExpandClick = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <Container>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <AnimatedCard sx={{ maxWidth: 300 }}>
              <CardContent>
                <img  src={project.imageUrl} alt={project.name} style={{ maxWidth: '100%', height: 'auto' }} />
                <a  style={{textDecoration:'none',fontFamily:'Shrikhand',fontSize:18}} href={project.link} target='_blank'>  Visit Website           </a >

                <StyledTitle variant="h5">{project.name}</StyledTitle>
                <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>{project.presentation}</Typography>
                <IconButton aria-label="expand more" onClick={() => handleExpandClick(index)}>
                  <ExpandMore />
                </IconButton>
                <Collapse in={expandedProject === index} timeout="auto" unmountOnExit>
                  <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Objectifs:</Typography>
                  <StyledList style={{ backgroundColor: '', padding: '10px', borderRadius: '5px' }}>
                    {project.objectives && project.objectives.map((objective, i) => (
                      <StyledListItem key={i}>{objective}</StyledListItem>
                    ))}
                  </StyledList>
                  <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Technologies:</Typography>
                  <StyledList style={{ backgroundColor: 'rgb(221 221 221)', borderRadius: '5px' }}>

                    {project.technologies && project.technologies.map((tools, i) => (
                      <StyledListItem   key={i}>{tools}</StyledListItem>
                    ))}
                  </StyledList>
                </Collapse>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
