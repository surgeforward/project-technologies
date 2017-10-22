import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import HeaderNav from './headnav/headernav';
import ProjectForm from './project/projectform';
import EditProject from './project/editproject';
import './index.css';
import logo from './logo.svg';
import './app/app.css';
import store from './store';
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

console.log(ProjectForm);
const browserHistory = createHistory();
import TransitionGroup from "react-transition-group/TransitionGroup"

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

let projects = [
  {
    id: 1,
    Name: "Oliver Wyman",
    Technologies:["Nodejs","Knockout","Mongodb"]
  },
  {
    id: 2,
    Name: "CivicPlus",
    Technologies:["C#","MVC","Identity Server"]
  },
  {
    id: 3,
    Name: "Trace3",
    Technologies:["C#","MVC"]
  },
  {
    id: 4,
    Name: "IngoMoney",
    Technologies:["C#","MVC"]
  }
]
let projectNames = [...projects.map(project=>({id:project.id, Name:project.Name}))]
var appStore = store({projects:projects, projectNames: projectNames});

ReactDOM.render(
  <Provider store={appStore}>
    <Router >
        <div className="App">
          {/* <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div> */}
          {/* <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          <div className="container">
            <HeaderNav />
            <Route exact path="/"
              children={ ({ match, ...rest }) => (
                <TransitionGroup component={firstChild} >
                  {match && <App {...rest} />}
                </TransitionGroup>
            )}/>

            <Route exact path="/projectlist"
              children={ ({ match, ...rest }) => (
                <TransitionGroup component={firstChild} >
                  {match && <App {...rest} />}
                </TransitionGroup>
            )}/>

            <Route exact path="/projectform"
              children={ ({ match, ...rest }) => (
                <TransitionGroup component={firstChild} >
                  {match && <ProjectForm {...rest} />}
                </TransitionGroup>
            )}/>

            <Route exact path="/editproject/:id"
              children={ ({ match, ...rest }) => (
                <TransitionGroup component={firstChild} >
                  {match && <EditProject {...rest} />}
                </TransitionGroup>
            )}/>
            {/* 
            <Route exact path="/" component={App} />
            <Route exact path="/projectlist" component={App} />
            <Route path="/projectform" component={ProjectForm} />
            <Route path="/editproject/:id" component={EditProject} /> */}
          </div>
        </div>
    </Router>
  </Provider >,
  document.getElementById('root')
);
