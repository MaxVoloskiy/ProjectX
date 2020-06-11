import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./containers/header";
import Footer from "./containers/footer";
import ProjectsScreen from "./containers/projectsScreen";

import "./App.css";

const App = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/projects" component={ProjectsScreen}/>
        </Switch>
        <Footer/>

    </BrowserRouter>
);

export default App;
