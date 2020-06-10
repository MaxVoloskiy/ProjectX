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
        
        &#btnUp {
            background-color: #EA157A;
            
            svg {
                stroke: #ffffff;
            }
        }
        
        &#btnDown {
            svg {
                stroke: #EA157A;
            }
        }
    }
    
    
`;

const Block = styled.div`
    display:flex;
    background: #FFFFFF;
    box-shadow: 6px 6px 12px rgba(48, 68, 98, 0.12);
    border-radius: 10px;
`;

const Video = styled.iframe`
    border-radius: 10px;
    width: 435px;
    height: 250px;
`;

const BlockInfo = styled.div`
    padding: 20px;
    
    h1 {
        margin: 0;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
    }
    
    p {
        font-size: 14px;
        line-height: 17px;
    }
    
    div {
        margin-top: 20px;
        display:flex;
        align-items: flex-end;
        
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
        
    }
`;


const ProjectBlock = () => (
    <StyledBlock>
        <UpDownButtons>
            <button id="btnUp">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/>
                </svg>
            </button>
            <button id="btnDown">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/>
                </svg>

            </button>
        </UpDownButtons>
        <Block>
            <Video id="iframeName" src="https://www.youtube.com/embed/-w3CcZ0Nz9Y" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
            />
            <BlockInfo>
                <h1>Amazing Project title</h1>
                <p>Short project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas pretium turpis dapibus aliquet fames iaculis. Interdum vitae, sit non sapien mattis. Commodo vestibulum id posuere neque vulputate est orci. Diam justo ligula vitae dolor, tempus. Ac, arcu euismod massa dui ut. Aenean in quis platea...</p>
                <div>
                    <img id="firstPerson" src="/src/assets/person.jpg" alt=""/>
                    <img src="/src/assets/person.jpg" alt=""/>
                    <img src="/src/assets/person.jpg" alt=""/>
                    <img src="/src/assets/person.jpg" alt=""/>

                    <a href="#">learn more...</a>
                </div>
            </BlockInfo>
        </Block>
    </StyledBlock>
);

export default ProjectBlock;
