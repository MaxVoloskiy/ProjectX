/* eslint react/prop-types: 0 */
import React from "react";
import styled from "styled-components";

const HighlightsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const HighlightsItem = styled.div`
    background-color: #C4D7FC;
    box-shadow: 6px 6px 12px rgba(48, 68, 98, 0.12);
    border-radius: 10px;
    width:  calc(100% / 3 - 50px);
    height: 350px;
    margin:25px;
`;

const HighlightImage = styled.img`
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    margin: 20px;
    border-radius: 10px
`;

const HighlightContent = styled.div`
    position:relative;
    margin-top: -155px;
    background: #FFFFFF;
    opacity: 0.7;
    border-radius: 10px;
    padding:20px;
`;

const HighlightHeader = styled.h1`
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
`;

const HighlightText = styled.p`
    font-size: 14px;
    line-height: 18px;
`;


const Highlights = ({highlights}) => {
    return (
        <HighlightsSection>
            {highlights.map(({title, content}, i) => (
                   <HighlightsItem key={i}>
                       <HighlightImage src="/src/assets/picture.jpg" alt=""/>
                       <HighlightContent>
                           <HighlightHeader>{title}</HighlightHeader>
                           <HighlightText>
                               {content.substring(0,200)}
                           </HighlightText>
                       </HighlightContent>
                   </HighlightsItem>
               ))}
        </HighlightsSection>
    );
};

export default Highlights;
