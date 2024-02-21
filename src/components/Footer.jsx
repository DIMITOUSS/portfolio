import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2, px: 3 }}>
      <Typography variant="body1">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Built with React, Material-UI, and React Slick
        and More.
      </Typography>
      <Typography variant="body2">
        Designed by Oussama Kechairi.
      </Typography>
      <Typography variant="body2">
        <Link href="https://github.com/your-username/your-portfolio" target="_blank" rel="noopener">
          View on GitHub
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
