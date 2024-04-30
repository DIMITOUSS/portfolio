import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';
import ReactLogo from "../data/logo.png";

const Header = () => {
    const CustomAppBar  = styled(AppBar) ({
        backgroundColor: 'rgb(41 54 62)',
      });
      const StyledButton = styled(Button)({
        display:'flex',
        padding:'0',
        backgroundColor:'#47569366',
        boxShadow: '0 0 100px 0 rgb(0 0 0 / 10%)',
        borderRadius: '10px',
        alignItems:'center',
        border:'none ',
        gap:'1rem',
        color: "rgb(231 248 255)",});

  return (
    <CustomAppBar  position="static" >
      <Toolbar  >
    <  Typography component={NavLink} to="/" >
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
