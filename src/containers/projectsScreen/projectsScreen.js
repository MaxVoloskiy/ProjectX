import React from "react";
import styled from "styled-components";

import ProjectBlock from "../../components/projectBlock";

const Container = styled.main`
    max-width: 1200px;
    margin:auto;
`;

const Header = styled.header`
    margin: 50px;
    display: flex;
    justify-content: space-between;
    
    h1 {
        font-weight: 600;
        font-size: 44px;
        line-height: 59px;
    }
    
    button {
        background: #304462;
        box-shadow: 6px 6px 12px rgba(48, 68, 98, 0.12);
        border-radius: 10px;
        border: none;
        color: #ffffff;
        align-self: center;
        padding: 15px 65px;
        outline:none;
        cursor: pointer;
        font-weight: 500;
        font-size: 22px;
        line-height: 27px;
    }
`;

const ProjectsScreen = () => {
    return (
        <Container>
            <Header>
                <h1>Currently submitted projects</h1>
                <button>submit your own</button>
            </Header>
            <ProjectBlock/>
        </Container>
    );
};

export default ProjectsScreen;

