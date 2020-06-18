import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ProjectBlock from "../../components/projectBlock";
import SubmitProjectForm from "../../components/submitProjectForm";
import { db, tataSettings } from "../../config/fbConfig";
import * as tata from "tata-js";

const Container = styled.main`
    max-width: 1200px;
    width: 100%;
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

const ProjectList = () => {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        db.collection("projects")
            .get()
            .then((snap) => {
                setProjects(snap.docs);
            })
            .catch((err) => tata.error("Error", err.message, tataSettings));
        return setProjects(null);
    }, []);

    const [showForm, setShowForm] = useState(false);

    const showFormFunc = () => setShowForm(!showForm);
    return (
        <Container>
            <Header>
                <h1>Currently submitted projects</h1>
                <button onClick={showFormFunc}>submit your own</button>
            </Header>
            {showForm ?
                <SubmitProjectForm
                    showForm={showFormFunc}
                    addProject={setProjects}
                    projects={projects}
                /> : null}
            { projects && projects.map(project => <ProjectBlock project={project} key={project.id}/> )}
        </Container>
    );
};

export default ProjectList;

