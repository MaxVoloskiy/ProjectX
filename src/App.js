import React from "react";
import {BrowserRouter} from "react-router-dom";

import Header from "./containers/Header";
import ProjectsScreen from "./containers/projectsScreen";

import "./App.css";

const App = () => (
    <BrowserRouter>
        <Header />
        <ProjectsScreen />
    </BrowserRouter>
);

export default App;
