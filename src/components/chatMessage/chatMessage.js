/* eslint react/prop-types: 0 */
import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
    display: flex;
    margin: 50px 0;
    
    &:nth-child(2n), &:nth-child(2n) div{
        flex-direction: row-reverse;
        text-align: right;
    }
`;

const Avatar = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
`;

const MessageContent = styled.div`
    margin: 0 20px;
    max-width: 850px;
    width: 100%;
    padding: 20px 10px;
    background: #FFFFFF;
    box-shadow: 6px 6px 12px rgba(48, 68, 98, 0.12);
    border-radius: 10px;
`;

const MessageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 20px;
`;

const Name = styled.h1`
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
`;

const Date =  styled.p`
    font-size: 14px;
    line-height: 17px;
`;

const Text = styled.p`
    font-size: 14px;
    line-height: 17px;
`;

const LikesButton = styled.button`
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin: auto;
    border: 2px solid #EA157A;
    color:#EA157A;
    box-sizing: border-box;
    background: transparent;
    box-shadow: 6px 6px 12px rgba(48, 68, 98, 0.12);
    cursor: pointer;
`;
const ChatMessage = ({date, name, text}) => {
    return (
        <MessageContainer>
            <Avatar src="/src/assets/person.jpg" alt=""/>
            <MessageContent>
                <MessageHeader>
                    <Name>{name}</Name>
                    <Date>{date}</Date>
                </MessageHeader>
                <Text>
                    {text}
                </Text>
            </MessageContent>
            <LikesButton>Likes</LikesButton>
        </MessageContainer>
    );
};

export default ChatMessage;
