import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./containers/Header";
import ProjectsScreen from "./containers/projectsScreen";

import "./App.css";

const App = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/projects" component={ProjectsScreen}/>
        </Switch>

    </BrowserRouter>
);

export default App;
