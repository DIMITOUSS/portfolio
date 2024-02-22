import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const projects = [
  {
    title: 'Kasa',
    description: 'A cool project built with React and Sass.',
    imageUrl: '/assets/kasa.png',
  },
  {
    title: 'Oh MyFood',
    description: 'A website for managing the restaurants built with Sass and HTML containing many animations.',
    imageUrl: '/assets/ohmyfood.png',
  },
  {
    title: 'Booki',
    description: 'A website for a travel agency built with CSS and HTML.',
    imageUrl: '/assets/booki.png',
  },
  {
    title: 'City Riding',
    description: 'My first project ever on my learning path. It was like my first steps to web development.',
    imageUrl: '/assets/cityriding.png',
  },
];

const bounceAnimation = keyframes`
0%, 7% {
  transform: rotateZ(0);
}
15% {
  transform: rotateZ(-15deg);
}
20% {
  transform: rotateZ(10deg);
}
25% {
  transform: rotateZ(-10deg);
}
30% {
  transform: rotateZ(6deg);
}
35% {
  transform: rotateZ(-4deg);
}
40%, 100% {
  transform: rotateZ(0);
}

`;

const AnimatedCard = styled(Card)`
  animation: ${bounceAnimation} 3s infinite;
`;

const Projects = () => {
  return (
    <Container>
   
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <AnimatedCard sx={{ maxWidth: 300 }}>
              <CardContent>
                <img src={project.imageUrl} alt={project.title} style={{ maxWidth: '100%', height: 'auto' }} />
                <Typography variant="h5" sx={{ marginTop: '1rem' }}>{project.title}</Typography>
                <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>{project.description}</Typography>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
