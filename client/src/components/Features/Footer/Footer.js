import React from "react";
import styled from 'styled-components';
// import "./Footer.css";
// import Typography from "@material-ui/core/Typography";

var StyledFooter =  styled.div`
background-color: #3f50b5;
border-top: 1px solid #E7E7E7;
text-Align: center;
padding: 15px;
position: fixed;
left: 0;
bottom: 0;
height: 10px;
width: 100%;
color: white;
`


function Footer() {
    return (
        <div>
            <StyledFooter>Worksheet Generator - 2019  
            </StyledFooter>
        </div>
    )
}

export default Footer