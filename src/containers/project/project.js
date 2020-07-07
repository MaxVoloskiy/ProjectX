/* eslint react/prop-types: 0 */
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {db} from "../../config/fbConfig";

import TeamSlider from "../../components/teamSlider";
import Highlights from "../../components/highlights";

const Main = styled.main`
`;

const Video = styled.iframe`
    position:absolute;
    width:100%;
    height: 500px;
    left:0
`;

const Description = styled.section`
    margin-top: 430px;
    position: relative;
    padding: 50px 100px;
    background-color: #ffffff;
    box-shadow: 6px 6px 12px rgba(48, 68, 98, 0.12);
    border-radius: 10px;
`;

const DescriptionHeader = styled.h1`
    text-align:center;
    margin-bottom: 50px;
    font-weight: 600;
    font-size: 64px;
    line-height: 78px;   
`;

const DescriptionContent = styled.p`
    font-size: 18px;
    line-height: 22px;
`;

const Team = styled.section`
    padding: 100px 65px;
`;

const SectionHeader = styled.h1`
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    margin-bottom: 50px;
`;

const HighlightsSection = styled.section`
    margin-top: 50px;
`;

const ChatSection = styled.section`
    margin-top:100px;
`;

const Project = (props) => {

    const id = props.match.params.id;
    const [project, setProject] = useState(null);
    const [team, setTeam] = useState([]);

    useEffect(() => {
        db.doc(`/projects/${id}`)
        .get().then(snap =>{
            setProject(snap.data());
        });

        return setProject(null);
    }, [id]);

    useEffect(() => {
        db.collection("team")
            .where("projects", "array-contains", id)
            .get()
            .then(snap => {
                let result = snap.docs.map(doc => doc.data());
                setTeam(result);
            });
        return setTeam([]);
    }, []);

    const [highlights, setHighlights] = useState([]);

    useEffect(() => {
        db.collection("highlights")
            .where("projectId", "==", id)
            .get().then(snap => {
                let result = snap.docs.map(doc => doc.data());
                setHighlights(result);
        });

        return setHighlights([]);
    }, []);

    return (
        <Main>
            <Video id="iframeName" src={project && "https://www.youtube.com/embed/" + project.videoLink.slice(-11)} frameBorder="0"
                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
            />
            <Description>
                <DescriptionHeader>{project && project.title}</DescriptionHeader>
                <DescriptionContent>
                    {project && project.content}
                </DescriptionContent>
            </Description>

            {(team.length !== 0 ) ?
                <Team>
                    <SectionHeader>Project Dream Team</SectionHeader>
                    <TeamSlider team={team} />
                </Team> : null
            }

            {(highlights.length !== 0) ?
                <HighlightsSection>
                    <SectionHeader>Project Highlights</SectionHeader>
                    <Highlights highlights={highlights}/>
                </HighlightsSection> : null
            }

            <ChatSection>
                <SectionHeader>Project chat</SectionHeader>
            </ChatSection>
        </Main>
    );
};

export default Project;
