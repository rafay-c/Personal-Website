import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
)

export default Main;