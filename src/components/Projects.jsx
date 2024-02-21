import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const projects = [
  {
    title: 'Kasa',
    description: 'A cool project built with React and Sass.',
    imageUrl: '/assets/kasa.png',
  },
    {
      title: 'Oh MyFood',
      description: 'A website for managing the restaurents Built with Sass and HTML contain many animations .',
      imageUrl: '/assets/ohmyfood.png',
    },
    {
        title: 'Booki',
        description: 'A website for A travel Agency built with css and html .',
        imageUrl: '/assets/booki.png',
      },
        {
          title: 'City Riding',
          description: 'My first Project ever on My learning Path it was Like My first steps to web developement.',
          imageUrl: '/assets/cityriding.png',
        },
];

const Projects = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom sx={{ marginBottom: '2rem' }}>
        My Projects
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardContent>
                <img src={project.imageUrl} alt={project.title} style={{ maxWidth: '100%', height: 'auto' }} />
                <Typography variant="h5" sx={{ marginTop: '1rem' }}>{project.title}</Typography>
                <Typography sx={{ marginTop: '0.5rem' }}>{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};


export default Projects;
