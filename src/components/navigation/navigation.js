import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
`;

const MenuList = styled.ul`
    list-style: none;
    display: flex;
    margin-right: 50px;
`;

const MenuListItem = styled.li`
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

const Navigation = () => (
    <StyledNavigation>
        <MenuList>
            <MenuListItem>
                <NavLink to="/">home</NavLink>
            </MenuListItem>
            <MenuListItem>
                <NavLink to="/projects">projects</NavLink>
            </MenuListItem>
            <MenuListItem>
                <NavLink to="/">about us</NavLink>
            </MenuListItem>
            <MenuListItem>
                <NavLink to="/">past years</NavLink>
            </MenuListItem>
        </MenuList>
    </StyledNavigation>
);

export default Navigation;
