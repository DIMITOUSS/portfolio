import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';
import ReactLogo from "../data/logo-color.png";

const Header = () => {
    const CustomAppBar  = styled(AppBar) ({
        backgroundColor: 'rgb(41 54 62)',

      });
      const StyledButton = styled(Button)({
        display:'flex',
        padding:'0',
        backgroundColor: 'rgb(41 54 62)',
        boxShadow: '0 0 100px 0 rgb(0 0 0 / 10%)',
        borderRadius: '50px',
        alignItems:'center',
        border:' 0.5px solid black',
        gap:'1rem',
        color: "rgb(231 248 255)",});
        

  return (
    <CustomAppBar  position="static" >
      <Toolbar  >
    <  Typography component={NavLink} to="/" >
          <img src={ReactLogo} alt="React Logo" style={{ width: 50, borderRadius:'50%'}} />
  
         </Typography>
        <StyledButton  >
        
        <Button style={{backgroundColor:'rgb(34 153 247)',borderRadius:'50px', }} component={NavLink} to="/projects" color="inherit"> p<i class="fa-brands fa-r-project"></i> ojects</Button>
        <Button component={NavLink} to="/contact" color="inherit">c<i class="fa-regular fa-comment"></i>ntact</Button>
        <Button component={NavLink} to="/blogs" color="inherit"><i class="fa-solid fa-blog"></i>logs</Button>
        <Button component={NavLink} to="https://bandam-b13d6.web.app/" color="inherit">3D</Button>

        </StyledButton>
      </Toolbar>
      
  </CustomAppBar >

   
  );
}

export default Header;
