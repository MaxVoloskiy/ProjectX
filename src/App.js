import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./containers/header";
import Footer from "./containers/footer";
import ProjectList from "./containers/projectList";
import Project from "./containers/project";

import "./App.css";

const App = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/projects" component={ProjectList}/>
            <Route exact path="/projects/:id" component={Project}/>
        </Switch>
        <Footer/>

    </BrowserRouter>
);

export default App;
