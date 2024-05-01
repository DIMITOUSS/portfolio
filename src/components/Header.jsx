import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';
import ReactLogo from "../data/logo.webp";

const Header = () => {
    const CustomAppBar  = styled(AppBar) ({
        backgroundColor: 'rgb(41 54 62)',
      });
      const StyledButton = styled(Button)({
        display:'flex',
        padding:'0',
        backgroundColor: 'rgb(41 54 62)',
        boxShadow: '0 0 100px 0 rgb(0 0 0 / 10%)',
        borderRadius: '10px',
        alignItems:'center',
        border:' 0.5px solid black',

        gap:'1rem',
        color: "rgb(231 248 255)",});

  return (
    <CustomAppBar  position="static" >
      <Toolbar  >
    <  Typography component={NavLink} to="/" >
          <img src={ReactLogo} alt="React Logo" style={{ height: 50, marginRight: 10, borderRadius:50}} />
  
         </Typography>
        <StyledButton >
        
        <Button style={{backgroundColor:'rgb(34 153 247)',}} component={NavLink} to="/projects" color="inherit"> <i class="fa-brands fa-r-project"></i> </Button>
        <Button component={NavLink} to="/contact" color="inherit"><i class="fa-regular fa-comment"></i></Button>
        <Button component={NavLink} to="/blogs" color="inherit"><i class="fa-solid fa-blog"></i></Button>

        </StyledButton>
      </Toolbar>
      
  </CustomAppBar >

   
  );
}

export default Header;
