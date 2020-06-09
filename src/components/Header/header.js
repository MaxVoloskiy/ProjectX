import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background: #FFFFFF;
  box-shadow: 6px 6px 12px rgba(48, 68, 98, 0.12);
`;

const HeaderLogo = styled.div`
    margin: 10px 50px;
`;

const HeaderNavigation = styled.nav`
    display: flex;
    align-items: center;
`;

const NavigationList = styled.ul`
    list-style: none;
    display: flex;
    margin-right: 50px;
`;

const NavigationListItem = styled.li`
    display: inline-block;
    padding: 10px 0;
    position: relative;
    
    & a{
        text-decoration: none;
        color: #000000;
    }
    
    &:after{
        bottom: 0;
        content: "";
        display: block;
        height: 1px;
        left: 50%;
        position: absolute;
        background: #000000;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    
    &:hover:after{
        width: 100%;
        left: 0;
    }
    
    & + & {
        margin-left: 50px;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <HeaderLogo>
                <a href=""><img src="src/assets/logo.svg" alt="ProjectX logo"/></a>
            </HeaderLogo>
            <HeaderNavigation>
                <NavigationList>
                    <NavigationListItem> <a href="#">home</a> </NavigationListItem>
                    <NavigationListItem> <a href="#">projects</a> </NavigationListItem>
                    <NavigationListItem> <a href="#">about us</a> </NavigationListItem>
                    <NavigationListItem> <a href="#">past years</a> </NavigationListItem>
                </NavigationList>
            </HeaderNavigation>
        </StyledHeader>
    );
};

export default Header;
