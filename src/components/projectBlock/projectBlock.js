/* eslint react/prop-types: 0 */
import React from "react";
import styled from "styled-components";

const StyledBlock = styled.div`
    display: flex;
    margin: 50px;
    height: 250px;
`;

const UpDownButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    
    button{
        border: 2px solid #EA157A;
        border-radius: 50%;
        width: 65px; 
        height: 65px;
        box-sizing: border-box;
        box-shadow: 6px 6px 12px rgba(48, 68, 98, 0.12);
        background: transparent;
        cursor: pointer;
        margin: 8px 35px;
        transition: 0.3s;
        svg {
            transition: 0.3s;
            stroke: #EA157A;
        }
        
        &:hover {
            background-color: #EA157A;
            
            svg {
                stroke: #ffffff;
            }
        }
    }
    
    
`;

const Block = styled.div`
    display:flex;
    background: #FFFFFF;
    box-shadow: 6px 6px 12px rgba(48, 68, 98, 0.12);
    border-radius: 10px;
    width: 100%;
`;

const Video = styled.iframe`
    border-radius: 10px;
    height: 250px;
`;

const BlockInfo = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const Team = styled.div`
    display:flex;
    align-items: flex-end;
    flex-grow: 1;
        
        img {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            
            &#firstPerson {
                height: 65px;
                width: 65px;
            }
        }
        
        img + img {
            margin-left: 10px;
        }
        
        a {
            margin-left:auto;
            font-style: italic;
            font-weight: 500;
            font-size: 22px;
            line-height: 27px;
            color: #304462;
        }
`;

const Information = styled.div`
    h1 {
        margin: 0;
        font-weight: 500;
        font-size: 27px;
        line-height: 32px;
    }
    
    p {
        max-height: 50px;
        margin: 15px 0;
        font-size: 14px;
        line-height: 17px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;


const ProjectBlock = ({project}) => (
    <StyledBlock>
        <UpDownButtons>
            <button>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/>
                </svg>
            </button>
            <button>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/>
                </svg>
            </button>
        </UpDownButtons>
        <Block>
            <Video id="iframeName" src={"https://www.youtube.com/embed/" + project.videoLink.slice(-11)} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
            />
            <BlockInfo>
                <Information>
                    <h1>{project.title}</h1>
                    <p>{project.content}</p>
                </Information>
                <Team>
                    <img id="firstPerson" src="/src/assets/person.jpg" alt=""/>
                    <img src="/src/assets/person.jpg" alt=""/>
                    <img src="/src/assets/person.jpg" alt=""/>
                    <img src="/src/assets/person.jpg" alt=""/>

                    <a href="#">learn more...</a>
                </Team>
            </BlockInfo>
        </Block>
    </StyledBlock>
);

export default ProjectBlock;
