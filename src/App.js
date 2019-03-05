import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main'; 
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
            
            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Ijabila</Link>} scroll>
                    <Navigation>
                        <Link to="/Resume">Resume</Link>
                        <Link to="/Aboutme">About Me</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Ijabila</Link>} >
                    <Navigation>
                    <Link to="/Resume">Resume</Link>
                        <Link to="/Aboutme">About Me</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
  
    );
  }
}

export default App;
