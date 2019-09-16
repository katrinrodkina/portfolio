import React from "react";
import "./App.css";
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import {Link} from 'react-router-dom'
import Routes from './components/routes'
import Main from './components/Main'


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header    className='header-color' style={{ background: '#222A68' }} title="Portfolio" scroll>

            <Navigation className='header-color' >
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className='header-color'  title="Portfolio">
            <Navigation className='header-color'>
               <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content"  />
         
            <Routes  />

       
        </Content>
    </Layout>
</div>
  );
}

export default App;
