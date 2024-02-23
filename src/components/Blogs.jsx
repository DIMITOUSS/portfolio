import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
const Blogs=({})=>{

    const StyledTitle=styled(Typography)({

        color:'#273746',
        fontFamily:'Shrikhand',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
    })

return(
<>
<StyledTitle>
<h1>Coming soon...</h1>
</StyledTitle>


</>
);

}
export  default Blogs