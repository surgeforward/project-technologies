import React, { Component } from 'react';
//import logo from '../logo.svg';
import './app.css';
// import TechList from '../techlist/techlist';
import ProjectList from '../projectlist/projectlist';
//import HeaderNav from '../headnav/headernav';

class App extends Component {
  render() {
    return (
        <div>
            <div className="body">
                <ProjectList  />
            </div>
        </div>
    );
  }
}

export default App;
