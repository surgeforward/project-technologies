import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import store from './store';
import {Provider} from 'react-redux'
import { Router, Route} from 'react-router'
import createHistory from 'history/createBrowserHistory'

console.log(Router);
const browserHistory = createHistory()
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


var appStore = store({projects:projects});
console.log(browserHistory);

ReactDOM.render(
  <Provider store={appStore}>
    <Router history={browserHistory} >
        <Route path="/" component={App}>
        </Route>
    </Router>
</Provider >,
  document.getElementById('root')
);
