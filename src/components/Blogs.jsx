import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import './style.css'
const Blogs=({})=>{

    const StyledTitle=styled(Typography)({

        color:'#273746',
        fontFamily:'Shrikhand',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
    })

return(
<div className="coming-soon-container">
      <h1 className="coming-soon-text">Coming Soon!</h1>
      <div className="animation-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
);

}
export  default Blogs