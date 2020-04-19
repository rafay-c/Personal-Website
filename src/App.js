import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import Route from './components/route';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/">
                  <i className="fa fa-home" aria-hidden="true"/>
                </Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Route/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
 