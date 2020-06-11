import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    margin-top: auto;
    background: linear-gradient(90deg, #FEB80A 0%, #7FD13B 100%);
    padding: 60px 50px;
    
    h1{
        margin: 0;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
    }
`;

const Footer = () => (
    <StyledFooter   >
        <h1>All rights reserved.</h1>
        <h1>Project X 2020.</h1>
    </StyledFooter>
);

export default Footer;
