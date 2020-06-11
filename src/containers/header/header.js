import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import Navigation from "../../components/navigation";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background: #FFFFFF;
  box-shadow: 6px 6px 12px rgba(48, 68, 98, 0.12);
`;

const HeaderLogo = styled.div`
    margin: 10px 50px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <HeaderLogo>
                <Link to="/"><img src="src/assets/logo.svg" alt="ProjectX logo"/></Link>
            </HeaderLogo>
            <Navigation/>
        </StyledHeader>
    );
};

export default Header;
