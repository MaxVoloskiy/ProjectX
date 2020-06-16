import React from "react";
import styled from "styled-components";

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
`;

const ChatSection = styled.section`
    margin-top:100px;
`;

const Project = () => {

    return (
        <Main>
            <Video id="iframeName" src="https://www.youtube.com/embed/-w3CcZ0Nz9Y" frameBorder="0"
                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
            />
            <Description>
                <DescriptionHeader>Amazing project title</DescriptionHeader>
                <DescriptionContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur distinctio dolore dolorem ea eaque exercitationem incidunt ipsa iure laboriosam nihil praesentium quibusdam quos similique sunt tempora, velit vero voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aliquid, beatae consectetur, cupiditate eos et ex excepturi harum illum magni minima, molestias neque nisi odio quae similique ullam veritatis. Facere hic incidunt ipsa? Aliquam nostrum pariatur recusandae rerum saepe. Debitis delectus distinctio doloremque eos fuga, fugiat maxime nemo, quibusdam repellendus saepe unde veritatis voluptatum? Obcaecati possimus quidem vel voluptates.
                    <br/>
                    <br/>
                    <b>Rhoncus duis commodo</b> <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, animi cumque, et incidunt maxime modi molestias natus numquam quisquam, quos recusandae rem repellendus tenetur? Ad, eveniet nam? Alias, ducimus, repellendus.
                    <br/>
                    <br/>
                    <b>Curcus nest est sed</b><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque fugiat in nesciunt nisi quidem, repudiandae suscipit! Adipisci cupiditate eaque, illo, ipsa laborum modi nemo nulla quibusdam soluta voluptatem voluptatum.
                </DescriptionContent>
            </Description>
            <Team>
                <SectionHeader>Project Dream Team</SectionHeader>
                <TeamSlider />
            </Team>
            <HighlightsSection>
                <SectionHeader>Project Highlights</SectionHeader>
                <Highlights/>
            </HighlightsSection>
            <ChatSection>
                <SectionHeader>Project chat</SectionHeader>
            </ChatSection>
        </Main>
    );
};

export default Project;
