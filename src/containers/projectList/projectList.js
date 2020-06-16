import React, {useState} from "react";
import styled from "styled-components";
import ProjectBlock from "../../components/projectBlock";
import SubmitProjectForm from "../../components/submitProjectForm";

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

const ProjectList = () => {

    const [projects, setProjects] = useState( [
            {
                id: "1",
                title: "Вебінар «Інформаційний менеджмент для проджекта: поради, хитрощі, секрети».",
                content: "Вебінар «Інформаційний менеджмент для проджекта: поради, хитрощі, секрети». У програмі: уміння і таланти: як сформувати гармонійну структуру менеджерських навичок, інформаційний менеджмент: як управляти потоками інформації різних діджитал-проектів, як приймати правильні рішення, який софт потрібен для зручного управління проєктами:",
                videoLink: "https://youtu.be/-w3CcZ0Nz9Y",
            },
            {
                id: "2",
                title: "Онлайн-лекція «Оформлення Upwork для майбутньої кар’єри».",
                content: "Спікер творчого простору Центру розвитку стартапів 1991 Андрій Гадашевич підготував інформацію про глобальний майданчик із пошуку роботи для фрілансерів Upwork та правила якісного портфоліо на ньому",
                videoLink: "https://youtu.be/-w3CcZ0Nz9Y",
            },
            {
                id: "3",
                title: "Vinnytsia data science society online season 2020 — Bogdan Shkar.",
                content: "У програмі: створення одного пункту для збору, очищення та керування даними, алгоритми для формування бізнес рішень, застосування автоматизації для комунікацій з клієнтами, аналітика для аналізу результатів і пошуку нових рішень:",
                videoLink: "https://youtu.be/-w3CcZ0Nz9Y",
            },
        ]);

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

