/* eslint react/prop-types: 0 */
import React, {useState} from "react";
import styled from "styled-components";

const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    background: linear-gradient(149.66deg, #101010 -6.07%, rgba(104, 104, 104, 0) 102.18%), rgba(16, 19, 30, 0.85); }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    position: relative;
    display:flex;
    flex-direction: column;
    background-color: #F4F9FF;
    padding: 50px;
    border-radius: 10px;
`;

const Header = styled.h1`
    font-weight: 600;
    font-size: 48px;
    line-height: 50px;
    margin-bottom: 40px;
`;

const InputField = styled.input`
    margin: 20px 0;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
`;

const TextArea = styled.textarea`
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    resize: none;
    min-height: 150px;
`;

const Button = styled.button`
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    margin: auto;
    padding: 10px 50px;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #304462;
    box-shadow: 6px 6px 12px rgba(48, 68, 98, 0.12);
`;

const Cross = styled.button`
    background: transparent;
    border: none;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    
    
`;

const CrossImg = styled.img`
    height:20px;
    width: 20px;
`;

const SubmitProjectForm = ({showForm, addProject, projects}) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [videoLink, setVideoLink] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addProject([...projects, {
            title: title,
            content: content,
            videoLink: videoLink
        }]);
        showForm();
    };

    return (
        <Overlay>
            <Form onSubmit={handleSubmit}>
                <Cross onClick={showForm}><CrossImg src="./src/assets/cross.svg" alt=""/></Cross>
                <Header>Submit your own project</Header>
                <InputField
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder='Enter the title'
                />
                <TextArea
                    type="text"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder='Enter the description'/>
                <InputField
                    type="text"
                    value={videoLink}
                    onChange={e => setVideoLink(e.target.value)}
                    placeholder="Enter the link to the video"/>
                <Button>Submit</Button>
            </Form>
        </Overlay>
    );
};

export default SubmitProjectForm;
