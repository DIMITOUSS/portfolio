import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'rgb(41 54 62)', color: 'white', py: 2, px: 3 }}>
      <Typography variant="body1">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Built with React, Material-UI, and React Slick
        and More.
      </Typography>
      <Typography variant="body2">
        Designed by Oussama .
      </Typography>
    
    </Box>
  );
};

export default Footer;
