import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';
import ReactLogo from "../data/logo.png";

const Header = () => {
    const CustomAppBar  = styled(AppBar) ({
        backgroundColor: '#e397f9',
        color:'#17202A'
      });
      const StyledButton = styled(Button)({
        display:'flex',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px',
        alignItems:'center',
        gap:'1rem',
          marginLeft:'10px',
          color: "#273746",});

  return (
    <CustomAppBar  position="static" >
      <Toolbar >
    <  Typography component={NavLink} to="/" variant="h6" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src={ReactLogo} alt="React Logo" style={{ height: 50, marginRight: 10, borderRadius:50}} />
  
         </Typography>
        <StyledButton>
        <Button component={NavLink} to="/projects" color="inherit">Projects</Button>
        <Button component={NavLink} to="/contact" color="inherit">Contact</Button>
        <Button component={NavLink} to="/blogs" color="inherit">Blogs</Button>

        </StyledButton>
      </Toolbar>
      
  </CustomAppBar >

   
  );
}

export default Header;
