import React, { Component } from 'react';
import logo from '../logo.svg';
import './app.css';
import TechList from '../techlist/techlist';
import ProjectList from '../projectlist/projectlist';

class App extends Component {
  render() {
    let projects = [
      {
        Name: "Trace3",
        Technologies:["C#","MVC"]
      }
    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ProjectList data={projects} />
      </div>
    );
  }
}

export default App;