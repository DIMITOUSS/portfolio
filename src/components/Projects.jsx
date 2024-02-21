import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const projects = [
  {
    title: 'Project 1',
    description: 'A cool project description goes here.',
    imageUrl: '/assets/kasa.png',
  },
    {
      title: 'Project 1',
      description: 'A cool project description goes here.',
      imageUrl: '/assets/ohmyfood.png',
    },
    {
        title: 'Project 1',
        description: 'A cool project description goes here.',
        imageUrl: '/assets/booki.png',
      },
        {
          title: 'Project 1',
          description: 'A cool project description goes here.',
          imageUrl: '/assets/cityriding.png',
        },
];

const Projects = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <img src={project.imageUrl} alt={project.title} />
                <Typography variant="h5">{project.title}</Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
