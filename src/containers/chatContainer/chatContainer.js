/* eslint react/prop-types: 0 */
import React, {useEffect, useState, useRef} from "react";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import styled from "styled-components";
import ChatMessage from "../../components/chatMessage";
import {db, fieldValue} from "../../config/fbConfig";

const ChatContainerStyled = styled.div`
`;

const MessagesContainer = styled.div`
    height: 965px;
    overflow-y: auto;
    padding: 0 20px;
`;

const Form = styled.form`
    max-width: 950px;
    margin: auto;
    display: flex;
`;

const Textarea = styled.input`
    height: 50px;
    width: 85%;
    resize: none;
    outline: none;
    background: #ffffff;
    box-shadow: 6px 6px 12px rgba(48, 68, 98, 0.12);
    border: none;
    border-radius: 10px;
    padding: 20px;
    
    
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    
    &::placeholder{
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    }
`;

const SendButton = styled.button`
    height: 90px;
    padding: 20px;
    margin-left: 25px;
    background: #304462;
    border-radius: 10px;
    cursor: pointer;
`;

const ChatContainer = ({id}) => {

    const [newMessage, setNewMessage] = useState(null);
    const [chat, setChat] = useState([]);
    const ref = useRef();

    useEffect(() => {
        db.doc(`/projects/${id}`).onSnapshot(
            snap => {
                setChat(snap.data()["chat"]);
            }
        );
        return setChat(null);
    },[id]);

    useDidUpdate(() => {
        let lastEl = document.getElementById("lastEl");
        if (lastEl) {
            lastEl.scrollIntoView();
        }
    }, [chat]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (newMessage) {
            db.doc(`/projects/${id}`)
                .update({
                    chat: fieldValue.arrayUnion({
                        id: "",
                        text: newMessage,
                        createdAt: new Date(),
                        createdBy: "John",
                        likes: 2,
                    }),
                })
                .then(() => {
                    ref.current.reset();
                    setNewMessage(null);
                });
        }
    };

    return (
        <ChatContainerStyled>
            <MessagesContainer>
                {chat && chat.map(({createdAt, createdBy, text}, i) => {
                    let id = null;
                    if (i === chat.length - 1){
                        id = "lastEl";
                    }
                    return (
                        <ChatMessage
                            id={id}
                            key={i}
                            date={createdAt}
                            name={createdBy}
                            text={text}
                        />
                    );
                })}
            </MessagesContainer>
            <Form onSubmit={sendMessage} ref={ref}>
                <Textarea
                    autoFocus
                    defaultValue={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="type your message here..."/>
                <SendButton>
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45 1L20.8 25.2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M45 1L29.6 45L20.8 25.2L1 16.4L45 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </SendButton>
            </Form>
        </ChatContainerStyled>
    );
};

export default ChatContainer;
